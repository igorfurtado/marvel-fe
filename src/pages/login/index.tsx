import CustomText from '@/components/custom-text'
import { colors } from '@/styles/references'
import { BuildingWrapper, Container, Content, FormBox, Header } from './styles'

const Login = () => {
  return (
    <Container>
      <Header>
        <img src='src/assets/logo_pontua_white.svg' alt='Logo Pontua' />
      </Header>

      <Content>
        <BuildingWrapper url='src/assets/building-image.svg'></BuildingWrapper>
        <FormBox>
          <CustomText
            color={colors['blue/600']}
            fontSize='36px'
            fontWeight='700'
          >
            Bem-vindo
            <CustomText
              color={colors['orange/500']}
              fontSize='36px'
              fontWeight='700'
            >
              .
            </CustomText>
          </CustomText>
          <CustomText
            $textalign='left'
            $margintop='1rem'
            color={colors['gray/500']}
          >
            Informe as suas credenciais de acesso ao portal
          </CustomText>
        </FormBox>
      </Content>
    </Container>
  )
}

export default Login
