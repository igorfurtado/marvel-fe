import CustomText from '@/components/custom-text'
import { Exit } from '@/components/icons/exit'
import { Home } from '@/components/icons/home'
import { Profile } from '@/components/icons/profile'
import {
  useHandleSelectedHomeView,
  useSelectedHomeView
} from '@/stores/selected-view'
import { colors } from '@/styles/references'
import { Container, Divisor, LogoWrapper, NavOptions } from './styles'

const Menu = () => {
  const selectedHomeView = useSelectedHomeView()
  const handleSelectedHomeView = useHandleSelectedHomeView()

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
        <button onClick={() => handleSelectedHomeView('home')}>
          <Home
            color={
              selectedHomeView === 'home' ? colors['orange/500'] : colors.black
            }
          />
          <CustomText
            fontWeight='500'
            $margintop='5px'
            color={
              selectedHomeView === 'home' ? colors['orange/500'] : colors.black
            }
          >
            Home
          </CustomText>
        </button>

        <button onClick={() => handleSelectedHomeView('profile')}>
          <Profile
            color={
              selectedHomeView === 'profile'
                ? colors['orange/500']
                : colors.black
            }
          />
          <CustomText
            fontWeight='500'
            $margintop='5px'
            color={
              selectedHomeView === 'profile'
                ? colors['orange/500']
                : colors.black
            }
          >
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
