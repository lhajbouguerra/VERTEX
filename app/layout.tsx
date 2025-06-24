
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"

import LenisWrapper from "@/components/LenisWrapper"
import CustomCursor from "@/components/cursor"



export const metadata: Metadata = {
  title: "VERTEX",
  description: "VERTEX PORTFOLIO",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        
       <LenisWrapper>
          {children}
        </LenisWrapper>
      </body>
    </html>
  )
}
