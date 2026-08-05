/**
 * insights.js
 * Patrones y prioridades calculados de forma 100% determinista a partir
 * de lo que Engine ya generó — nada de esto usa IA, y por eso siempre
 * está disponible, incluso sin conexión.
 *
 * Esta es la capa de "qué es importante" (decisión). AssistantService
 * puede pedirle a la IA que lo redacte más natural, pero la selección
 * de qué mostrar siempre sale de acá, nunca del modelo.
 */

const Insights = (() => {

  function contarPorSucursal(resultados, tipos) {
    const conteo = {};
    resultados.forEach(r => {
      if (!tipos.includes(r.tipo)) return;
      conteo[r.sucursal] = (conteo[r.sucursal] || 0) + 1;
    });
    return conteo;
  }

  function maxEntrada(obj) {
    const entradas = Object.entries(obj);
    if (!entradas.length) return null;
    return entradas.reduce((a, b) => (b[1] > a[1] ? b : a));
  }

  /**
   * Devuelve una lista de observaciones en texto plano, listas para
   * mostrar directo en la UI. Determinista: mismos datos, mismo resultado.
   */
  function generarInsights(resultados, anomalias) {
    const insights = [];
    const tiposUrgentes = ['olvido', 'riesgo_quiebre', 'sobre_pedido'];

    // 1) Sucursal con más alertas en total
    const porSucursal = contarPorSucursal(resultados, tiposUrgentes);
    const peorSucursal = maxEntrada(porSucursal);
    if (peorSucursal) {
      insights.push(`${peorSucursal[0]} es la sucursal con más alertas esta semana (${peorSucursal[1]} en total) — conviene revisarla primero.`);
    }

    // 2) Proveedor que más se repite en sobre-pedidos
    const sobrePedidos = resultados.filter(r => r.tipo === 'sobre_pedido');
    const porProveedorSobre = {};
    sobrePedidos.forEach(r => { porProveedorSobre[r.proveedor] = (porProveedorSobre[r.proveedor] || 0) + 1; });
    const proveedorSobre = maxEntrada(porProveedorSobre);
    if (proveedorSobre && proveedorSobre[1] >= 2) {
      insights.push(`El proveedor "${proveedorSobre[0]}" concentra ${proveedorSobre[1]} casos de sobre-pedido entre varias sucursales — vale la pena revisar si el formato de compra que ofrece es muy grande para lo que consumen.`);
    }

    // 3) Ingrediente con riesgo de quiebre en más de una sucursal (patrón, no un caso aislado)
    const riesgos = resultados.filter(r => r.tipo === 'riesgo_quiebre' || r.tipo === 'olvido');
    const porIngredienteRiesgo = {};
    riesgos.forEach(r => {
      porIngredienteRiesgo[r.nombre] ??= new Set();
      porIngredienteRiesgo[r.nombre].add(r.sucursal);
    });
    const ingredienteMultiSucursal = Object.entries(porIngredienteRiesgo).find(([, sucs]) => sucs.size >= 2);
    if (ingredienteMultiSucursal) {
      const [nombre, sucs] = ingredienteMultiSucursal;
      insights.push(`${nombre} tiene riesgo de quiebre en ${sucs.size} sucursales distintas (${[...sucs].join(', ')}) — podría ser un patrón general y no un error puntual de una sola sucursal.`);
    }

    // 4) La anomalía más fuerte entre sucursales
    if (anomalias.length) {
      const peor = anomalias[0]; // ya viene ordenado por ratio desc desde Engine
      insights.push(`El caso más atípico de la semana: ${peor.sucursal} pidió ${peor.ratio.toFixed(1)}x la mediana de las demás sucursales en ${peor.nombre}.`);
    }

    if (!insights.length) {
      insights.push('No se detectaron patrones que destacar esta semana — las alertas están repartidas de forma pareja entre sucursales.');
    }

    return insights;
  }

  /**
   * Selecciona (de forma determinista) los N casos más urgentes para
   * actuar ya: primero olvidos, luego riesgo de quiebre por magnitud de
   * faltante, luego sobre-pedido por magnitud de exceso.
   */
  function topRecomendaciones(resultados, n = 5) {
    const prioridad = { olvido: 0, riesgo_quiebre: 1, sobre_pedido: 2 };
    const candidatos = resultados
      .filter(r => r.tipo !== 'ok')
      .map(r => ({ r, severidad: Math.abs(r.diferenciaBase) }))
      .sort((a, b) => {
        const p = prioridad[a.r.tipo] - prioridad[b.r.tipo];
        return p !== 0 ? p : b.severidad - a.severidad;
      })
      .slice(0, n);

    return candidatos.map(({ r }) => {
      if (r.tipo === 'olvido') {
        return `Agregar ${r.nombre} a la orden de ${r.sucursal} (${r.formatosRecomendados} × ${r.formatoCompra}) — no está en el pedido actual.`;
      }
      if (r.tipo === 'riesgo_quiebre') {
        return `Subir el pedido de ${r.nombre} en ${r.sucursal} de ${r.cantidadFormatos} a ${r.formatosRecomendados} × ${r.formatoCompra}.`;
      }
      return `Bajar el pedido de ${r.nombre} en ${r.sucursal} de ${r.cantidadFormatos} a ${r.formatosRecomendados} × ${r.formatoCompra}.`;
    });
  }

  return { generarInsights, topRecomendaciones };
})();