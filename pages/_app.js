import '../styles/globals.css'
import "../styles/prism-night-owl.css";

import theme, { ThemeProvider } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return <ThemeProvider>    
    <Component style={{maxWidth:'1600px', margin: '0 auto'}} {...pageProps} />
  </ThemeProvider>
}

export default MyApp
