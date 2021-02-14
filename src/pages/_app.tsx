import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import auth from '@/reducers/auth'
import '@/globals.scss'

const store = configureStore({
  reducer: { auth },
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export type RootState = ReturnType<typeof store.getState>
export default MyApp
