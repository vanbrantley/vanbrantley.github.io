import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (

    <>

      <Head>
        <title>VAN</title>
      </Head>

      {/* <Header /> */}
      <Component {...pageProps} />

    </>

  )

}
