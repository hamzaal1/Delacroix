import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from "@/components/navbar";
import LoadAnimation from '@/components/load';
import Footer from '@/components/footer';
import Map from '@/components/map';
import Providers from '@/redux/providers';
import CarouselList from '@/components/CurselList';
import LoadData from '@/components/load-data';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Institut Eugène Delacroix',
  description: "l'Institut Eugène Delacroix s'efforce de promouvoir l'excellence académique tout en encourageant le développement personnel et social de ses élèves, les préparant ainsi à devenir des citoyens engagés et éclairés."
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
        <Providers >
          <LoadData />
          <Nav />
          <CarouselList />
          {children}
          <Map />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
