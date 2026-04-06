import SearchRecipe from './components/SearchRecipe'
import Header from './components/Header'
import FilterButton from './components/FilterButton'
import Loading from './components/Loading';
import Home from './pages/Home'
import { searchFood, initialRandomFoods } from './utils/api.js'


(async () => {
  const data = await initialRandomFoods()
  console.log(data);
})()

function App() {
 
  return (
    <Home />
  )
}

export default App
