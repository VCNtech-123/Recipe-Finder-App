import React from 'react'
import { CiHeart } from "react-icons/ci";

const FoodLabel = ({ label, className }) => {
    return (
        <div className={className}>{label}</div>
    )
}

class Card extends React.Component {

    favoriteCard = (e) => {
        e.stopPropagation()
        this.props.onClick(this.props.id);
    }

    showCardInfo = (e) => {
        e.stopPropagation()
        this.props.showInfo(this.props.id);
    }

    render () {

        const { picture, labels, foodName, isFavorite } = this.props

        const favBg = isFavorite ? 'bg-yellow-300/80' :' bg-white/80'

        return(
        
            <div className="flex flex-col h-full shadow-md w-[calc(50%_-_1rem)] bg-card font-body rounded-xl pb-4 relative lg:hover:scale-105 duration-300 ease-in-out z-40" onClick={this.showCardInfo}>
                <div>
                    <img src={picture} alt={'picture'} className="rounded-t-xl object-cover min-h-50 max-h-50 w-full" />
                </div>
                <div className="px-3">
                    <h1 className="text-sm my-4 font-bold h-12">{foodName}</h1>
                    <div className="flex gap-2">
                        {labels.map(label => <FoodLabel key={label} label={label} className={'text-xs bg-background flex items-center justify-center py-1 px-3 rounded-2xl text-foreground border-1 border-card'} />)}
                    </div>
                </div>
                <div className={`absolute ${favBg} border-white rounded-full p-2 top-2 right-2 z-50`} onClick={this.favoriteCard} >
                    <CiHeart />
                </div>
            </div>
    )
    }

}

class CardContainer extends React.Component {
    render() {

        const {foodList, favorites, onClick, showInfo } = this.props

         return (
            <div className="flex flex-wrap gap-4 justify-center items-center">
                {foodList.map(food => {
                    const isFavorite = favorites.some(favFood => favFood.id === food.id)
                    return <Card key={food.id} id={food.id} picture={food.picture} labels={food.tags} foodName={food.name} instructions={food.instructions} ingredients={food.ingredients} isFavorite={isFavorite} onClick={onClick} showInfo={showInfo} />
                    })}
            </div>
        )
    }
}

export default CardContainer;