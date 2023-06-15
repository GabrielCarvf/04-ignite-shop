import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

import { ShopCartContextProvider } from '../context/ShopCartContext'

GlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <ShopCartContextProvider>
        <Sidebar />
        <Header />
        <Component {...pageProps} />
      </ShopCartContextProvider>
    </Container>
  )
}
