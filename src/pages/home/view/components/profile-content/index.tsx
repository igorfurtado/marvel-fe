import CustomText from '@/components/custom-text'
import { useSelectedCharacter } from '@/stores/selected-character'
import { useHandleSelectedHomeView } from '@/stores/selected-view'
import { colors, fonts } from '@/styles/references'
import { Container } from './styles'

const ProfileSection = () => {
  const selectedCharacter = useSelectedCharacter()
  const handleSelectedHomeView = useHandleSelectedHomeView()

  return (
    <Container>
      {selectedCharacter ? (
        <CustomText
          fontWeight='700'
          color={colors['blue/600']}
          fontSize={fonts.size.h5}
        >
          Perfil
          <CustomText
            fontWeight='700'
            color={colors['orange/500']}
            fontSize={fonts.size.h5}
          >
            {' '}
            /
          </CustomText>
          <CustomText color={colors['gray/500']} fontSize={fonts.size.h5}>
            {' '}
            {selectedCharacter?.name}
          </CustomText>
        </CustomText>
      ) : (
        <button onClick={() => handleSelectedHomeView('home')}>
          <CustomText>Clique aqui para selecionar um agente</CustomText>
        </button>
      )}
    </Container>
  )
}

export default ProfileSection
