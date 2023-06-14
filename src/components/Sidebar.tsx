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
import Image from 'next/image'
import camisetaImg from '../assets/camisetas/1.png'

export default function Sidebar() {
  return (
    <SidebarContainer>
      <header>
        <button>
          <X size={24} />
        </button>
      </header>

      <Content>
        <ProductsContainer>
          <h1>Sacola de compras</h1>
          <Product>
            <ImageContainer>
              <Image src={camisetaImg} alt="" width={101} height={93} />
            </ImageContainer>
            <div>
              <p>Camiseta Beyond the Limits</p>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </Product>
          <Product>
            <ImageContainer>
              <Image src={camisetaImg} alt="" width={101} height={93} />
            </ImageContainer>
            <div>
              <p>Camiseta Beyond the Limits</p>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </Product>
          <Product>
            <ImageContainer>
              <Image src={camisetaImg} alt="" width={101} height={93} />
            </ImageContainer>
            <div>
              <p>Camiseta Beyond the Limits</p>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </Product>
          <Product>
            <ImageContainer>
              <Image src={camisetaImg} alt="" width={101} height={93} />
            </ImageContainer>
            <div>
              <p>Camiseta Beyond the Limits</p>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </Product>
          <Product>
            <ImageContainer>
              <Image src={camisetaImg} alt="" width={101} height={93} />
            </ImageContainer>
            <div>
              <p>Camiseta Beyond the Limits</p>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </Product>
          <Product>
            <ImageContainer>
              <Image src={camisetaImg} alt="" width={101} height={93} />
            </ImageContainer>
            <div>
              <p>Camiseta Beyond the Limits</p>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </Product>
        </ProductsContainer>

        <Footer>
          <InfosContainer>
            <AmountInfoContainer>
              <span>Quantidade</span>
              <span>3 itens</span>
            </AmountInfoContainer>
            <ValueInfoContainer>
              <span>Valor Total</span>
              <strong>R$ 270,00</strong>
            </ValueInfoContainer>
          </InfosContainer>
          <button>Finalizar compra</button>
        </Footer>
      </Content>
    </SidebarContainer>
  )
}
