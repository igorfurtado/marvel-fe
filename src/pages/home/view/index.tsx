import HomeContent from './components/home-content'
import SearchArea from './components/search-area'
import Menu from './components/side-menu'
import useHome from './hooks/use-home'

const Home = () => {
  const {
    characters,
    numberOfCharacters,
    searchValue,
    // isLoading,
    currentPage,
    handleSearch,
    next,
    prev,
    jump
  } = useHome()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleSearch(e.target.value)

  return (
    <section>
      <Menu />
      <article
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <SearchArea onChange={onChange} value={searchValue} />
        <HomeContent
          characters={characters}
          currentPage={currentPage}
          next={next}
          prev={prev}
          jump={jump}
          totalPages={numberOfCharacters / 10}
          itemsPerPage={10}
        />
      </article>
    </section>
  )
}

export default Home
