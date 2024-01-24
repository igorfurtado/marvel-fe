import CustomText from '@/components/custom-text'
import { useSelectedCharacter } from '@/stores/selected-character'
import { colors, fonts } from '@/styles/references'
import { Container } from '../styles'

const Stories = () => {
  const selectedCharacter = useSelectedCharacter()

  return (
    <Container>
      {selectedCharacter!.stories?.items?.length > 0 ? (
        <ul>
          {selectedCharacter?.stories.items.map((story) => {
            return (
              <li key={story.name}>
                <CustomText
                  color={colors['gray/500']}
                  fontFamily='Inter'
                  fontWeight='600'
                >
                  • {story.name}
                </CustomText>
              </li>
            )
          })}
        </ul>
      ) : (
        <CustomText
          color={colors['gray/500']}
          fontWeight='600'
          fontSize={fonts.size.higherSmall}
        >
          Nenhum registro encontrado.
        </CustomText>
      )}
    </Container>
  )
}

export default Stories
