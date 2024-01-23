import HomeContent from './components/home-content'
import SearchArea from './components/search-area'
import Menu from './components/side-menu'
import useHome from './hooks/use-home'

const Home = () => {
  const { searchValue, handleSearch } = useHome()

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
        <HomeContent />
      </article>
    </section>
  )
}

export default Home
