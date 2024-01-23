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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '16px'
      }}
    >
      <button onClick={prev} disabled={currentPage === 1}>
        Anterior
      </button>

      {generatePages()
        .slice(startPage, endPage)
        .map((page) => (
          <button
            key={page}
            onClick={() => {
              jump(page)
            }}
            style={{
              margin: '0 4px',
              fontWeight: currentPage === page ? 'bold' : 'normal'
            }}
          >
            {page}
          </button>
        ))}

      <button onClick={next} disabled={currentPage === totalPages}>
        Próxima
      </button>
    </div>
  )
}

export default Pagination
