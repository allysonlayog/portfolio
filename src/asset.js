// Turns a file path from public/ (like /images/work/bayani/river.webp) into the
// address it has on the live site. On GitHub Pages the site lives under
// /portfolio/, so the files do too. Locally this changes nothing.
const base = import.meta.env.BASE_URL.replace(/\/$/, '')

export const asset = (path) => `${base}${path}`
