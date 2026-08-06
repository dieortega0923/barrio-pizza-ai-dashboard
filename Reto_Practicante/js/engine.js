/**
 * engine.js
 * Motor de cálculo de Barrio Pizza · Control de exceso de pedidos.
 *
 * Responsabilidad única de este archivo: tomar el dataset (ingredientes,
 * consumo histórico, inventario, orden de la semana) y producir, por
 * sucursal + ingrediente:
 *   - una proyección de consumo para la próxima semana
 *   - la necesidad real (proyección - inventario)
 *   - la comparación contra lo pedido, con alertas claras y accionables
 *
 * No toca el DOM. dashboard.js consume las funciones de acá.
 */

const Engine = (() => {

  const SEMANAS = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'];

  // ---------------------------------------------------------------------
  // 1) Indexado del dataset para acceso rápido
  // ---------------------------------------------------------------------

  function indexar(dataset) {
    const ingredientesPorId = {};
    dataset.ingredientes.forEach(i => { ingredientesPorId[i.ingrediente_id] = i; });

    const sucursales = [...new Set(dataset.orden.map(o => o.sucursal))].sort();

    // consumo[sucursal][ingrediente] = [w1..w6] en el orden S1..S6
    const consumo = {};
    dataset.consumo.forEach(c => {
      consumo[c.sucursal] ??= {};
      consumo[c.sucursal][c.ingrediente_id] ??= {};
      consumo[c.sucursal][c.ingrediente_id][c.semana] = c.consumo_unidad_base;
    });

    // inventario[sucursal][ingrediente] = stock actual
    const inventario = {};
    dataset.inventario.forEach(i => {
      inventario[i.sucursal] ??= {};
      inventario[i.sucursal][i.ingrediente_id] = i.stock_actual_unidad_base;
    });

    // orden[sucursal][ingrediente] = cantidad_formatos
    const orden = {};
    dataset.orden.forEach(o => {
      orden[o.sucursal] ??= {};
      orden[o.sucursal][o.ingrediente_id] = o.cantidad_formatos;
    });

    return { ingredientesPorId, sucursales, consumo, inventario, orden };
  }

  // ---------------------------------------------------------------------
  // 2) Proyección de consumo (semana 7)
  //
  //    Método: promedio simple ponderado + detección de outliers +
  //    tendencia lineal, con salvaguardas para no sobre-reaccionar a ruido.
  //
  //    a) Se calcula la mediana y la MAD (desviación absoluta mediana) de
  //       las 6 semanas. Cualquier semana que se desvíe más de 2.5x la MAD
  //       se considera atípica (ej. una semana con un evento puntual) y se
  //       excluye del ajuste de tendencia -- pero SIN descartarla del todo
  //       si eso dejaría menos de 3 semanas útiles (dato insuficiente).
  //    b) Sobre las semanas restantes, se ajusta una regresión lineal
  //       simple (mínimos cuadrados) para capturar tendencia de
  //       crecimiento o caída.
  //    c) La proyección final se calcula con la recta en el punto 7, pero
  //       se acota (clamp) entre 0.5x y 1.8x el promedio reciente, para
  //       que una tendencia fuerte en pocos datos no dispare la
  //       proyección de forma poco realista.
  // ---------------------------------------------------------------------

  function mediana(valores) {
    const v = [...valores].sort((a, b) => a - b);
    const mid = Math.floor(v.length / 2);
    return v.length % 2 ? v[mid] : (v[mid - 1] + v[mid]) / 2;
  }

  function regresionLineal(puntos) {
    // puntos: [[x, y], ...] -> devuelve {m, b} de y = m*x + b
    const n = puntos.length;
    if (n < 2) return { m: 0, b: puntos[0] ? puntos[0][1] : 0 };
    const sumX = puntos.reduce((s, [x]) => s + x, 0);
    const sumY = puntos.reduce((s, [, y]) => s + y, 0);
    const sumXY = puntos.reduce((s, [x, y]) => s + x * y, 0);
    const sumXX = puntos.reduce((s, [x]) => s + x * x, 0);
    const denom = n * sumXX - sumX * sumX;
    if (denom === 0) return { m: 0, b: sumY / n };
    const m = (n * sumXY - sumX * sumY) / denom;
    const b = (sumY - m * sumX) / n;
    return { m, b };
  }

  function proyectarConsumo(serieSemanal) {
    // serieSemanal: {S1: n, S2: n, ...} -> puede tener huecos si faltan datos
    const puntos = SEMANAS
      .map((s, idx) => [idx + 1, serieSemanal[s]])
      .filter(([, v]) => typeof v === 'number' && !Number.isNaN(v));

    if (puntos.length === 0) {
      return { proyeccion: 0, semanasUsadas: 0, semanasExcluidas: [], metodo: 'sin_datos' };
    }

    const valores = puntos.map(([, v]) => v);
    const promedioSimple = valores.reduce((a, b) => a + b, 0) / valores.length;

    if (puntos.length < 4) {
      // Muy pocos datos para hablar de tendencia con confianza: promedio simple.
      return {
        proyeccion: promedioSimple,
        semanasUsadas: puntos.length,
        semanasExcluidas: [],
        metodo: 'promedio_simple_datos_insuficientes'
      };
    }

    const med = mediana(valores);
    const mad = mediana(valores.map(v => Math.abs(v - med))) || 1e-9;

    const normales = [];
    const excluidas = [];
    puntos.forEach(([x, y]) => {
      const desvio = Math.abs(y - med) / mad;
      if (desvio > 2.5) excluidas.push(x); else normales.push([x, y]);
    });

    // Salvaguarda: si excluir deja menos de 3 puntos, no excluimos nada
    // (mejor una proyección algo influenciada por un outlier que una
    // proyección basada en casi ningún dato real).
    const puntosParaTendencia = normales.length >= 3 ? normales : puntos;
    const excluidasFinal = normales.length >= 3 ? excluidas : [];

    const { m, b } = regresionLineal(puntosParaTendencia);
    let proyeccion = m * 7 + b;

    // Clamp: no dejar que la tendencia dispare la proyección más allá de
    // un rango razonable respecto al promedio reciente (últimas 3 semanas).
    const recientes = valores.slice(-3);
    const promedioReciente = recientes.reduce((a, b) => a + b, 0) / recientes.length;
    const piso = promedioReciente * 0.5;
    const techo = promedioReciente * 1.8;
    proyeccion = Math.max(piso, Math.min(techo, proyeccion));
    proyeccion = Math.max(0, proyeccion);

    return {
      proyeccion,
      semanasUsadas: puntosParaTendencia.length,
      semanasExcluidas: excluidasFinal,
      metodo: excluidasFinal.length ? 'tendencia_con_outliers_excluidos' : 'tendencia_lineal'
    };
  }

  // ---------------------------------------------------------------------
  // 3) Comparación orden vs. necesidad real, con alertas
  // ---------------------------------------------------------------------

  const TIPO = {
    OK: 'ok',
    SOBRE_PEDIDO: 'sobre_pedido',
    RIESGO_QUIEBRE: 'riesgo_quiebre',
    OLVIDO: 'olvido',
  };

  function evaluarLinea({ sucursal, ingrediente, ing, serieSemanal, stockActual, cantidadFormatos }) {
    const formato = ing.unidad_base_por_formato;
    const proy = proyectarConsumo(serieSemanal);
    const necesidadReal = Math.max(0, proy.proyeccion - stockActual);
    const ordenBase = (cantidadFormatos ?? 0) * formato;
    const diferenciaBase = ordenBase - necesidadReal; // + = pidió de más, - = pidió de menos

    let tipo = TIPO.OK;
    let mensaje = '';
    const nombre = ing.nombre;
    const unidad = ing.unidad_base;

    if (cantidadFormatos === undefined || cantidadFormatos === null) {
      tipo = TIPO.OLVIDO;
      mensaje = `ALERTA: ${sucursal} no incluyó ${nombre} en su orden de esta semana, pero lo consume regularmente → riesgo de quiebre total (necesita ~${round1(necesidadReal)} ${unidad}).`;
    } else if (diferenciaBase > formato) {
      // Excedente mayor a un formato completo: sobre-pedido real, no redondeo.
      const formatosDeMas = diferenciaBase / formato;
      tipo = TIPO.SOBRE_PEDIDO;
      mensaje = `ALERTA: ${sucursal} está pidiendo ${round1(diferenciaBase)} ${unidad} de ${nombre} de más que lo proyectado (~${round1(formatosDeMas)} ${formatoSingular(ing.formato_compra)} de sobra) → plata inmovilizada${ing.es_perecedero === 'Si' ? ' y riesgo de vencimiento (es perecedero)' : ''}.`;
    } else if (diferenciaBase < 0) {
      const faltante = -diferenciaBase;
      tipo = TIPO.RIESGO_QUIEBRE;
      mensaje = `ALERTA: ${sucursal} está pidiendo ${round1(faltante)} ${unidad} de ${nombre} menos que lo proyectado → riesgo de quiebre.`;
    } else {
      mensaje = `${sucursal}: pedido de ${nombre} dentro de lo esperado (diferencia de ${round1(diferenciaBase)} ${unidad}, normal por redondeo a formato completo).`;
    }

    return {
      sucursal, ingrediente, nombre, proveedor: ing.proveedor, unidad,
      formatoCompra: ing.formato_compra, esPerecedero: ing.es_perecedero === 'Si',
      proyeccion: proy.proyeccion, metodoProyeccion: proy.metodo,
      semanasExcluidas: proy.semanasExcluidas,
      stockActual, cantidadFormatos: cantidadFormatos ?? 0, ordenBase,
      necesidadReal, diferenciaBase, tipo, mensaje,
      formatosRecomendados: Math.ceil(necesidadReal / formato),
    };
  }

  function round1(n) { return Math.round(n * 10) / 10; }

  function formatoSingular(formatoCompra) {
    // "Saco 25 kg" -> "saco", "Caja x 12 und" -> "caja", etc.
    return (formatoCompra || '').split(' ')[0].toLowerCase();
  }

  // ---------------------------------------------------------------------
  // 4) Correr el análisis completo sobre un dataset (con orden opcionalmente
  //    sobreescrita por el usuario desde la UI de edición/carga)
  // ---------------------------------------------------------------------

  function analizar(dataset, ordenOverride) {
    const idx = indexar(dataset);
    const orden = ordenOverride || idx.orden;
    const resultados = [];

    idx.sucursales.forEach(sucursal => {
      Object.values(idx.ingredientesPorId).forEach(ing => {
        const id = ing.ingrediente_id;
        const serieSemanal = (idx.consumo[sucursal] && idx.consumo[sucursal][id]) || {};
        const stockActual = (idx.inventario[sucursal] && idx.inventario[sucursal][id]) ?? 0;
        const tieneHistoria = Object.keys(serieSemanal).length > 0;
        const tieneStock = idx.inventario[sucursal] && (id in idx.inventario[sucursal]);

        // Si no hay ni historia de consumo ni registro de inventario para
        // este ingrediente en esta sucursal, no aplica (nunca lo manejan).
        if (!tieneHistoria && !tieneStock && !(orden[sucursal] && id in orden[sucursal])) return;

        const cantidadFormatos = orden[sucursal] ? orden[sucursal][id] : undefined;

        resultados.push(evaluarLinea({
          sucursal, ingrediente: id, ing, serieSemanal, stockActual, cantidadFormatos
        }));
      });
    });

    return { resultados, sucursales: idx.sucursales, ingredientesPorId: idx.ingredientesPorId };
  }

  // ---------------------------------------------------------------------
  // 5) Detección de órdenes raras: comparar una sucursal contra las demás
  //    para el mismo ingrediente (mismo período), usando pedido normalizado
  //    en unidad base para que sea comparable entre sucursales.
  // ---------------------------------------------------------------------

  function detectarAnomalias(resultados) {
    const porIngrediente = {};
    resultados.forEach(r => {
      porIngrediente[r.ingrediente] ??= [];
      porIngrediente[r.ingrediente].push(r);
    });

    const anomalias = [];
    Object.values(porIngrediente).forEach(grupo => {
      if (grupo.length < 3) return; // necesitamos al menos 3 sucursales para comparar con sentido
      const valores = grupo.map(r => r.ordenBase);
      const med = mediana(valores);
      const mad = mediana(valores.map(v => Math.abs(v - med))) || 1e-9;

      grupo.forEach(r => {
        const desvio = Math.abs(r.ordenBase - med) / mad;
        if (desvio > 3 && r.ordenBase > 0) {
          const ratio = med > 0 ? r.ordenBase / med : Infinity;
          anomalias.push({
            sucursal: r.sucursal, ingrediente: r.ingrediente, nombre: r.nombre,
            ordenBase: r.ordenBase, medianaOtras: med, ratio,
            mensaje: `ATÍPICO: ${r.sucursal} está pidiendo ${ratio.toFixed(1)}x la mediana de las demás sucursales en ${r.nombre} (${round1(r.ordenBase)} ${r.unidad} vs. mediana de ${round1(med)} ${r.unidad}) → vale la pena confirmar si es real (evento puntual, cliente grande) o error de carga.`
          });
        }
      });
    });

    return anomalias.sort((a, b) => b.ratio - a.ratio);
  }

  // ---------------------------------------------------------------------
  // 6) Pedido corregido agrupado por proveedor
  // ---------------------------------------------------------------------

  function pedidoCorregidoPorProveedor(resultados) {
    const porProveedor = {};
    resultados.forEach(r => {
      if (r.formatosRecomendados <= 0) return;
      porProveedor[r.proveedor] ??= [];
      porProveedor[r.proveedor].push({
        sucursal: r.sucursal,
        ingrediente: r.nombre,
        formatoCompra: r.formatoCompra,
        formatosPedidosOriginal: r.cantidadFormatos,
        formatosRecomendados: r.formatosRecomendados,
        tipo: r.tipo,
      });
    });
    return porProveedor;
  }

  return {
    TIPO, indexar, proyectarConsumo, analizar, detectarAnomalias,
    pedidoCorregidoPorProveedor, round1,
  };
})();