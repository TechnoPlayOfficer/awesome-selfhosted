import type { Metadata } from "next";
import { Inter, Fraunces, DM_Sans, Syne, JetBrains_Mono } from "next/font/google";
import SplashScreen from "@/components/common/SplashScreen";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["400", "700", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", weight: ["300", "400", "500", "700"] });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "500", "600", "700", "800"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "ACCET - Tokenización Inmobiliaria en Hedera",
  description: "Plataforma de activos del mundo real (RWA) sobre la red de Hedera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fraunces.variable} ${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable} dark antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-dark font-sans text-slate-100 overflow-x-hidden min-h-screen flex flex-col">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
