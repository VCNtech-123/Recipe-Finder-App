import React from 'react'
import Header from '../components/Header'
import SearchRecipe from '../components/SearchRecipe'
import FilterButton from '../components/FilterButton'
import CardContainer from '../components/CardContainer'
import Loading from '../components/Loading';
import { searchFood, initialRandomFoods } from '../utils/api'
import { debounce } from '../utils/helper'

const debounceSearch = debounce( async (searchValue) => {
    return searchFood(searchValue)
}, 500) 

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

    debouceSearch = debounce(async (searchValue) => {
        this.setState({isLoading: true});
        const data = await searchFood(searchValue);

        this.setState({isLoading: false, foodList: data})
    }, 500);

    handleChange = (e) => {
        const searchValue = e.target.value;

        this.debouceSearch(searchValue)
    }   

    render() {
        return (
            <div className="p-4 flex flex-col gap-4 bg-background min-h-screen">
                <Header />
                <SearchRecipe onChange={this.handleChange} />
                <FilterButton />
                <div className="relative flex-grow">
                    {this.state.isLoading? <Loading />: <CardContainer foodList={this.state.foodList} />}
                </div>
                
            </div>
        )
    }
}

export default Home;