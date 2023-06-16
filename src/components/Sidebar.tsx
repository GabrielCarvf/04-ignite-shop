import Image from 'next/image'
import { useContext } from 'react'
import { ShopCartContext } from '../context/ShopCartContext'

import { X } from '@phosphor-icons/react'

import {
  AmountInfoContainer,
  Content,
  Footer,
  ImageContainer,
  InfosContainer,
  Product,
  ProductsContainer,
  SidebarContainer,
  ValueInfoContainer,
} from '../styles/components/sidebar'
import { priceFormatter } from '../utils/formatter'

export default function Sidebar() {
  const {
    shopCartIsVisible,
    shopCartProducts,
    totalValue,
    hideShopCart,
    removeProductToCart,
  } = useContext(ShopCartContext)

  function handleHideSideBar() {
    hideShopCart()
  }

  function handleRemoveProductToCart(product) {
    removeProductToCart(product)
  }

  return (
    <SidebarContainer hidden={!shopCartIsVisible}>
      <header>
        <button onClick={handleHideSideBar}>
          <X size={24} />
        </button>
      </header>

      <Content>
        <ProductsContainer>
          <h1>Sacola de compras</h1>
          {shopCartProducts.map((product) => {
            return (
              <Product key={product.uniqueKey}>
                <ImageContainer>
                  <Image
                    src={product.imageUrl}
                    alt=""
                    width={101}
                    height={93}
                  />
                </ImageContainer>
                <div>
                  <p>{product.name}</p>
                  <span>{product.price}</span>
                  <button onClick={() => handleRemoveProductToCart(product)}>
                    Remover
                  </button>
                </div>
              </Product>
            )
          })}
        </ProductsContainer>

        <Footer>
          <InfosContainer>
            <AmountInfoContainer>
              <span>Quantidade</span>
              <span>{shopCartProducts.length} itens</span>
            </AmountInfoContainer>
            <ValueInfoContainer>
              <span>Valor Total</span>
              <strong>{priceFormatter.format(totalValue)}</strong>
            </ValueInfoContainer>
          </InfosContainer>
          <button>Finalizar compra</button>
        </Footer>
      </Content>
    </SidebarContainer>
  )
}
