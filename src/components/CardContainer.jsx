import React from 'react'
import TestPicture from '../assets/TestPicture.jpg'

const FoodLabel = ({ label }) => {
    return (
        <div className="text-xs bg-background flex items-center justify-center py-1 px-3 rounded-2xl text-foreground">{label}</div>
    )
}

class CardInfo extends React.Component {
    render () {
        return (
        <div className="fixed top-1/2 left-1/2 bg-white w-2/3 h-1/5 overflow-y-auto">
            
        </div>
        )
    } 
    
}



class Card extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked: true }); 
    }


    render () {

        return(
        !this.state.clicked? (
            <div className="flex flex-col w-[calc(50%_-_1rem)] bg-card font-body rounded-xl pb-4" onClick={this.onClick}>
                <div>
                    <img src={TestPicture} alt="" className="rounded-t-xl hover:scale-110 ease-in-out duration-300 transition-transform" />
                </div>
                <div className="px-3">
                    <h1 className="text-sm my-4 font-bold">Tinola</h1>
                    <div className="flex gap-2">
                        <FoodLabel label={'Filipino'} />
                        <FoodLabel label={'Stew'} />
                    </div>
                </div>
            </div>
        ) : (
            null
        )
    )
    }

}

export default Card;