import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";

const FoodLabel = ({ label, className }) => {
    return (
        <div className={className}>{label}</div>
    )
}

const Ingredient = ({ ingredient, measurement }) => {
    return (
        <li className="text-sm bg-card p-2 rounded-xl text-muted-foreground"><span className="font-bold text-foreground">{ingredient} -</span>{measurement}</li>
    )
}

class CardInfo extends React.Component {

    
    render () {

        const { picture, labels, foodName, ingredients, instructions } = this.props;
        return (
        <>
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={this.props.onClick}></div>
            <div className="flex flex-col fixed bg-background w-5/6 h-4/5 overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-xl" onClick={(e) => e.stopPropagation()}>
                <div className="w-full h-70 relative">
                    <img src={picture} alt="" className="w-full max-h-70 object-cover" style={{ 
                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' 
                        }}/>
                    <h1 className="absolute top-45 left-5 font-body text-2xl text-white font-bold">{foodName}</h1>
                    <div className="flex gap-4 absolute top-55 left-4">
                            {labels.map(label => <FoodLabel label={label} key={label} className={'text-xs bg-background/50 flex items-center justify-center py-1 px-5 rounded-2xl text-foreground border-1 border-card '} />)}        
                    </div>
                </div>
                <div className="flex flex-col px-4 py-3 gap-6">
                    <div className="flex flex-col gap-3">
                        <h1 className="border-l-3 border-l-primary font-bold px-2">Ingredients</h1>
                        <ul className="flex flex-col gap-2 list-disc list-inside marker:text-primary">
                            {ingredients.map(({ ingredient, measurement}) => <Ingredient key={ingredient} ingredient={ingredient} measurement={measurement} />)}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                         <h1 className="border-l-3 border-l-primary font-bold px-2">Instructions</h1>
                            <p className="text-xs bg-card p-4 whitespace-pre-line">{instructions}</p>
                    </div>
                </div>
                <div className="absolute bg-white/80 border-white rounded-full p-2 top-2 right-2" onClick={this.props.onClick}>
                    <RxCross2 size={20} />
                </div>
            </div>
        </>
        )
    } 
}



class Card extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState((prevState) => ({ clicked: !prevState.clicked })); 
    }

    render () {

        const { picture, labels, foodName, ingredients, instructions } = this.props

        return(
        !this.state.clicked? (
            <div className="flex flex-col h-full shadow-md w-[calc(50%_-_1rem)] bg-card font-body rounded-xl pb-4 relative" onClick={this.handleClick}>
                <div>
                    <img src={picture} alt={'picture'} className="rounded-t-xl hover:scale-110 ease-in-out duration-300 transition-transform object-cover min-h-50 max-h-50 w-full" />
                </div>
                <div className="px-3">
                    <h1 className="text-sm my-4 font-bold h-12">{foodName}</h1>
                    <div className="flex gap-2">
                        {labels.map(label => <FoodLabel key={label} label={label} className={'text-xs bg-background flex items-center justify-center py-1 px-3 rounded-2xl text-foreground border-1 border-card'} />)}
                    </div>
                </div>
                <div className="absolute bg-white/80 border-white rounded-full p-2 top-2 right-2">
                    <CiHeart />
                </div>
            </div>
        ) : (
            <CardInfo onClick={this.handleClick} ingredients={ingredients} instructions={instructions} foodName={foodName} picture={picture} labels={labels}/>
        )
    )
    }

}

class CardCointainer extends React.Component {
        
    render() {
         return (
            <div className="flex flex-wrap gap-4 justify-center items-center">
                {this.props.foodList.map(food => <Card key={food.id} picture={food.picture} labels={food.tags} foodName={food.name} instructions={food.instructions} ingredients={food.ingredients} />)}
            </div>
        )
    }
}

export default CardCointainer;