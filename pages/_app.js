import Head from 'next/head';
import '../styles/globals.css'

import theme, { ThemeProvider } from "../styles/theme";


function MyApp({ Component, pageProps }) {
  return <ThemeProvider>

    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Poppins&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
