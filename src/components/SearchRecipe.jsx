import React from 'react'


class SearchRecipe extends React.Component {
    render () {
        return (
             <div className="">
                <input type="text" className="border-1 w-full py-2 rounded-lg px-4 border-secondary" placeholder="Search Recipe..." onChange={this.props.onChange} />
             </div>
        )
    }
       
}


export default SearchRecipe;