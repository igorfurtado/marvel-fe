import CustomText from '@/components/custom-text'
import { colors } from '@/styles/references'
import { Container, LogoWrapper } from './styles'

const NotFound = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src='src/assets/logo_pontua_white.svg' alt='Logo Pontua' />
        <CustomText color={colors.white}>{'Página não encontrada.'}</CustomText>
      </LogoWrapper>
    </Container>
  )
}

export default NotFound
