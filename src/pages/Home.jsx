import React from 'react'
import Header from '../components/Header'
import SearchRecipe from '../components/SearchRecipe'
import FilterButton from '../components/FilterButton'
import CardContainer from '../components/CardContainer'
import CardInfo from '../components/CardInfo'
import Loading from '../components/Loading';
import { searchFood, initialRandomFoods } from '../utils/api'
import { debounce, recipeFinder } from '../utils/helper'

class Home extends React.Component {

    state={
        isClicked: false,
        foodList: [],
        favoriteList: [],
        isLoading: true,
        selectedRecipe: null,
        filter: 'search'
    }

    componentDidMount () {
        (async () => {
          const data = await initialRandomFoods()
          this.setState({ isLoading: false, foodList: data})
        })()
    }

    handleClick = (id) => {
        this.setState((prevState) => ({ isClicked: !prevState.isClicked })); 
        
        const isSearch = this.state.filter === 'search' 
        if (isSearch) {
            this.setState({ selectedRecipe: recipeFinder(id, foodList) }) 
        }
        else {
            this.setState({ selectedRecipe: recipeFinder(id, favoriteList) }) 
        }
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

    toggleFavorites = () => {
        this.setState({ filter: 'favorites' })
    }

    toggleSearch = () => {
        this.setState({ filter: 'search' })
    }   

    addFavorite = (id) => {
        this.setState((prevState) =>{

            const isFav = prevState.favoriteList.some(fav => +fav.id === +id);

            if (isFav) return { favoriteList: prevState.favoriteList.filter(meal => meal.id !== +id) }

            const newFav = recipeFinder(id, prevState.foodList)
            console.log(newFav)
            return {
                favoriteList: [...prevState.favoriteList, newFav]
            }
        });
    }   

    render() {

        const isSearch = this.state.filter === 'search';
        const sbgStyle = isSearch ? 'bg-secondary' : 'bg-card';
        const fbgStyle = isSearch ? 'bg-card' : 'bg-secondary';

        const isFavorite = this.state.filter === 'favorites';
        const renderMode = isFavorite? this.state.favoriteList : this.state.foodList;

        return (
            <div className=" bg-background min-h-screen ">
                <div className="lg:w-[1120px] mx-auto p-4 flex flex-col gap-4">
                    <Header />
                    <SearchRecipe onChange={this.handleChange} />
                    <FilterButton sbgStyle={sbgStyle} fbgStyle={fbgStyle} srhButton={this.toggleSearch} fvrButton={this.toggleFavorites} />
                    <div className="relative flex-grow">
                        {this.state.isLoading? <Loading />: <CardContainer foodList={renderMode} onClick={this.addFavorite} favorites={this.state.favoriteList} showInfo={this.handleClick} />}
                        {this.state.isClicked && <CardInfo onClick={this.handleClick} cardInfo={this.state.selectedRecipe} />}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;