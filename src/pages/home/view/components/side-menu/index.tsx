import CustomText from '@/components/custom-text'
import { Exit } from '@/components/icons/exit'
import { Home } from '@/components/icons/home'
import { Profile } from '@/components/icons/profile'
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
        <button>
          <Home />
          <CustomText fontWeight='500' $margintop='5px'>
            Home
          </CustomText>
        </button>

        <button>
          <Profile />
          <CustomText fontWeight='500' $margintop='5px'>
            Perfil
          </CustomText>
        </button>

        <Divisor />

        <button>
          <Exit />
          <CustomText fontWeight='500' $margintop='5px'>
            Sair
          </CustomText>
        </button>
      </NavOptions>
    </Container>
  )
}

export default Menu
