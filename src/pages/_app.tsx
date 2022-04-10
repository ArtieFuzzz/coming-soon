import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss'

function Soon({ Component, pageProps }: AppProps) {
  return <>
  <Head>
    <title> Soon... </title>
  </Head>
  <Component {...pageProps} />
  </>
}

export default Soon
