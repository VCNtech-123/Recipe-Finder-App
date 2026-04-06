import React from 'react'
import Header from '../components/Header'
import SearchRecipe from '../components/SearchRecipe'
import FilterButton from '../components/FilterButton'
import CardContainer from '../components/CardContainer'
import Loading from '../components/Loading';


class Home extends React.Component {

    state={
        foodList: [],
        isLoading: true
    }



    render() {
        return (
            <div className="p-4 flex flex-col gap-4 bg-background min-h-screen">
                <Header />
                <SearchRecipe />
                <FilterButton />
                <div className="relative flex-grow">
                    {this.state.isLoading? <Loading />: <CardContainer />}
                </div>
                
            </div>
        )
    }
}

export default Home;