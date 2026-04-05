import SearchRecipe from './components/SearchRecipe'
import Header from './components/Header'
import FilterButton from './components/FilterButton'
function App() {
 
  return (
    <div className="p-4 flex flex-col gap-4 bg-main-bg min-h-screen">
      <Header />
      <SearchRecipe />
      <FilterButton />
    </div>
  )
}

export default App
