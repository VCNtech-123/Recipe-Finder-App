import SearchRecipe from './components/SearchRecipe'
import Header from './components/Header'
import FilterButton from './components/FilterButton'
import Card from './components/CardContainer'
import CardInfo from './components/CardContainer'



function App() {
 
  return (
    <div className="p-4 flex flex-col gap-4 bg-background min-h-screen">
      <Header />
      <SearchRecipe />
      <FilterButton />
      <div className="flex flex-wrap gap-4">
        <CardInfo />
      </div>
        
    </div>
  )
}

export default App
