import CustomText from '@/components/custom-text'
import { Character } from '@/pages/home/model/application/entities/character'
import { useSelectedHomeView } from '@/stores/selected-view'
import { colors } from '@/styles/references'
import Pagination from '../pagination'
import ProfileSection from '../profile-content'
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
  const selectedHomeView = useSelectedHomeView()

  return (
    <>
      {selectedHomeView === 'home' ? (
        <Container>
          {isLoading ? (
            <SkeletonCards />
          ) : totalPages > 0 ? (
            <CardsSection characters={characters} />
          ) : (
            <CardsWrapper>
              <CustomText color={colors['gray/500']}>
                Nenhum item para ser exibido.
              </CustomText>
            </CardsWrapper>
          )}

          <Divisor />
          {totalPages > 1 && !isLoading && (
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
      ) : (
        <ProfileSection />
      )}
    </>
  )
}

export default HomeContent
