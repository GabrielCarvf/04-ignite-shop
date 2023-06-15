import { HeaderContainer } from '../styles/components/header'
import logoImg from '../assets/logo_ignite_shop.svg'
import Image from 'next/image'

import { Handbag } from '@phosphor-icons/react'
import { ShopCartContext } from '../context/ShopCartContext'
import { useContext } from 'react'

export default function Header() {
  const { showShopCart } = useContext(ShopCartContext)

  function handleShowShopCart() {
    showShopCart()
  }

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      <button onClick={handleShowShopCart}>
        <Handbag weight="bold" size={24} />
      </button>
    </HeaderContainer>
  )
}
