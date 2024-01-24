import CustomText from '@/components/custom-text'
import { useSelectedCharacter } from '@/stores/selected-character'
import { colors, fonts } from '@/styles/references'
import { Container } from '../styles'

const Events = () => {
  const selectedCharacter = useSelectedCharacter()

  return (
    <Container>
      {selectedCharacter!.events?.items?.length > 0 ? (
        <ul>
          {selectedCharacter?.series.items.map((event) => {
            return (
              <li key={event.name}>
                <CustomText
                  color={colors['gray/500']}
                  fontFamily='Inter'
                  fontWeight='600'
                >
                  • {event.name}
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

export default Events
