import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from "@/components/navbar";
import LoadAnimation from '@/components/load';
import Footer from '@/components/footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Institut Eugène Delacroix',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <LoadAnimation />
        <Nav/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
