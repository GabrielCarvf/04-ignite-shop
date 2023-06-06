import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/global'
import logoImg from '../assets/logo_ignite_shop.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'

GlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
