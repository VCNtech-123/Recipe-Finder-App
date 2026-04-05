import React from 'react'


class SearchRecipe extends React.Component {
    render () {
        return (
             <div className="">
                <input type="text" className="" placeholder="Search Recipe..." onChange={this.props.onChange} />
             </div>
        )
    }
       

    }


export default SearchRecipe;