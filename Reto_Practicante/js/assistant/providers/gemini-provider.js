/**
 * gemini-provider.js
 * Adaptador a la API de Gemini. Implementa un contrato simple y genérico
 * para que assistant-service.js no necesite saber nada específico de
 * Gemini — si mañana se agrega openai-provider.js, debe exponer la misma
 * forma: un objeto con un método async generar(prompt) -> string, que
 * lanza un error si algo sale mal (sin key, red caída, límite, etc.).
 */

const GeminiProvider = (() => {

  const ENDPOINT_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

  async function generar(prompt, { timeoutMs = 6000 } = {}) {
    if (typeof AssistantConfig === 'undefined' || !AssistantConfig.GEMINI_API_KEY) {
      throw new Error('No hay API key de Gemini configurada.');
    }

    const modelo = AssistantConfig.GEMINI_MODEL || 'gemini-2.5-flash';
    const url = `${ENDPOINT_BASE}/${modelo}:generateContent?key=${AssistantConfig.GEMINI_API_KEY}`;

    const controlador = new AbortController();
    const timeoutId = setTimeout(() => controlador.abort(), timeoutMs);

    try {
      const respuesta = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controlador.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 400,
            // Gemini 2.5 Flash "piensa" por defecto y esos tokens de
            // razonamiento se descuentan del mismo maxOutputTokens, dejando
            // a veces la respuesta final vacía o cortada. Lo desactivamos
            // porque acá no hace falta razonar, solo redactar.
            thinkingConfig: { thinkingBudget: 0 },
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