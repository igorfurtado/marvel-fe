import { BuildingWrapper, Container, Content, FormBox, Header } from './styles'

const Login = () => {
  return (
    <Container>
      <Header>
        <img src='src/assets/logo_pontua_white.svg' alt='Logo Pontua' />
      </Header>

      <Content>
        <BuildingWrapper url='src/assets/building-image.svg'></BuildingWrapper>
        <FormBox></FormBox>
      </Content>
    </Container>
  )
}

export default Login
