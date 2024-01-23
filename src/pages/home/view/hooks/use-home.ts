import { useCallback, useEffect, useState } from 'react'
import { Character } from '../../model/application/entities/character'
import CharacterApiDataAccess from '../../model/infrastructure/api-data-access'
import CharactersPresenter from '../../presenter/character-presenter'
import usePagination from './use-pagination'

const useHome = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const handleSearch = useCallback((searchValue: string) => {
    setSearchValue(searchValue)
  }, [])
  const [numberOfCharacters, setNumberOfCharacters] = useState<number>(0)
  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { currentPage, next, prev, jump } = usePagination({
    itemsLength: numberOfCharacters,
    itemsPerPage: 10
  })

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const dataAccess = new CharacterApiDataAccess()
    const presenter = new CharactersPresenter(dataAccess)

    presenter
      .getCharacters({
        currentPage,
        searchParam: searchValue,
        itemsPerPage: 10,
        signal: controller.signal
      })
      .then((data) => {
        if (isMounted) {
          setNumberOfCharacters(data.numberOfItems)
          setCharacters(data.result)
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false)
        }
      })

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [currentPage, searchValue])

  return {
    characters,
    numberOfCharacters,
    searchValue,
    isLoading,
    currentPage,
    handleSearch,
    next,
    prev,
    jump
  }
}

export default useHome
