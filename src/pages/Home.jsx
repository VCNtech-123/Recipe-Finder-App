import React from 'react'
import Header from '../components/Header'
import SearchRecipe from '../components/SearchRecipe'
import FilterButton from '../components/FilterButton'
import CardContainer from '../components/CardContainer'
import Loading from '../components/Loading';
import { searchFood, initialRandomFoods } from '../utils/api'



class Home extends React.Component {

    state={
        foodList: [],
        isLoading: true
    }

    componentDidMount () {
        (async () => {
          const data = await initialRandomFoods()
          this.setState({ isLoading: false, foodList: data})
        })()
    }

    render() {
        return (
            <div className="p-4 flex flex-col gap-4 bg-background min-h-screen">
                <Header />
                <SearchRecipe />
                <FilterButton />
                <div className="relative flex-grow">
                    {this.state.isLoading? <Loading />: <CardContainer foodList={this.state.foodList} />}
                </div>
                
            </div>
        )
    }
}

export default Home;