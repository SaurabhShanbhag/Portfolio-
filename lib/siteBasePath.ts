/**
 * Must match production `basePath` in `next.config.ts` (`/Portfolio-`).
 * Used for public files where Next does not auto-prefix absolute paths on static export.
 */
export const SITE_BASE_PATH =
  process.env.NODE_ENV === "production" ? "/Portfolio-" : "";

export function publicFile(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_BASE_PATH}${normalized}`;
}
