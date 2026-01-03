import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeToggle } from "@/components/theme-toggle"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://autosocorroexpress.vercel.app"),
  title: {
    default: "Auto Socorro Express - Guincho 24h em Maringá | (44) 99999-9999",
    template: "%s | Auto Socorro Express",
  },
  description:
    "Guincho 24 horas em Maringá e região. Atendimento rápido e seguro para carros, motos, caminhões e vans. Ligue agora: (44) 99999-9999",
  keywords: "guincho maringá, auto socorro 24h, guincho leve, guincho pesado, socorro emergencial, reboque maringá",
  authors: [{ name: "Auto Socorro Express" }],
  creator: "Auto Socorro Express",
  publisher: "Auto Socorro Express",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                  document.documentElement.classList.add("dark");
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
