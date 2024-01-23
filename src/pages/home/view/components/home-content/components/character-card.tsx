import CustomText from '@/components/custom-text'
import { Character } from '@/pages/home/model/application/entities/character'
import { fonts } from '@/styles/references'
import { Card } from '../styles'

type CharacterCardProps = {
  character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  console.log(character.thumbnail.path, 'character.thumbnail.path')
  return (
    <Card>
      <img src={`${character.thumbnail.path}.jpg`} />
      <div>
        <CustomText textAlign='left' fontSize={fonts.size.p} fontWeight='700'>
          {character.name}
        </CustomText>

        <div className='textWrapper'>
          <CustomText textAlign='left' fontSize={fonts.size.small}>
            {character.description}
          </CustomText>
        </div>
      </div>
    </Card>
  )
}

export default CharacterCard
