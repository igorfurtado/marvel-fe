import CustomText from '@/components/custom-text'
import { useSelectedCharacter } from '@/stores/selected-character'
import { useHandleSelectedHomeView } from '@/stores/selected-view'
import { colors, fonts } from '@/styles/references'
import { useEffect, useRef, useState } from 'react'
import { Container, NavIndicator, ProfileNav } from './styles'

type IProfileNav = 'visãoGeral' | 'teams' | 'powers' | 'species' | 'authors'

const ProfileSection = () => {
  const [selectedNavSection, setSelectedNavSection] =
    useState<IProfileNav>('visãoGeral')
  const selectedCharacter = useSelectedCharacter()
  const handleSelectedHomeView = useHandleSelectedHomeView()
  const navRef = useRef<HTMLDivElement | null>(null)
  const [selectedNavItemWidth, setSelectedNavItemWidth] = useState<
    number | null
  >(null)

  const navItems = [
    { id: 'visãoGeral', label: 'Visão Geral' },
    { id: 'teams', label: 'Teams' },
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

  return (
    <Container>
      {selectedCharacter ? (
        <>
          <CustomText
            fontWeight='700'
            color={colors['blue/600']}
            fontSize={fonts.size.h5}
          >
            Perfil
            <CustomText
              fontWeight='700'
              color={colors['orange/500']}
              fontSize={fonts.size.h5}
            >
              {' '}
              /
            </CustomText>
            <CustomText color={colors['gray/500']} fontSize={fonts.size.h5}>
              {' '}
              {selectedCharacter?.name}
            </CustomText>
          </CustomText>

          <div>
            <ProfileNav ref={navRef}>
              {navItems.map((item) => (
                <a
                  id={item.id}
                  key={item.id}
                  onClick={() => {
                    setSelectedNavSection(item.id)
                  }}
                  className={selectedNavSection === item.id ? 'selected' : ''}
                >
                  <CustomText
                    fontWeight='500'
                    color={
                      selectedNavSection === item.id
                        ? colors['blue/600']
                        : colors['gray/500']
                    }
                  >
                    {item.label}
                  </CustomText>
                </a>
              ))}
            </ProfileNav>
            <NavIndicator
              translation={calculateTranslation()}
              width={selectedNavItemWidth || 100}
            />
          </div>
        </>
      ) : (
        <button onClick={() => handleSelectedHomeView('home')}>
          <CustomText>Clique aqui para selecionar um agente</CustomText>
        </button>
      )}
    </Container>
  )
}

export default ProfileSection
