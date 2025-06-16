import MovieCard from './component/moviecard'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#000'
    }}>
      <MovieCard />
    </div>
  )
}

export default App