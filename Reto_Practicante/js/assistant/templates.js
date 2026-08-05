/**
 * templates.js
 * Explicaciones en lenguaje natural generadas SIN IA, a partir de los
 * mismos campos que ya calculó Engine. Este es el "piso garantizado":
 * no depende de red, de una API key, ni de nada externo — siempre
 * responde, siempre es rápido, siempre igual de confiable.
 *
 * Importante: esto NO decide nada de negocio, solo redacta en español
 * llano lo que Engine ya decidió. Igual que hará la IA cuando esté
 * disponible — esa es la garantía de que ambas fuentes son intercambiables.
 */

const AssistantTemplates = (() => {

  function explicarAlerta(r) {
    const unidad = r.unidad;
    const proy = Engine.round1(r.proyeccion);
    const stock = Engine.round1(r.stockActual);
    const necesidad = Engine.round1(r.necesidadReal);

    switch (r.tipo) {
      case 'olvido':
        return `${r.sucursal} no incluyó ${r.nombre} en la orden de esta semana. Según el histórico de consumo, ` +
          `esta sucursal va a necesitar cerca de ${necesidad} ${unidad} (tiene ${stock} ${unidad} en stock y se proyecta un consumo ` +
          `de ${proy} ${unidad}). Si no se corrige, es muy probable que se quede sin este ingrediente antes de la próxima entrega.`;

      case 'riesgo_quiebre': {
        const faltante = Engine.round1(Math.max(0, -r.diferenciaBase));
        return `${r.sucursal} pidió ${r.cantidadFormatos} ${plural(r.formatoCompra, r.cantidadFormatos)} de ${r.nombre}, ` +
          `pero con el consumo proyectado (${proy} ${unidad}) y el stock actual (${stock} ${unidad}), le van a faltar aproximadamente ` +
          `${faltante} ${unidad}. Conviene subir el pedido a ${r.formatosRecomendados} ${plural(r.formatoCompra, r.formatosRecomendados)} para cubrir la semana.`;
      }

      case 'sobre_pedido': {
        const exceso = Engine.round1(Math.max(0, r.diferenciaBase));
        const notaPerecedero = r.esPerecedero ? ' Como además es un ingrediente perecedero, ese exceso también trae riesgo de vencimiento.' : '';
        return `${r.sucursal} pidió ${r.cantidadFormatos} ${plural(r.formatoCompra, r.cantidadFormatos)} de ${r.nombre}, ` +
          `bastante más de lo que la proyección sugiere (necesita cerca de ${necesidad} ${unidad}, unos ${exceso} ${unidad} de sobra). ` +
          `Con ${r.formatosRecomendados} ${plural(r.formatoCompra, r.formatosRecomendados)} debería alcanzar.${notaPerecedero}`;
      }

      default:
        return `El pedido de ${r.nombre} en ${r.sucursal} está en línea con lo proyectado: se espera consumir ${proy} ${unidad} ` +
          `y con el stock actual (${stock} ${unidad}) más lo pedido, la cobertura de la semana está resuelta. No hace falta ajustar nada acá.`;
    }
  }

  function plural(formatoCompra, cantidad) {
    const palabra = (formatoCompra || '').split(' ')[0].toLowerCase() || 'unidad';
    if (cantidad === 1) return palabra;
    return palabra.endsWith('s') ? palabra : palabra + 's';
  }

  return { explicarAlerta };
})();