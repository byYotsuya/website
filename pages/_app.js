import '../styles/globals.css'
import "../styles/prism-night-owl.css";


function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-[#181a1b] dark:text-gray-200'>
      <Component style={{ maxWidth: '1600px', margin: '0 auto' }} {...pageProps} />

    </div>
  )
}

export default MyApp
