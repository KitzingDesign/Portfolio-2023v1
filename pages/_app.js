import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/Layout/layout";
import Scroll from "../components/Scroll";
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DY7LBXYTG2"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DY7LBXYTG2');`}
        </Script>
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
