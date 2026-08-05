/**
 * assistant-service.js
 * Única puerta de entrada a "inteligencia" del dashboard. Ni dashboard.js
 * ni ningún otro archivo debe llamar a Gemini ni a AssistantTemplates
 * directamente — todos pasan por acá.
 *
 * Contrato: AssistantService.explicarAlerta(resultado) siempre devuelve
 * una explicación en texto, sin importar si Gemini está disponible o no.
 * La IA es un complemento; si falla por lo que sea, se usa la plantilla
 * local sin que el usuario note la diferencia ni la app se rompa.
 *
 * Reglas que este archivo respeta a propósito:
 *   - La IA nunca decide nada de negocio: el prompt le pide explícitamente
 *     que solo redacte, usando los números que Engine ya calculó, sin
 *     inventar cifras nuevas ni sugerir cantidades distintas.
 *   - Nunca deja a la UI esperando: hay timeout + fallback siempre.
 *   - Reutilizable: la misma base (proveedor + fallback) sirve para
 *     futuras funciones (chat, resumen ejecutivo, insights) — para eso
 *     se expone también `preguntar()`, más genérico que `explicarAlerta()`.
 */

const AssistantService = (() => {

  const PROVIDER_ACTIVO = GeminiProvider; // único punto para cambiar de proveedor a futuro

  function iaDisponible() {
    return typeof AssistantConfig !== 'undefined' && !!AssistantConfig.GEMINI_API_KEY;
  }

  function promptExplicarAlerta(r) {
    return [
      'Sos un asistente que le explica, en español, a una gerente de compras de una cadena de pizzerías en Panamá,',
      'una alerta que YA fue calculada por un sistema de reglas. Tu único trabajo es explicar con claridad y calidez',
      'profesional lo que ya se decidió — NO tomes decisiones nuevas, NO sugieras cantidades distintas a las que te',
      'paso, y NO inventes datos que no estén acá abajo.',
      '',
      'Reglas de formato, muy importantes:',
      '- Respondé SOLO con la explicación en sí, empezando directo por el contenido.',
      '- NO uses saludos ("Hola", "Buenos días", etc.) ni te despidas.',
      '- NO uses placeholders entre corchetes como [Nombre] — no sabés el nombre de nadie, no lo menciones.',
      '- Máximo 3 oraciones, tono directo y útil, sin tecnicismos.',
      '',
      `Sucursal: ${r.sucursal}`,
      `Ingrediente: ${r.nombre} (proveedor: ${r.proveedor})`,
      `Tipo de alerta: ${r.tipo}`,
      `Proyección de consumo próxima semana: ${Engine.round1(r.proyeccion)} ${r.unidad}`,
      `Stock actual: ${Engine.round1(r.stockActual)} ${r.unidad}`,
      `Necesidad real (proyección - stock): ${Engine.round1(r.necesidadReal)} ${r.unidad}`,
      `Cantidad pedida esta semana: ${r.cantidadFormatos} x ${r.formatoCompra}`,
      `Cantidad recomendada por el sistema: ${r.formatosRecomendados} x ${r.formatoCompra}`,
      `Es perecedero: ${r.esPerecedero ? 'sí' : 'no'}`,
    ].join('\n');
  }

  async function conFallback(intentoIA, fallback) {
    if (!iaDisponible()) {
      return { texto: fallback(), fuente: 'plantilla' };
    }
    try {
      const texto = await intentoIA();
      return { texto, fuente: 'ia' };
    } catch (err) {
      console.warn('[AssistantService] IA no disponible, usando plantilla local:', err.message);
      return { texto: fallback(), fuente: 'plantilla' };
    }
  }

  /**
   * Explica una alerta ya calculada por Engine. Nunca falla: si la IA no
   * responde a tiempo o hay cualquier error, cae a la plantilla local.
   */
  async function explicarAlerta(resultado) {
    return conFallback(
      () => PROVIDER_ACTIVO.generar(promptExplicarAlerta(resultado)),
      () => AssistantTemplates.explicarAlerta(resultado)
    );
  }

  /**
   * Punto de extensión genérico para futuras funciones (chat, resúmenes,
   * recomendaciones, insights): un prompt libre + un texto de respaldo.
   */
  async function preguntar(prompt, textoDeRespaldo) {
    return conFallback(
      () => PROVIDER_ACTIVO.generar(prompt),
      () => textoDeRespaldo
    );
  }

  // -------------------------------------------------------------------
  // Resumen ejecutivo
  // La selección de qué mencionar (insights, KPIs) ya viene calculada
  // por Insights/Engine — acá solo se le pide a la IA que lo redacte
  // corrido, en tono ejecutivo. El fallback arma lo mismo sin IA.
  // -------------------------------------------------------------------

  function promptResumenEjecutivo(kpis, insightsTexto) {
    return [
      'Sos un asistente que redacta, en español, un resumen ejecutivo breve para la gerente de compras de',
      'una cadena de pizzerías en Panamá. Los datos y las observaciones YA fueron calculados por un sistema —',
      'tu único trabajo es redactarlos de forma corrida y clara, en un párrafo de 3 a 5 oraciones. NO inventes',
      'cifras ni observaciones que no estén en la lista de abajo. NO uses saludos ni placeholders.',
      '',
      `Líneas revisadas: ${kpis.total}`,
      `Riesgo de quiebre: ${kpis.quiebre}`,
      `Sobre-pedido: ${kpis.sobrepedido}`,
      `Olvidos: ${kpis.olvido}`,
      `Órdenes atípicas: ${kpis.anomalias}`,
      '',
      'Observaciones detectadas:',
      ...insightsTexto.map(t => `- ${t}`),
    ].join('\n');
  }

  function fallbackResumenEjecutivo(kpis, insightsTexto) {
    return `Esta semana se revisaron ${kpis.total} líneas de pedido: ${kpis.quiebre} con riesgo de quiebre, ` +
      `${kpis.sobrepedido} con sobre-pedido y ${kpis.olvido} olvidadas por completo. ` +
      `Además se detectaron ${kpis.anomalias} órdenes atípicas al comparar entre sucursales. ` +
      insightsTexto.join(' ');
  }

  async function resumenEjecutivo(kpis, insightsTexto) {
    return conFallback(
      () => PROVIDER_ACTIVO.generar(promptResumenEjecutivo(kpis, insightsTexto)),
      () => fallbackResumenEjecutivo(kpis, insightsTexto)
    );
  }

  // -------------------------------------------------------------------
  // Recomendaciones
  // Insights.topRecomendaciones() ya decidió CUÁLES y en qué orden
  // (determinista). Acá solo se pide una redacción más fluida en texto
  // corrido; el fallback usa la misma lista tal cual, en viñetas.
  // -------------------------------------------------------------------

  function promptRecomendaciones(listaDeterministica) {
    return [
      'Las siguientes son acciones YA priorizadas por un sistema de reglas, en el orden correcto de urgencia.',
      'Redactalas en español como una lista breve (una línea por acción, empezando con un verbo), sin agregar,',
      'quitar, reordenar ni cambiar ninguna cantidad. Solo mejorá la redacción si hace falta. NO agregues acciones',
      'nuevas ni saludos.',
      '',
      ...listaDeterministica.map((t, i) => `${i + 1}. ${t}`),
    ].join('\n');
  }

  async function recomendaciones(resultados) {
    const lista = Insights.topRecomendaciones(resultados);
    if (!lista.length) {
      return { texto: 'No hay acciones urgentes pendientes esta semana — todo está dentro de lo proyectado.', fuente: 'plantilla' };
    }
    return conFallback(
      () => PROVIDER_ACTIVO.generar(promptRecomendaciones(lista)),
      () => lista.map((t, i) => `${i + 1}. ${t}`).join('\n')
    );
  }

  // -------------------------------------------------------------------
  // Chat del asistente
  // Contexto = resumen compacto de las alertas vigentes (no los 88 renglones
  // completos, para no volver el prompt gigante). La IA solo puede
  // responder con lo que hay en ese contexto; si no hay IA disponible,
  // el fallback es honesto: avisa que el chat necesita IA y sugiere
  // usar los filtros de la pestaña Alertas mientras tanto.
  // -------------------------------------------------------------------

  function construirContextoChat(resultados) {
    const relevantes = resultados.filter(r => r.tipo !== 'ok');
    const lineas = relevantes.map(r =>
      `${r.sucursal} | ${r.nombre} | ${r.tipo} | proyección ${Engine.round1(r.proyeccion)} ${r.unidad} | ` +
      `stock ${Engine.round1(r.stockActual)} ${r.unidad} | pedido ${r.cantidadFormatos}x${r.formatoCompra} | ` +
      `recomendado ${r.formatosRecomendados}x${r.formatoCompra}`
    );
    return lineas.join('\n');
  }

  function promptChat(pregunta, contexto) {
    return [
      'Sos el asistente del dashboard de compras de Barrio Pizza (Panamá). Respondé la pregunta de la gerente',
      'usando SOLO los datos de la tabla de abajo, que ya fueron calculados por el sistema de reglas. Si la',
      'pregunta no se puede responder con estos datos, decilo con honestidad en vez de inventar. NO sugieras',
      'cantidades ni decisiones que no estén en la tabla — solo explicá y resumí lo que ya existe. Respondé en',
      'español, máximo 4 oraciones, sin saludos.',
      '',
      'Alertas vigentes (sucursal | ingrediente | tipo | proyección | stock | pedido | recomendado):',
      contexto || '(no hay alertas activas esta semana)',
      '',
      `Pregunta: ${pregunta}`,
    ].join('\n');
  }

  async function chat(pregunta, resultados) {
    if (!iaDisponible()) {
      return {
        texto: 'El chat necesita IA para responder preguntas libres y ahora mismo no está disponible. ' +
          'Mientras tanto, usá los filtros de la pestaña "Alertas" (sucursal, tipo, o buscar ingrediente) para encontrar lo que necesitás.',
        fuente: 'plantilla',
      };
    }
    const contexto = construirContextoChat(resultados);
    try {
      const texto = await PROVIDER_ACTIVO.generar(promptChat(pregunta, contexto));
      return { texto, fuente: 'ia' };
    } catch (err) {
      console.warn('[AssistantService] Chat sin IA disponible:', err.message);
      return {
        texto: 'No pude conectarme con la IA en este momento. Probá de nuevo en unos segundos, o usá los filtros ' +
          'de la pestaña "Alertas" mientras tanto.',
        fuente: 'plantilla',
      };
    }
  }

  return { explicarAlerta, preguntar, iaDisponible, resumenEjecutivo, recomendaciones, chat };
})();