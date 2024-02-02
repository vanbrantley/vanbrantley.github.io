import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (

    <>

      <Head>
        <title>Van Brantley</title>
        <link rel="stylesheet" href="https://use.typekit.net/llb6kbs.css"></link>
      </Head>

      {/* <Header /> */}
      <Component {...pageProps} />

    </>

  )

}
