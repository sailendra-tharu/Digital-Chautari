import { afterEach, describe, expect, it, vi } from "vitest";
import { getSiteUrl } from "./site";

describe("getSiteUrl", () => {
  afterEach(() => vi.unstubAllEnvs());

  const stub = (site?: string, production?: string, deployment?: string) => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", site ?? "");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", production ?? "");
    vi.stubEnv("VERCEL_URL", deployment ?? "");
  };

  it("uses NEXT_PUBLIC_SITE_URL when set", () => {
    stub("https://digitalchautari.com/");
    expect(getSiteUrl()).toBe("https://digitalchautari.com");
  });

  it("falls back to the Vercel domain when the variable is empty", () => {
    stub("", "digital-chautari.vercel.app");
    expect(getSiteUrl()).toBe("https://digital-chautari.vercel.app");
  });

  it("skips invalid values", () => {
    stub("not a url", "", "preview-123.vercel.app");
    expect(getSiteUrl()).toBe("https://preview-123.vercel.app");
  });

  it("falls back to localhost when nothing is set", () => {
    stub();
    expect(getSiteUrl()).toBe("http://localhost:3000");
  });
});
