import CustomText from '@/components/custom-text'
import { useSelectedCharacter } from '@/stores/selected-character'
import { colors, fonts } from '@/styles/references'
import { Container, Image, TextWrapper } from './styles'

const General = () => {
  const selectedCharacter = useSelectedCharacter()

  return (
    <Container>
      <Image
        $url={`${selectedCharacter?.thumbnail.path}.${selectedCharacter?.thumbnail.extension}`}
      />

      <TextWrapper>
        <CustomText
          color={colors['blue/600']}
          fontWeight='700'
          fontSize={fonts.size.h5}
        >
          {selectedCharacter?.name}
        </CustomText>

        <CustomText
          color={colors['gray/500']}
          fontWeight='600'
          fontSize={fonts.size.p}
        >
          {selectedCharacter?.description || 'No description'}
        </CustomText>
      </TextWrapper>
    </Container>
  )
}

export default General
