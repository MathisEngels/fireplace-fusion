import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Fireplace Fusion</title>
        <meta name="description" content="A demo app made with Next.js and PayloadCMS" />
      </Head>

      <div className={inter.className}>
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </div>
    </>
  );
}
