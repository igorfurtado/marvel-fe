import { Character } from '@/pages/home/model/application/entities/character'
import Pagination from '../pagination'
import { Card, Container, Divisor, RowContainer } from './styles'

type HomeContentProps = {
  characters: Character[]
  currentPage: number
  totalPages: number
  itemsPerPage: number
  next: () => void
  prev: () => void
  jump: (page: number) => void
}

const HomeContent = ({
  // characters,
  currentPage,
  totalPages,
  itemsPerPage,
  next,
  prev,
  jump
}: HomeContentProps) => {
  return (
    <Container>
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

      <Divisor />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        next={next}
        prev={prev}
        jump={jump}
      />
    </Container>
  )
}

export default HomeContent
