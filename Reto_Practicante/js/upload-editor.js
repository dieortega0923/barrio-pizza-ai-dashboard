/**
 * upload-editor.js
 * Maneja la carga de un archivo CSV nuevo de orden_compra_semana
 * (mismo formato: sucursal,ingrediente_id,cantidad_formatos) para
 * reemplazar la orden completa, y el botón de restaurar la original.
 *
 * No depende de ninguna librería: parseo de CSV simple hecho a mano,
 * suficiente para este formato (sin comas dentro de campos, sin comillas).
 */

(() => {

  function parseCsvOrden(texto) {
    const lineas = texto.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
    if (lineas.length < 2) throw new Error('El archivo está vacío o no tiene filas de datos.');

    const encabezado = lineas[0].replace(/^\uFEFF/, '').split(',').map(h => h.trim().toLowerCase());
    const idxSucursal = encabezado.indexOf('sucursal');
    const idxIngrediente = encabezado.indexOf('ingrediente_id');
    const idxCantidad = encabezado.indexOf('cantidad_formatos');

    if (idxSucursal === -1 || idxIngrediente === -1 || idxCantidad === -1) {
      throw new Error('El CSV debe tener las columnas: sucursal, ingrediente_id, cantidad_formatos.');
    }

    const orden = {};
    for (let i = 1; i < lineas.length; i++) {
      const campos = lineas[i].split(',');
      const sucursal = (campos[idxSucursal] || '').trim();
      const ingrediente = (campos[idxIngrediente] || '').trim();
      const cantidad = Number((campos[idxCantidad] || '').trim());

      if (!sucursal || !ingrediente) continue; // fila incompleta, se ignora
      if (Number.isNaN(cantidad)) {
        throw new Error(`Fila ${i + 1}: "${campos[idxCantidad]}" no es un número válido de cantidad_formatos.`);
      }

      orden[sucursal] ??= {};
      orden[sucursal][ingrediente] = cantidad;
    }

    return orden;
  }

  function mostrarEstado(mensaje, esError) {
    const el = document.getElementById('estadoCarga');
    el.textContent = mensaje;
    el.style.color = esError ? 'var(--tomate)' : 'var(--albahaca)';
  }

  function init() {
    const input = document.getElementById('inputCsvOrden');
    const btnRestaurar = document.getElementById('btnRestaurarOrden');

    input.addEventListener('change', () => {
      const archivo = input.files[0];
      if (!archivo) return;

      const lector = new FileReader();
      lector.onload = () => {
        try {
          const nuevaOrden = parseCsvOrden(String(lector.result));
          const totalLineas = Object.values(nuevaOrden).reduce((s, ing) => s + Object.keys(ing).length, 0);
          App.setOrdenActual(nuevaOrden);
          mostrarEstado(`Se cargó "${archivo.name}" (${totalLineas} líneas) y las alertas se recalcularon.`, false);
        } catch (err) {
          mostrarEstado(`No se pudo usar el archivo: ${err.message}`, true);
        } finally {
          input.value = ''; // permite volver a subir el mismo archivo si hace falta
        }
      };
      lector.onerror = () => mostrarEstado('No se pudo leer el archivo. Probá de nuevo.', true);
      lector.readAsText(archivo, 'utf-8');
    });

    btnRestaurar.addEventListener('click', () => {
      App.setOrdenActual(null);
      mostrarEstado('Se restauró la orden original del reto.', false);
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();