import { useSelectedCharacter } from '@/stores/selected-character'
import { useHandleSelectedHomeView } from '@/stores/selected-view'
import { useCallback, useEffect, useRef, useState } from 'react'

type IProfileNav = 'visãoGeral' | 'comics' | 'powers' | 'species' | 'authors'

const useProfile = () => {
  const [selectedNavSection, setSelectedNavSection] =
    useState<IProfileNav>('visãoGeral')
  const selectedCharacter = useSelectedCharacter()
  const handleSelectedHomeView = useHandleSelectedHomeView()
  const navRef = useRef<HTMLDivElement | null>(null)
  const [selectedNavItemWidth, setSelectedNavItemWidth] = useState<
    number | null
  >(null)

  const handleSelectNavSection = useCallback((profile: IProfileNav) => {
    setSelectedNavSection(profile)
  }, [])

  const navItems = [
    { id: 'visãoGeral', label: 'Visão Geral' },
    { id: 'comics', label: 'Comics' },
    { id: 'powers', label: 'Powers' },
    { id: 'species', label: 'Species' },
    { id: 'authors', label: 'Authors' }
  ] as {
    id: IProfileNav
    label: string
  }[]

  const idsArray = navItems.map((item) => item.id)

  useEffect(() => {
    if (navRef.current) {
      const selectedNavItem = navRef.current.querySelector('.selected')
      if (selectedNavItem) {
        setSelectedNavItemWidth(selectedNavItem.clientWidth)
      }
    }
  }, [selectedNavSection])

  const calculateTranslation = () => {
    let translation = 0

    for (let i = 0; i < idsArray.length; i++) {
      if (idsArray[i] === selectedNavSection) {
        break
      }

      const item = navRef.current?.querySelector(`[id="${idsArray[i]}"]`)

      if (item) {
        translation += item.clientWidth + 24
      }
    }

    return translation
  }

  return {
    navRef,
    navItems,
    selectedNavItemWidth,
    selectedCharacter,
    selectedNavSection,
    handleSelectNavSection,
    calculateTranslation,
    handleSelectedHomeView
  }
}

export default useProfile
