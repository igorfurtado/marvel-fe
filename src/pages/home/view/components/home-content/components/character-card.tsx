import CustomText from '@/components/custom-text'
import { Character } from '@/pages/home/model/application/entities/character'
import { useHandleSelectCharacter } from '@/stores/selected-character'
import { fonts } from '@/styles/references'
import { Card } from '../styles'

type CharacterCardProps = {
  character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const handleSelectedCharacter = useHandleSelectCharacter()

  return (
    <Card onClick={() => handleSelectedCharacter(character)}>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      />

      <div>
        <CustomText $textalign='left' fontSize={fonts.size.p} fontWeight='700'>
          {character.name}
        </CustomText>

        <div className='textWrapper'>
          <CustomText $textalign='left' fontSize={fonts.size.small}>
            {character.description || 'No description'}
          </CustomText>
        </div>
      </div>
    </Card>
  )
}

export default CharacterCard
