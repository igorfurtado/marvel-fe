import { Character } from '@/pages/home/model/application/entities/character'
import { RowContainer } from '../styles'
import CharacterCard from './character-card'

type CardSectionProps = {
  characters: Character[]
}

const CardsSection = ({ characters }: CardSectionProps) => {
  return (
    <>
      <RowContainer $gridrow='1fr 1fr 1fr 1fr'>
        {characters.slice(0, 4).map((character) => {
          return <CharacterCard key={character.id} character={character} />
        })}
      </RowContainer>

      <RowContainer $gridrow='1fr 1fr 1fr 1fr'>
        {characters.slice(4, 8).map((character) => {
          return <CharacterCard key={character.id} character={character} />
        })}
      </RowContainer>

      <RowContainer $gridrow='1fr 1fr'>
        {characters.slice(8, 10).map((character) => {
          return <CharacterCard key={character.id} character={character} />
        })}
      </RowContainer>
    </>
  )
}

export default CardsSection
