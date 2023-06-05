import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  border: 0,
  padding: '1rem',
  borderRadius: 5,
})

export default function Home() {
  return (
    <Button> <h1>Teste do Next.js</h1></Button>
  )
}