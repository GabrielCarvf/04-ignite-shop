import Image from 'next/image'
import { useContext, useState } from 'react'
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
import axios from 'axios'

export default function Sidebar() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

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

  async function handleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post(
        '/api/checkout',
        shopCartProducts.reduce((acc: any, currentProduct: any) => {
          acc.push({
            price: currentProduct.defaultPriceId,
            quantity: 1,
          })

          return acc
        }, []),
      )

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      // Conectar com alguma ferramenta de observabilidade (Datadog / Sentry)
      alert('Falha ao redirecionar ao checkout')
    }
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
          <button
            disabled={
              isCreatingCheckoutSession || shopCartProducts.length === 0
            }
            onClick={handleBuyProducts}
          >
            Finalizar compra
          </button>
        </Footer>
      </Content>
    </SidebarContainer>
  )
}
