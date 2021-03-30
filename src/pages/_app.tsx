import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import auth from '@/reducers/auth'
import '@/styles/fonts.scss'
import '@/styles/globals.scss'
import 'swiper/swiper.scss'
import Layout from '@/components/Layout'

const store = configureStore({
  reducer: { auth },
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export type RootState = ReturnType<typeof store.getState>
export default MyApp
