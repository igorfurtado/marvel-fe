import { useCallback, useState } from 'react'

type UsePaginationProps = {
  itemsLength: number
  itemsPerPage: number
}

const usePagination = ({
  itemsLength = 1,
  itemsPerPage = 1
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const maxPage = Math.ceil(itemsLength / itemsPerPage)

  const next = useCallback(() => {
    setCurrentPage((currentPage) => currentPage + 1)
  }, [])

  const prev = useCallback(() => {
    setCurrentPage((currentPage) => currentPage - 1 || 1)
  }, [])

  const jump = useCallback(
    (page: number) => {
      const pageNumber = Math.max(1, page)
      setCurrentPage(Math.min(pageNumber, maxPage))
    },
    [maxPage]
  )

  return { currentPage, next, prev, jump }
}

export default usePagination
