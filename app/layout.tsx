import type { Metadata } from "next";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const siteUrl = "https://gritti.dev.br";
const siteName = "Thiago Gritti";
const siteDescription =
  "Desenvolvedor Full-Stack com expertise em otimização de performance. Especializado em TypeScript/Node.js/Next.js, com experiência em Clean Architecture, CI/CD e serverless.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thiago Gritti | Desenvolvedor Fullstack",
    template: "%s | Thiago Gritti",
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
    title: "Thiago Gritti | Desenvolvedor Fullstack",
    description: siteDescription,
    images: [
      "/og-image.png",
      {
        url: "/icon1.png",
        width: 1200,
        height: 630,
        alt: "Thiago Gritti — Portfólio e Currículo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Gritti | Desenvolvedor Fullstack",
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@thiagogritti",
    site: "@thiagogritti",
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

        <Analytics />

        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}

        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${siteUrl}/#person`,
            name: "Thiago Gritti",
            url: siteUrl,
            image: `${siteUrl}/og-image.png`,
            jobTitle: "Desenvolvedor Fullstack",
            description: siteDescription,
            email: "mailto:contato@gritti.dev.br",
            sameAs: [
              "https://github.com/thiagoDOTjpeg",
              "https://www.linkedin.com/in/thiago-gritti",
            ],
            knowsAbout: [
              "TypeScript",
              "Node.js",
              "Next.js",
              "React",
              "Java",
              "Spring Boot",
              "Clean Architecture",
              "Docker",
            ],
          })}
        </Script>

        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            name: siteName,
            url: siteUrl,
            inLanguage: "pt-BR",
            description: siteDescription,
            publisher: {
              "@id": `${siteUrl}/#person`,
            },
          })}
        </Script>

        <Script
          id="ld-profile"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": `${siteUrl}/#profilepage`,
            url: siteUrl,
            name: "Portfólio de Thiago Gritti",
            mainEntity: {
              "@id": `${siteUrl}/#person`,
            },
            dateCreated: "2024-01-01",
            dateModified: new Date().toISOString().split("T")[0],
          })}
        </Script>
      </body>
    </html>
  );
}
