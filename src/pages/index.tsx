import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '../lib/stripe'
import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'
import { priceFormatter } from '../utils/formatter'
import Head from 'next/head'
import { Handbag } from '@phosphor-icons/react'
import { useContext } from 'react'
import { ShopCartContext } from '../context/ShopCartContext'
import { v4 as uuidv4 } from 'uuid'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    defaultPriceId: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const { addProductToCart } = useContext(ShopCartContext)
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: 'center',
      perView: 2,
      spacing: 48,
    },
  })

  function handleAddProductToCart(product) {
    addProductToCart({ ...product, uniqueKey: uuidv4() })
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Image src={product.imageUrl} alt="" width={520} height={480} />

              <footer>
                <Link href={`/product/${product.id}`}>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </Link>
                <button onClick={() => handleAddProductToCart(product)}>
                  <Handbag weight="bold" size={32} />
                </button>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: priceFormatter.format(price.unit_amount! / 100),
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
