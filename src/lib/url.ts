const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Interne Pfade mit dem Base-Pfad von GitHub Pages versehen. */
export const u = (path: string) => `${base}${path}`;
