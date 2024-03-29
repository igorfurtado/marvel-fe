import CustomText from '@/components/custom-text'
import { useSelectedCharacter } from '@/stores/selected-character'
import { colors, fonts } from '@/styles/references'
import { Container } from '../styles'

const Comics = () => {
  const selectedCharacter = useSelectedCharacter()

  return (
    <Container>
      {selectedCharacter!.comics?.items?.length > 0 ? (
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

export default Comics
