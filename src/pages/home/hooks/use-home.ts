import { useCallback, useState } from 'react'

const useHome = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const handleSearch = useCallback((sarchValue: string) => {
    setSearchValue(sarchValue)
  }, [])

  return {
    searchValue,
    handleSearch
  }
}

export default useHome
