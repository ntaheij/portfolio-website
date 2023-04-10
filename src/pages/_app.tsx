import '../app/globals.css';

import { Poppins } from "next/font/google";

const poppins = Poppins({ variable: "--font-poppins", subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]});

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
