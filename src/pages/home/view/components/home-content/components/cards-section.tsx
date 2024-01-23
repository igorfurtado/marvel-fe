import { Character } from '@/pages/home/model/application/entities/character'
import { Card, RowContainer } from '../styles'

type CardSectionProps = {
  characters: Character[]
}

const CardsSection = ({ characters }: CardSectionProps) => {
  console.log(characters, 'characters')
  return (
    <>
      <RowContainer $gridrow='1fr 1fr 1fr 1fr'>
        <Card />
        <Card />
        <Card />
        <Card />
      </RowContainer>

      <RowContainer $gridrow='1fr 1fr 1fr 1fr'>
        <Card />
        <Card />
        <Card />
        <Card />
      </RowContainer>

      <RowContainer $gridrow='1fr 1fr'>
        <Card />
        <Card />
      </RowContainer>
    </>
  )
}

export default CardsSection
