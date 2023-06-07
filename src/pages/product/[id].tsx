import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'
// import { useRouter } from 'next/router'

export default function Product() {
  // const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 12,90</span>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad minima
          velit beatae adipisci quibusdam, nobis nam? Velit blanditiis
          doloremque, tenetur porro officia maiores fugiat sit obcaecati
          repellendus nobis ratione temporibus.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
