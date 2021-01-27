import { AppProps } from 'next/app'
import Head from 'next/head'
import 'globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
