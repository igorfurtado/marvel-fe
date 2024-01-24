import CustomText from '@/components/custom-text'
import { colors, fonts } from '@/styles/references'
import Authors from './components/authors'
import Comics from './components/comics'
import General from './components/general'
import Powers from './components/powers'
import Species from './components/species'
import useProfile from './hooks/use-profile'
import {
  Container,
  ContentWrapper,
  Divisor,
  NavIndicator,
  ProfileNav
} from './styles'

const ProfileSection = () => {
  const {
    navRef,
    navItems,
    selectedNavItemWidth,
    selectedCharacter,
    selectedNavSection,
    handleSelectNavSection,
    calculateTranslation,
    handleSelectedHomeView
  } = useProfile()

  const content = {
    visãoGeral: <General />,
    comics: <Comics />,
    powers: <Powers />,
    species: <Species />,
    authors: <Authors />
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

          <div style={{ width: '100%' }}>
            <ProfileNav ref={navRef}>
              {navItems.map((item) => (
                <a
                  id={item.id}
                  key={item.id}
                  onClick={() => {
                    handleSelectNavSection(item.id)
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
              $translation={calculateTranslation()}
              width={selectedNavItemWidth || 100}
            />
            <Divisor />
          </div>

          <ContentWrapper>{content[selectedNavSection]}</ContentWrapper>
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
