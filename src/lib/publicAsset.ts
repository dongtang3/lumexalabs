/** Resolves paths under `public/` for GitHub Pages `base` subpaths. */
export function publicAsset(filename: string): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`
  const path = filename.replace(/^\//, '')
  return `${base}${path}`
}
