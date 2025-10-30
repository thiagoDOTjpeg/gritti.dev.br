import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "Thiago Gritti | Desenvolvedor Fullstack",
  description:
    "Portfólio de Thiago Gritti - Desenvolvedor Fullstack Junior com ênfase em Backend",
  keywords: [
    "desenvolvedor",
    "fullstack",
    "backend",
    "react",
    "next.js",
    "node.js",
  ],
  authors: [{ name: "Thiago Gritti" }],
  openGraph: {
    title: "Thiago Gritti | Desenvolvedor Fullstack",
    description: "Portfólio de Thiago Gritti - Desenvolvedor Fullstack Junior",
    url: "https://gritti.dev.br",
    siteName: "Thiago Gritti Portfolio",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={pressStart.variable}>
      <body>{children}</body>
    </html>
  );
}
