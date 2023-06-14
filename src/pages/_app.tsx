import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/global'
import logoImg from '../assets/logo_ignite_shop.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'
import { Handbag } from '@phosphor-icons/react'
import Sidebar from '../components/Sidebar'

GlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Sidebar />
      <Header>
        <Image src={logoImg} alt="" />
        <button>
          <Handbag weight="bold" size={24} />
        </button>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
