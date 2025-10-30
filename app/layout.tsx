import type { Metadata } from "next";
import "./globals.css";

import Script from "next/script";

const siteUrl = "https://gritti.dev.br";
const siteName = "Thiago Gritti — Portfólio e Currículo";
const siteDescription =
  "Site pessoal de Thiago Gritti: divulgação de carreira, portfólio e currículo. Projetos fullstack (Java/Spring, React/Next.js), experiência profissional, contato e links.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s • Thiago Gritti",
  },
  description: siteDescription,
  keywords: [
    "Thiago Gritti",
    "portfólio",
    "currículo",
    "desenvolvedor backend",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "desenvolvedor fullstack",
    "carreira em tecnologia",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/icon1.png", // adicione este arquivo em /public
        width: 1200,
        height: 630,
        alt: "Thiago Gritti — Portfólio e Currículo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/icon1.png"],
    creator: "@seu_usuario", // opcional
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
  applicationName: "Portfólio Thiago Gritti",
  authors: [{ name: "Thiago Gritti", url: siteUrl }],
  creator: "Thiago Gritti",
  publisher: "Thiago Gritti",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>
        {children}

        {/* JSON-LD: Person */}
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Thiago Gritti",
            url: siteUrl,
            jobTitle: "Desenvolvedor Fullstack (Backend)",
            sameAs: [
              "https://github.com/thiagoDOTjpeg",
              "https://www.linkedin.com/in/thiago-gritti",
            ],
            worksFor: {
              "@type": "Organization",
              name: "CodeHaus",
            },
          })}
        </Script>

        {/* JSON-LD: WebSite */}
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            url: siteUrl,
            inLanguage: "pt-BR",
            about:
              "Portfólio e currículo de Thiago Gritti. Projetos, experiência e contato.",
            publisher: {
              "@type": "Person",
              name: "Thiago Gritti",
            },
          })}
        </Script>
      </body>
    </html>
  );
}
