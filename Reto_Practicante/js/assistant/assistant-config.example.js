/**
 * assistant-config.example.js
 *
 * Esto es una PLANTILLA, no la configuración real. Se sube al repo a
 * propósito para que quede documentado qué hace falta para activar la IA.
 *
 * Cómo usarlo:
 *   1. Copiá este archivo como "assistant-config.js" (sin ".example"),
 *      en esta misma carpeta.
 *   2. Poné tu API key real de Gemini ahí.
 *   3. "assistant-config.js" está en .gitignore — nunca se sube al repo,
 *      así la key no queda pública en GitHub.
 *   4. Al publicar en Netlify (arrastrando la carpeta del proyecto),
 *      asegurate de incluir tu "assistant-config.js" real en la carpeta
 *      que subís — ese archivo vive en tu disco, no en git.
 *
 * Si "assistant-config.js" no existe (por ejemplo, alguien clona el repo
 * de GitHub tal cual), la app sigue funcionando normal: el AssistantService
 * simplemente no encuentra la key y usa las plantillas locales para todo.
 * Esa es la gracia de la arquitectura híbrida — nunca se rompe nada.
 */

const AssistantConfig = {
  GEMINI_API_KEY: '', // <-- tu API key acá. Vacío = la IA queda desactivada.
  GEMINI_MODEL: 'gemini-2.5-flash',
};