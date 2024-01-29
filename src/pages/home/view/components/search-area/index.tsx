import CustomInput from '@/components/custom-input'
import { Search } from '@/components/icons/search'
import { useSelectedHomeView } from '@/stores/selected-view'
import { Container } from './styles'

type SearchAreaProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchArea = ({ onChange, value }: SearchAreaProps) => {
  const selectedHomeView = useSelectedHomeView()

  return (
    <Container>
      {selectedHomeView === 'home' && (
        <CustomInput
          IconBefore={Search}
          placeHolder='Busque um agente'
          onChange={onChange}
          value={value}
        />
      )}
    </Container>
  )
}

export default SearchArea
