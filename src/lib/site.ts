const withProtocol = (host: string) => (/^https?:\/\//.test(host) ? host : `https://${host}`);

/**
 * Absolute site URL for metadata, robots and sitemap.
 * Uses NEXT_PUBLIC_SITE_URL when set; otherwise Vercel's own domain; otherwise localhost.
 * Empty or malformed values are skipped instead of crashing the build.
 */
export function getSiteUrl(): string {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ];

  for (const candidate of candidates) {
    const value = candidate?.trim();
    if (!value) continue;
    try {
      return new URL(withProtocol(value)).origin;
    } catch {
      // Skip invalid values and try the next source.
    }
  }

  return "http://localhost:3000";
}
