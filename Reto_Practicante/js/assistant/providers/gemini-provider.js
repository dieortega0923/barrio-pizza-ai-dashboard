/**
 * gemini-provider.js
 * Adaptador a la API de Gemini. Implementa un contrato simple y genérico
 * para que assistant-service.js no necesite saber nada específico de
 * Gemini — si mañana se agrega openai-provider.js, debe exponer la misma
 * forma: un objeto con un método async generar(prompt) -> string, que
 * lanza un error si algo sale mal (sin key, red caída, límite, etc.).
 *
 * Nota (agosto 2026): Google retiró la familia "2.5 Flash-Lite" y la
 * reemplazó por la familia "3.x". Este archivo usa gemini-3.5-flash-lite
 * por defecto — el más liviano/barato de la generación vigente, de sobra
 * para redactar explicaciones cortas. Si Google vuelve a renombrar modelos
 * más adelante, este es el único lugar del proyecto que hay que tocar.
 */

const GeminiProvider = (() => {

  const ENDPOINT_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

  async function generar(prompt, { timeoutMs = 6000 } = {}) {
    if (typeof AssistantConfig === 'undefined' || !AssistantConfig.GEMINI_API_KEY) {
      throw new Error('No hay API key de Gemini configurada.');
    }

    const modelo = AssistantConfig.GEMINI_MODEL || 'gemini-3.5-flash-lite';
    const url = `${ENDPOINT_BASE}/${modelo}:generateContent`;

    const controlador = new AbortController();
    const timeoutId = setTimeout(() => controlador.abort(), timeoutMs);

    try {
      const respuesta = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': AssistantConfig.GEMINI_API_KEY,
        },
        signal: controlador.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            maxOutputTokens: 400,
            // La familia 3.x configura el "pensamiento" con thinkingLevel
            // (no con thinkingBudget numérico como la familia 2.5). "minimal"
            // es lo correcto acá: no hace falta razonar para redactar 2-4
            // oraciones a partir de datos que Engine ya calculó.
            thinkingConfig: { thinkingLevel: 'minimal' },
          },
        }),
      });

      if (!respuesta.ok) {
        throw new Error(`Gemini respondió ${respuesta.status}`);
      }

      const datos = await respuesta.json();
      const texto = datos?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!texto || !texto.trim()) {
        throw new Error('Gemini devolvió una respuesta vacía.');
      }

      return texto.trim();
    } finally {
      clearTimeout(timeoutId);
    }
  }

  return { generar };
})();