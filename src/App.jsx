import SearchRecipe from './components/SearchRecipe'
import Header from './components/Header'
function App() {
 
  return (
    <div className="p-4 flex flex-col gap-4 bg-main-bg min-h-screen">
      <Header />
      <SearchRecipe />
    </div>
  )
}

export default App
