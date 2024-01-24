import CustomText from '@/components/custom-text'
import { useSelectedCharacter } from '@/stores/selected-character'
import { colors } from '@/styles/references'
import { Container } from './styles'

const Comics = () => {
  const selectedCharacter = useSelectedCharacter()

  return (
    <Container>
      <ul>
        {selectedCharacter?.comics.items.map((comic) => {
          return (
            <li key={comic.name}>
              <CustomText
                color={colors['gray/500']}
                fontFamily='Inter'
                fontWeight='600'
              >
                • {comic.name}
              </CustomText>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Comics
