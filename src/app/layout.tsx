import './globals.css'
import { Poppins } from "next/font/google"
import {Navigation} from "@/components/Navigation";
import {Footer} from "@/components/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'ntaheij.dev',
  description: 'I am Noah Taheij. A cloud engineer from the Netherlands.',
  generator: 'ntaheij.dev',
  applicationName: 'ntaheij.dev',
  referrer: 'origin-when-cross-origin',
  keywords: ['Freelance', 'developer', 'Utrecht', 'full stack', 'Noah', 'Taheij', 'Nederland', 'Netherlands', 'Rust', 'CSC', 'Cybersecurity', 'cloud', 'cloud engineer', 'Performance', 'Development'],
  authors: [{ name: 'Noah Taheij '}],
  colorScheme: "light",
  themeColor: "white",
  creator: "Noah Taheij",
  publisher: "Noah Taheij",
  openGraph: {
    title: "ntaheij.dev",
    description: "I am Noah Taheij. A cloud engineer from the Netherlands.",
    url: "https://ntaheij.dev",
    siteName: "ntaheij.dev",
    locale: "en-US",
    type: "website"
  },
  twitter: {
    card: 'summary',
    title: 'ntaheij.dev',
    description: 'I am Noah Taheij. A cloud engineer from the Netherlands.',
    creator: '@ntaheij'
  }
}

const poppins = Poppins({ variable: "--font-poppins", subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body>
        <Navigation />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
