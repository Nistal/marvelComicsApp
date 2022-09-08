import DataProvider from 'app/context/DataContext'
import { store } from 'app/store'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </DataProvider>
  )
}

export default MyApp
