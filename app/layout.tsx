import type { Metadata, Viewport } from "next"
import { Bebas_Neue, Orbitron, Press_Start_2P, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EDS Entretenimentos | Arcades, Fliperamas e Locação em Caruaru",
  description:
    "Fabricação, venda e locação de fliperamas retrô e máquinas arcade em Caruaru. Projetos personalizados, locação para eventos e experiência gamer premium.",
  generator: "v0.app",
  keywords: [
    "fliperama em caruaru",
    "comprar arcade caruaru",
    "máquina de fliperama pernambuco",
    "aluguel de fliperama para festas",
    "fliperama retro recife",
    "bancada arcade nostalgia",
  ],
  openGraph: {
    title: "EDS Entretenimentos | Arcades e Fliperamas em Caruaru",
    description:
      "A maior referência em fliperamas retrô, gabinetes customizados e locação de arcades em Pernambuco.",
    type: "website",
    locale: "pt_BR",
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${bebas.variable} ${orbitron.variable} ${pressStart.variable} bg-background dark`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
