import { Card, Container, Divisor, RowContainer } from './styles'

const HomeContent = () => {
  return (
    <Container>
      <RowContainer $gridrow='1fr 1fr 1fr 1fr'>
        <Card />
        <Card />
        <Card />
        <Card />
      </RowContainer>

      <RowContainer $gridrow='1fr 1fr 1fr 1fr'>
        <Card />
        <Card />
        <Card />
        <Card />
      </RowContainer>

      <RowContainer $gridrow='1fr 1fr'>
        <Card />
        <Card />
      </RowContainer>

      <Divisor />
    </Container>
  )
}

export default HomeContent
