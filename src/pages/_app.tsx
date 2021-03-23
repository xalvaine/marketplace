import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'
import auth from '@/reducers/auth'
import '@/globals.scss'

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
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  )
}

export type RootState = ReturnType<typeof store.getState>
export default MyApp
