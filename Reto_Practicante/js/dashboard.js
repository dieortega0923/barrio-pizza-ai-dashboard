/**
 * dashboard.js
 * Conecta Engine (motor de cálculo) con la interfaz.
 * Responsabilidad: correr el análisis, pintar KPIs/tickets/tablas,
 * manejar filtros y el cambio de pestañas.
 *
 * Estado global simple (sin frameworks): App.orden guarda la orden vigente
 * (la original, o la editada/cargada por el usuario en la pestaña "Editar").
 * Cada vez que App.orden cambia, se vuelve a correr Engine.analizar() y se
 * repinta todo — así "Editar orden" y el resto del dashboard quedan en vivo.
 */

const App = (() => {

  let dataset = DATASET_DEFAULT;
  let ordenActual = null; // null = usar la orden original del dataset
  let resultados = [];
  let sucursales = [];
  let anomalias = [];

  const NOMBRE_TIPO = {
    riesgo_quiebre: 'Riesgo de quiebre',
    sobre_pedido: 'Sobre-pedido',
    olvido: 'Olvido',
    ok: 'Dentro de lo esperado',
  };

  // Orden de severidad para mostrar primero lo más urgente
  const ORDEN_TIPO = { olvido: 0, riesgo_quiebre: 1, sobre_pedido: 2, ok: 3 };

  // ---------------------------------------------------------------------
  // Recalcular todo (motor + repintado)
  // ---------------------------------------------------------------------

  function recalcular() {
    const analisis = Engine.analizar(dataset, ordenActual);
    resultados = analisis.resultados.sort((a, b) => ORDEN_TIPO[a.tipo] - ORDEN_TIPO[b.tipo]);
    sucursales = analisis.sucursales;
    anomalias = Engine.detectarAnomalias(resultados);

    pintarKpis();
    poblarFiltroSucursal();
    pintarAlertas();
    pintarAnomalias();
    pintarProveedores();
    pintarTablaEditable();
    pintarInsights();

    // El resumen y las recomendaciones son "bajo demanda" (llaman a la IA,
    // no tiene sentido dispararlos solos cada vez que se edita una cantidad).
    // Si el usuario ya había generado uno, lo re-marcamos como desactualizado.
    marcarAsistenteDesactualizado();
  }

  // ---------------------------------------------------------------------
  // Pestaña Asistente IA: insights (siempre), resumen y recomendaciones
  // (bajo demanda, pasan por AssistantService con fallback automático)
  // ---------------------------------------------------------------------

  function pintarInsights() {
    const lista = document.getElementById('listaInsights');
    if (!lista) return;
    const insights = Insights.generarInsights(resultados, anomalias);
    lista.innerHTML = insights.map(t => `<li>${escapeHtml(t)}</li>`).join('');
  }

  function marcarAsistenteDesactualizado() {
    const btnResumen = document.getElementById('btnResumen');
    const btnRecom = document.getElementById('btnRecomendaciones');
    if (btnResumen) btnResumen.textContent = 'Generar resumen';
    if (btnRecom) btnRecom.textContent = 'Generar recomendaciones';
  }

  async function generarResumen() {
    const boton = document.getElementById('btnResumen');
    const vacio = document.getElementById('resumenVacio');
    const texto = document.getElementById('resumenTexto');

    boton.disabled = true;
    boton.textContent = 'Generando...';

    const kpis = {
      total: resultados.length,
      quiebre: resultados.filter(r => r.tipo === 'riesgo_quiebre').length,
      sobrepedido: resultados.filter(r => r.tipo === 'sobre_pedido').length,
      olvido: resultados.filter(r => r.tipo === 'olvido').length,
      anomalias: anomalias.length,
    };
    const insightsTexto = Insights.generarInsights(resultados, anomalias);

    const { texto: resumen } = await AssistantService.resumenEjecutivo(kpis, insightsTexto);

    vacio.hidden = true;
    texto.hidden = false;
    texto.textContent = resumen;
    boton.disabled = false;
    boton.textContent = 'Regenerar resumen';
  }

  async function generarRecomendaciones() {
    const boton = document.getElementById('btnRecomendaciones');
    const vacio = document.getElementById('recomendacionesVacio');
    const lista = document.getElementById('listaRecomendaciones');

    boton.disabled = true;
    boton.textContent = 'Generando...';

    const { texto } = await AssistantService.recomendaciones(resultados);

    // El texto puede venir como lista numerada en un solo bloque (IA) o
    // como líneas separadas (plantilla/fallback) — se parte por línea.
    const lineas = texto.split('\n').map(l => l.replace(/^\d+[\.\)]\s*/, '').trim()).filter(Boolean);

    vacio.hidden = true;
    lista.hidden = false;
    lista.innerHTML = lineas.map(l => `<li>${escapeHtml(l)}</li>`).join('');
    boton.disabled = false;
    boton.textContent = 'Regenerar recomendaciones';
  }

  // ---------------------------------------------------------------------
  // Chat del asistente
  // ---------------------------------------------------------------------

  function agregarMensajeChat(texto, rol) {
    const contenedor = document.getElementById('chatMensajes');
    const vacio = contenedor.querySelector('.chat__vacio');
    if (vacio) vacio.remove();

    const burbuja = document.createElement('p');
    burbuja.className = `chat__mensaje chat__mensaje--${rol}`;
    burbuja.textContent = texto;
    contenedor.appendChild(burbuja);
    contenedor.scrollTop = contenedor.scrollHeight;
    return burbuja;
  }

  async function manejarEnvioChat(e) {
    e.preventDefault();
    const input = document.getElementById('inputChat');
    const pregunta = input.value.trim();
    if (!pregunta) return;

    agregarMensajeChat(pregunta, 'usuario');
    input.value = '';
    input.disabled = true;

    const burbujaPensando = agregarMensajeChat('Pensando...', 'asistente');
    burbujaPensando.classList.add('chat__mensaje--pensando');

    const { texto } = await AssistantService.chat(pregunta, resultados);

    burbujaPensando.textContent = texto;
    burbujaPensando.classList.remove('chat__mensaje--pensando');
    input.disabled = false;
    input.focus();
  }

  // ---------------------------------------------------------------------
  // KPIs
  // ---------------------------------------------------------------------

  function pintarKpis() {
    const contar = tipo => resultados.filter(r => r.tipo === tipo).length;
    document.getElementById('kpiTotal').textContent = resultados.length;
    document.getElementById('kpiQuiebre').textContent = contar('riesgo_quiebre');
    document.getElementById('kpiSobrepedido').textContent = contar('sobre_pedido');
    document.getElementById('kpiOlvido').textContent = contar('olvido');
    document.getElementById('kpiAnomalias').textContent = anomalias.length;
  }

  // ---------------------------------------------------------------------
  // Filtros (pestaña Alertas)
  // ---------------------------------------------------------------------

  function poblarFiltroSucursal() {
    const select = document.getElementById('filtroSucursal');
    const valorActual = select.value;
    select.innerHTML = '<option value="">Todas</option>' +
      sucursales.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
    select.value = valorActual;
  }

  function resultadosFiltrados() {
    const sucursal = document.getElementById('filtroSucursal').value;
    const tipo = document.getElementById('filtroTipo').value;
    const texto = document.getElementById('filtroTexto').value.trim().toLowerCase();

    return resultados.filter(r => {
      if (sucursal && r.sucursal !== sucursal) return false;
      if (tipo && r.tipo !== tipo) return false;
      if (texto && !r.nombre.toLowerCase().includes(texto)) return false;
      return true;
    });
  }

  // ---------------------------------------------------------------------
  // Pintar tickets (alertas)
  // ---------------------------------------------------------------------

  function ticketHtml(r) {
    const idTicket = `${slug(r.sucursal)}__${slug(r.ingrediente)}`;
    return `
      <li class="ticket ticket--${r.tipo}">
        <div class="ticket__cabecera">
          <span class="ticket__sucursal">${escapeHtml(r.sucursal)} · ${escapeHtml(r.nombre)}</span>
          <span class="ticket__badge">${NOMBRE_TIPO[r.tipo]}</span>
        </div>
        <p class="ticket__mensaje">${escapeHtml(r.mensaje)}</p>
        <dl class="ticket__datos">
          <div><dt>Proyección S7</dt><dd>${Engine.round1(r.proyeccion)} ${r.unidad}</dd></div>
          <div><dt>Stock actual</dt><dd>${Engine.round1(r.stockActual)} ${r.unidad}</dd></div>
          <div><dt>Pedido esta semana</dt><dd>${r.cantidadFormatos} × ${escapeHtml(r.formatoCompra)}</dd></div>
          <div><dt>Recomendado</dt><dd>${r.formatosRecomendados} × ${escapeHtml(r.formatoCompra)}</dd></div>
        </dl>
        <div class="ticket__asistente" id="asistente-${idTicket}">
          <button class="btn btn--texto btn--explicar" data-explicar="${idTicket}">✨ Explicar alerta</button>
        </div>
      </li>`;
  }

  function slug(str) {
    return String(str).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-');
  }

  // Busca el resultado original a partir del id armado en ticketHtml,
  // para no tener que guardar el objeto completo en el DOM.
  function buscarResultadoPorId(idTicket) {
    return resultados.find(r => `${slug(r.sucursal)}__${slug(r.ingrediente)}` === idTicket);
  }

  async function manejarClicExplicar(e) {
    const boton = e.target.closest('[data-explicar]');
    if (!boton) return;

    const idTicket = boton.dataset.explicar;
    const resultado = buscarResultadoPorId(idTicket);
    const contenedor = document.getElementById(`asistente-${idTicket}`);
    if (!resultado || !contenedor) return;

    boton.disabled = true;
    boton.textContent = 'Pensando...';

    const { texto } = await AssistantService.explicarAlerta(resultado);

    contenedor.innerHTML = `<p class="ticket__explicacion">✨ ${escapeHtml(texto)}</p>`;
  }

  function pintarAlertas() {
    const lista = document.getElementById('listaAlertas');
    const vacio = document.getElementById('alertasVacio');
    const filtrados = resultadosFiltrados();

    lista.innerHTML = filtrados.map(ticketHtml).join('');
    vacio.hidden = filtrados.length > 0;
  }

  // ---------------------------------------------------------------------
  // Pintar anomalías
  // ---------------------------------------------------------------------

  function pintarAnomalias() {
    const lista = document.getElementById('listaAnomalias');
    const vacio = document.getElementById('anomaliasVacio');

    lista.innerHTML = anomalias.map(a => `
      <li class="ticket ticket--sobre_pedido">
        <div class="ticket__cabecera">
          <span class="ticket__sucursal">${escapeHtml(a.sucursal)} · ${escapeHtml(a.nombre)}</span>
          <span class="ticket__badge">${a.ratio.toFixed(1)}x la mediana</span>
        </div>
        <p class="ticket__mensaje">${escapeHtml(a.mensaje)}</p>
      </li>`).join('');

    vacio.hidden = anomalias.length > 0;
  }

  // ---------------------------------------------------------------------
  // Pintar pedido corregido por proveedor
  // ---------------------------------------------------------------------

  function pintarProveedores() {
    const contenedor = document.getElementById('listaProveedores');
    const porProveedor = Engine.pedidoCorregidoPorProveedor(resultados);

    contenedor.innerHTML = Object.entries(porProveedor).map(([proveedor, filas]) => `
      <div class="proveedor">
        <div class="proveedor__cabecera">
          <span>${escapeHtml(proveedor)}</span>
          <span>${filas.length} línea${filas.length === 1 ? '' : 's'}</span>
        </div>
        <div class="proveedor__tabla-wrap">
          <table>
            <thead>
              <tr><th>Sucursal</th><th>Ingrediente</th><th>Formato</th><th>Pedido original</th><th>Recomendado</th></tr>
            </thead>
            <tbody>
              ${filas.map(f => `
                <tr>
                  <td>${escapeHtml(f.sucursal)}</td>
                  <td>${escapeHtml(f.ingrediente)}</td>
                  <td>${escapeHtml(f.formatoCompra)}</td>
                  <td class="num">${f.formatosPedidosOriginal ?? 0}</td>
                  <td class="num">${f.formatosRecomendados}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>`).join('');
  }

  // ---------------------------------------------------------------------
  // Tabla editable
  // ---------------------------------------------------------------------

  function pintarTablaEditable() {
    const cuerpo = document.getElementById('tablaEditableBody');
    cuerpo.innerHTML = resultados.map(r => `
      <tr>
        <td>${escapeHtml(r.sucursal)}</td>
        <td>${escapeHtml(r.nombre)}</td>
        <td>${escapeHtml(r.formatoCompra)}</td>
        <td>
          <input type="number" min="0" step="1"
                 value="${r.cantidadFormatos}"
                 data-sucursal="${escapeHtml(r.sucursal)}"
                 data-ingrediente="${escapeHtml(r.ingrediente)}"
                 class="input-cantidad">
        </td>
        <td><span class="estado-pill estado-pill--${r.tipo}">${NOMBRE_TIPO[r.tipo]}</span></td>
      </tr>`).join('');
  }

  // Delegación de eventos: cuando cambia cualquier input de cantidad,
  // actualiza ordenActual (clonando la orden vigente) y recalcula todo.
  function manejarEdicionCantidad(e) {
    if (!e.target.classList.contains('input-cantidad')) return;
    const { sucursal, ingrediente } = e.target.dataset;
    const nuevaCantidad = Math.max(0, Number(e.target.value) || 0);

    // Clonar la orden vigente (o la del dataset si aún no se ha editado nada)
    const base = ordenActual || Engine.indexar(dataset).orden;
    const clon = {};
    Object.keys(base).forEach(s => { clon[s] = { ...base[s] }; });
    clon[sucursal] ??= {};
    clon[sucursal][ingrediente] = nuevaCantidad;

    ordenActual = clon;
    recalcular();
  }


  function activarTab(nombreTab) {
    document.querySelectorAll('.tab').forEach(btn => {
      const activo = btn.dataset.tab === nombreTab;
      btn.classList.toggle('is-active', activo);
      btn.setAttribute('aria-selected', String(activo));
    });
    document.querySelectorAll('.panel').forEach(panel => {
      const activo = panel.id === `panel-${nombreTab}`;
      panel.classList.toggle('is-active', activo);
      panel.hidden = !activo;
    });
  }

  // ---------------------------------------------------------------------
  // Utilidad: evitar inyección de HTML al insertar texto dinámico
  // ---------------------------------------------------------------------

  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  // ---------------------------------------------------------------------
  // Inicialización
  // ---------------------------------------------------------------------

  function init() {
    document.querySelectorAll('.tab').forEach(btn => {
      btn.addEventListener('click', () => activarTab(btn.dataset.tab));
    });

    ['filtroSucursal', 'filtroTipo'].forEach(id => {
      document.getElementById(id).addEventListener('change', pintarAlertas);
    });
    document.getElementById('filtroTexto').addEventListener('input', pintarAlertas);

    document.getElementById('tablaEditableBody').addEventListener('change', manejarEdicionCantidad);
    document.getElementById('listaAlertas').addEventListener('click', manejarClicExplicar);

    document.getElementById('btnResumen').addEventListener('click', generarResumen);
    document.getElementById('btnRecomendaciones').addEventListener('click', generarRecomendaciones);
    document.getElementById('formChat').addEventListener('submit', manejarEnvioChat);

    recalcular();
  }

  document.addEventListener('DOMContentLoaded', init);

  // Se exponen algunas cosas para que upload-editor.js y xlsx-export.js
  // puedan leer/actualizar el estado sin duplicar lógica.
  return {
    getResultados: () => resultados,
    getAnomalias: () => anomalias,
    getDataset: () => dataset,
    getOrdenActual: () => ordenActual,
    setOrdenActual: (nuevaOrden) => { ordenActual = nuevaOrden; recalcular(); },
    recalcular,
  };
})();