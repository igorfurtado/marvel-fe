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
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
  }, [maxPage])

  const prev = useCallback(() => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
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
