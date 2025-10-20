import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Escobar Júnior | Psicólogo em Passo Fundo - RS",
  description:
    "Atendimento especializado em dependência química, depressão grave, ansiedade severa e casos complexos. Psicólogo Escobar Júnior - atendimento humanizado, sigiloso e baseado em evidências científicas.",
  keywords: [
    "Psicólogo Passo Fundo",
    "Psicoterapia",
    "Dependência Química",
    "Depressão",
    "Ansiedade",
    "Cuidados Paliativos",
    "Alzheimer",
    "Saúde Mental",
    "Terapia Online",
    "Terapia Idosos",
  ],
  openGraph: {
    title: "Escobar Júnior | Psicólogo em Passo Fundo - RS",
    description:
      "Consultório especializado em tratamento de casos graves. Atendimento humanizado, sigiloso e científico.",
    //url: "https://escobarpsico.com.br",
    siteName: "Escobar Júnior - Psicólogo",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/escobar_junior.jpg", // coloque uma imagem real do site
        width: 1200,
        height: 630,
        alt: "Consultório Escobar Júnior Psicólogo em Passo Fundo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Crédito do ícone (Flaticon) */}
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <meta
          name="author"
          content="Site desenvolvido por Digital Nova"
        />
        <meta
          name="theme-color"
          content="#1f2937"
        />
      </head>
      <body className={`${poppins.variable} antialiased bg-neutral-50 text-neutral-900`}>
        {children}        
      </body>
    </html>
  );
}
