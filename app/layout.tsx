import type { Metadata } from "next"
import { Cinzel_Decorative, Merriweather } from "next/font/google"
import "./globals.css"

// Font configuration for Next.js
const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Aethelgard: Echoes of the Elder Kings",
  description:
    "In a land scarred by ancient wars and sleeping magic, a new shadow stirs. Will you answer the call?",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
