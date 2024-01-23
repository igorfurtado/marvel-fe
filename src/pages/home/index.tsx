import HomeContent from './components/home-content'
import SearchArea from './components/search-area'
import Menu from './components/side-menu'

const Home = () => {
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
        <SearchArea />
        <HomeContent />
      </article>
    </section>
  )
}

export default Home
