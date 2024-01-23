import { Character } from '@/pages/home/model/application/entities/character'
import Pagination from '../pagination'
import CardsSection from './components/cards-section'
import SkeletonCards from './components/skeleton-cards'
import { CardsWrapper, Container, Divisor, PaginationWrapper } from './styles'

type HomeContentProps = {
  characters: Character[]
  currentPage: number
  totalPages: number
  itemsPerPage: number
  isLoading: boolean
  next: () => void
  prev: () => void
  jump: (page: number) => void
}

const HomeContent = ({
  characters,
  isLoading,
  currentPage,
  totalPages,
  itemsPerPage,
  next,
  prev,
  jump
}: HomeContentProps) => {
  return (
    <Container>
      {isLoading ? (
        <SkeletonCards />
      ) : totalPages > 0 ? (
        <CardsSection characters={characters} />
      ) : (
        <CardsWrapper>Nenhum item para ser exibido.</CardsWrapper>
      )}

      <Divisor />
      {totalPages > 0 && !isLoading && (
        <PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            next={next}
            prev={prev}
            jump={jump}
          />
        </PaginationWrapper>
      )}
    </Container>
  )
}

export default HomeContent
