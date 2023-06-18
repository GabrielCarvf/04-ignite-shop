import { HeaderContainer } from '../styles/components/header'
import logoImg from '../assets/logo_ignite_shop.svg'
import Image from 'next/image'
import Link from 'next/link'

import { Handbag } from '@phosphor-icons/react'
import { ShopCartContext } from '../context/ShopCartContext'
import { useContext } from 'react'

export default function Header() {
  const { showShopCart, shopCartProducts } = useContext(ShopCartContext)

  function handleShowShopCart() {
    showShopCart()
  }

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <button onClick={handleShowShopCart}>
        <div data-after={shopCartProducts.length}></div>
        <Handbag weight="bold" size={24} />
      </button>
    </HeaderContainer>
  )
}
