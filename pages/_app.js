import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar />
   <Component {...pageProps} />
   <Footer />
   </>
}

export default MyApp
