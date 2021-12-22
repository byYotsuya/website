import '../styles/globals.css'

import theme, { ThemeProvider } from "../styles/theme";


function MyApp({ Component, pageProps }) {
  return <ThemeProvider>    
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
