import { produce } from 'immer'
import { createContext, useState } from 'react'

interface ProductProps {
  uniqueKey: string
  id: string
  name: string
  imageUrl: string
  price: string
}

interface ShopCartContextType {
  shopCartProducts: ProductProps[]
  shopCartIsVisible: boolean
  totalValue: number
  showShopCart: () => void
  hideShopCart: () => void
  addProductToCart: (product: ProductProps) => void
  removeProductToCart: (product: ProductProps) => void
}

export const ShopCartContext = createContext({} as ShopCartContextType)

export function ShopCartContextProvider({ children }) {
  const [totalValue, setTotalValue] = useState(0)
  const [shopCartProducts, setShopCartItems] = useState<ProductProps[]>([])
  const [shopCartIsVisible, setShopCartIsVisible] = useState(false)

  function showShopCart() {
    setShopCartIsVisible(true)
  }

  function hideShopCart() {
    setShopCartIsVisible(false)
  }

  function addProductToCart(product: ProductProps) {
    setShopCartItems([...shopCartProducts, product])

    setTotalValue(
      totalValue +
        parseFloat(product.price.replace('R$', '').replace(',', '.')),
    )
  }

  function removeProductToCart(product: ProductProps) {
    const indexProductToRemove = shopCartProducts.findIndex(
      (productState) => productState.uniqueKey === product.uniqueKey,
    )

    setShopCartItems(
      produce(shopCartProducts, (draft) => {
        draft.splice(indexProductToRemove, 1)
      }),
    )

    setTotalValue(
      totalValue -
        parseFloat(product.price.replace('R$', '').replace(',', '.')),
    )
  }

  return (
    <ShopCartContext.Provider
      value={{
        shopCartProducts,
        shopCartIsVisible,
        totalValue,
        showShopCart,
        hideShopCart,
        addProductToCart,
        removeProductToCart,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  )
}
