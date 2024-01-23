import CustomInput from '@/components/custom-input'
import { Search } from '@/components/icons/search'
import { Container } from './styles'

type SearchAreaProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchArea = ({ onChange, value }: SearchAreaProps) => {
  return (
    <Container>
      <CustomInput
        Icon={Search}
        placeHolder='Busque um agente'
        onChange={onChange}
        value={value}
      />
    </Container>
  )
}

export default SearchArea
