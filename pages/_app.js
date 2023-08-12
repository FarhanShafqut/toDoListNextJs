import '@/styles/globals.css'
import Header from '@/components/Header/Header'
import Fotter from '@/components/Fotter/Fotter'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <div className='container mx-auto min-h-screen' >
  <Component {...pageProps} />
  </div>
  <Fotter/>
  </>)
}
