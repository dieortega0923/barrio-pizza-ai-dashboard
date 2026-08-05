/**
 * xlsx-export.js
 * Genera un .xlsx descargable con el estado actual del análisis, usando
 * SheetJS (cargado por CDN en index.html como window.XLSX). Todo corre en
 * el navegador, no hay backend ni llamada a servidor.
 *
 * Hojas del archivo:
 *   1. Resumen        -> los mismos KPIs que se ven arriba en el dashboard
 *   2. Alertas         -> el detalle línea por línea (lo que se ve en "Alertas")
 *   3. Ordenes atipicas-> la comparación entre sucursales
 *   4. Por proveedor   -> el pedido corregido agrupado por proveedor
 *
 * Útil para que la gerente de compras lo revise manualmente, lo filtre en
 * Excel, o se lo reenvíe a alguien que no va a entrar al dashboard.
 */

(() => {

  const NOMBRE_TIPO = {
    riesgo_quiebre: 'Riesgo de quiebre',
    sobre_pedido: 'Sobre-pedido',
    olvido: 'Olvido',
    ok: 'Dentro de lo esperado',
  };

  function hojaResumen(resultados, anomalias) {
    const contar = tipo => resultados.filter(r => r.tipo === tipo).length;
    const filas = [
      ['Barrio Pizza — Control de Compras'],
      ['Generado', new Date().toLocaleString('es-PA')],
      [],
      ['Indicador', 'Valor'],
      ['Líneas revisadas', resultados.length],
      ['Riesgo de quiebre', contar('riesgo_quiebre')],
      ['Sobre-pedido', contar('sobre_pedido')],
      ['Olvidos (no incluidos en la orden)', contar('olvido')],
      ['Órdenes atípicas entre sucursales', anomalias.length],
    ];
    const hoja = XLSX.utils.aoa_to_sheet(filas);
    hoja['!cols'] = [{ wch: 38 }, { wch: 24 }];
    return hoja;
  }

  function hojaAlertas(resultados) {
    const filas = resultados.map(r => ({
      'Sucursal': r.sucursal,
      'Ingrediente': r.nombre,
      'Proveedor': r.proveedor,
      'Tipo de alerta': NOMBRE_TIPO[r.tipo],
      'Proyección semana 7': Engine.round1(r.proyeccion),
      'Unidad': r.unidad,
      'Stock actual': Engine.round1(r.stockActual),
      'Necesidad real': Engine.round1(r.necesidadReal),
      'Formato de compra': r.formatoCompra,
      'Pedido esta semana (formatos)': r.cantidadFormatos,
      'Recomendado (formatos)': r.formatosRecomendados,
      'Diferencia (unidad base)': Engine.round1(r.diferenciaBase),
      'Mensaje': r.mensaje,
    }));
    const hoja = XLSX.utils.json_to_sheet(filas);
    hoja['!cols'] = [
      { wch: 16 }, { wch: 18 }, { wch: 20 }, { wch: 18 }, { wch: 16 },
      { wch: 8 }, { wch: 12 }, { wch: 14 }, { wch: 16 }, { wch: 14 },
      { wch: 14 }, { wch: 16 }, { wch: 60 },
    ];
    return hoja;
  }

  function hojaAnomalias(anomalias) {
    const filas = anomalias.map(a => ({
      'Sucursal': a.sucursal,
      'Ingrediente': a.nombre,
      'Pedido (unidad base)': Engine.round1(a.ordenBase),
      'Mediana de las demás': Engine.round1(a.medianaOtras),
      'Veces la mediana': Number(a.ratio.toFixed(2)),
      'Mensaje': a.mensaje,
    }));
    const hoja = XLSX.utils.json_to_sheet(filas.length ? filas : [{ 'Mensaje': 'No se detectaron órdenes atípicas esta semana.' }]);
    hoja['!cols'] = [{ wch: 16 }, { wch: 18 }, { wch: 18 }, { wch: 18 }, { wch: 15 }, { wch: 60 }];
    return hoja;
  }

  function hojaProveedores(resultados) {
    const porProveedor = Engine.pedidoCorregidoPorProveedor(resultados);
    const filas = [];
    Object.entries(porProveedor).forEach(([proveedor, lineas]) => {
      lineas.forEach(l => {
        filas.push({
          'Proveedor': proveedor,
          'Sucursal': l.sucursal,
          'Ingrediente': l.ingrediente,
          'Formato de compra': l.formatoCompra,
          'Pedido original (formatos)': l.formatosPedidosOriginal ?? 0,
          'Recomendado (formatos)': l.formatosRecomendados,
          'Estado': NOMBRE_TIPO[l.tipo],
        });
      });
    });
    const hoja = XLSX.utils.json_to_sheet(filas);
    hoja['!cols'] = [{ wch: 20 }, { wch: 16 }, { wch: 18 }, { wch: 18 }, { wch: 20 }, { wch: 18 }, { wch: 18 }];
    return hoja;
  }

  function exportar() {
    const resultados = App.getResultados();
    const anomalias = App.getAnomalias();

    const libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hojaResumen(resultados, anomalias), 'Resumen');
    XLSX.utils.book_append_sheet(libro, hojaAlertas(resultados), 'Alertas');
    XLSX.utils.book_append_sheet(libro, hojaAnomalias(anomalias), 'Ordenes atipicas');
    XLSX.utils.book_append_sheet(libro, hojaProveedores(resultados), 'Por proveedor');

    const fecha = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(libro, `barrio-pizza-control-compras-${fecha}.xlsx`);
  }

  function init() {
    const boton = document.getElementById('btnExportarExcel');
    boton.addEventListener('click', () => {
      if (typeof XLSX === 'undefined') {
        alert('No se pudo cargar la librería de Excel (revisá tu conexión a internet) — intentá de nuevo en un momento.');
        return;
      }
      exportar();
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();