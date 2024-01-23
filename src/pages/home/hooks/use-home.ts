import { useCallback, useState } from 'react'

const useHome = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const handleSearch = useCallback((searchValue: string) => {
    setSearchValue(searchValue)
  }, [])

  return {
    searchValue,
    handleSearch
  }
}

export default useHome
