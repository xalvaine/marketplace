import { configureStore } from '@reduxjs/toolkit'
import { AppProps } from 'next/app'
import auth from 'reducers/auth'
import 'globals.scss'
import { Provider } from 'react-redux'

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
