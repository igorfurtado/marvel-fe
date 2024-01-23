import CustomText from '@/components/custom-text'
import { Container, Divisor, LogoWrapper, NavOptions } from './styles'

const Menu = () => {
  return (
    <Container>
      <LogoWrapper>
        <img
          src='src/assets/logo_pontua_black.svg'
          alt='Logo Pontua'
          width={105}
          height={26}
        />
      </LogoWrapper>

      <Divisor />

      <NavOptions>
        <div>
          <CustomText fontWeight='500'>Home</CustomText>
        </div>

        <div>
          <CustomText fontWeight='500'>Perfil</CustomText>
        </div>

        <Divisor />

        <div>
          <CustomText fontWeight='500'>Sair</CustomText>
        </div>
      </NavOptions>
    </Container>
  )
}

export default Menu
