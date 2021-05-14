import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { layout } from '@/reducers'
import '@/styles/fonts.scss'
import '@/styles/globals.scss'
import 'swiper/swiper.scss'
import Layout from '@/views/common/Layout'

export const store = configureStore({
  reducer: { layout: layout.reducer },
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<QueryClient>()

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
    })
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Provider store={store}>
        <Head>
          <title>Green leaf</title>
          <meta
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
            name="viewport"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <div id="select-options" />
        <div id="modals" />
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export type RootState = ReturnType<typeof store.getState>
export default MyApp
