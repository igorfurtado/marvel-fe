import { Arrow } from '@/components/icons/arrow'
import { Container } from './styles'

type PaginationProps = {
  currentPage: number
  totalPages: number
  itemsPerPage: number
  next: () => void
  prev: () => void
  jump: (page: number) => void
}

const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage,
  next,
  prev,
  jump
}: PaginationProps) => {
  const generatePages = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
    return pages
  }

  const startPage = Math.max(currentPage - Math.floor(itemsPerPage / 2), 0)
  const endPage = Math.min(startPage + itemsPerPage - 1, totalPages)

  return (
    <Container>
      <button
        onClick={prev}
        disabled={currentPage === 1}
        className='borderButton leftButton'
      >
        <Arrow />
        Anterior
      </button>

      <div className='number-buttons-wrapper'>
        {generatePages()
          .slice(startPage, endPage)
          .map((page) => (
            <button
              key={page}
              className={
                currentPage === page ? 'numberButton selected' : 'numberButton'
              }
              onClick={() => {
                jump(page)
              }}
            >
              {page}
            </button>
          ))}
      </div>

      <button
        onClick={next}
        disabled={currentPage === totalPages}
        className='borderButton rightButton'
      >
        Próxima
        <Arrow rotate={180} />
      </button>
    </Container>
  )
}

export default Pagination
