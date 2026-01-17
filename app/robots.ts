import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = "https://gritti.dev.br";

  const aiBotsToBlock = [
    "Amazonbot",
    "Applebot-Extended",
    "Bytespider",
    "CCBot",
    "ClaudeBot",
    "Google-Extended",
    "GPTBot",
    "meta-externalagent",
    "anthropic-ai",
    "Cohere-ai",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      ...aiBotsToBlock.map((bot) => ({
        userAgent: bot,
        disallow: ["/"],
      })),
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}