import { createContext, useState } from 'react'

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface ShopCartContextType {
  shopCartProducts: ProductProps[]
  shopCartIsVisible: boolean
  showShopCart: () => void
  hideShopCart: () => void
  addProductToCart: (product: ProductProps) => void
}

export const ShopCartContext = createContext({} as ShopCartContextType)

export function ShopCartContextProvider({ children }) {
  const [shopCartProducts, setShopCartItems] = useState<ProductProps[]>([])
  const [shopCartIsVisible, setShopCartIsVisible] = useState(false)

  function showShopCart() {
    setShopCartIsVisible(true)
  }

  function hideShopCart() {
    setShopCartIsVisible(false)
  }

  function addProductToCart(product) {
    setShopCartItems([...shopCartProducts, product])
  }

  return (
    <ShopCartContext.Provider
      value={{
        shopCartProducts,
        shopCartIsVisible,
        showShopCart,
        hideShopCart,
        addProductToCart,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  )
}
