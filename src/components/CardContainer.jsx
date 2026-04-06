import React from 'react'
import TestPicture from '../assets/TestPicture.jpg'
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
                    <img src={TestPicture} alt="" className="w-full max-h-70 object-cover" style={{ 
                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' 
                        }}/>
                    <h1 className="absolute top-45 left-5 font-body text-2xl text-white font-bold">Tinola</h1>
                    <div className="flex gap-4 absolute top-55 left-4">
                            <FoodLabel label={'Filipino'} className={'text-xs bg-background/50 flex items-center justify-center py-1 px-5 rounded-2xl text-foreground border-1 border-card '} />
                            <FoodLabel label={'Stew'} className={'text-xs bg-background/50 flex items-center justify-center py-1 px-5 rounded-2xl text-foreground border-1 border-card '} />
                    </div>
                </div>
                <div className="flex flex-col px-4 py-3 gap-6">
                    <div className="flex flex-col gap-3">
                        <h1 className="border-l-3 border-l-primary font-bold px-2">Ingredients</h1>
                        <ul className="flex flex-col gap-2 list-disc list-inside marker:text-primary">
                            <li className="text-sm bg-card p-2 rounded-xl text-muted-foreground"><span className="font-bold text-foreground">Vegetable Oil </span >- 2tbsp</li>
                            <li className="text-sm bg-card p-2 rounded-xl"><span className="font-bold">Vegetable Oil </span>- 2tbsp</li>
                            
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                         <h1 className="border-l-3 border-l-primary font-bold px-2">Instructions</h1>
                            <p className="text-xs bg-card p-4 whitespace-pre-line">{`DIRECTIONS:\r\nSTEP 1 - SAUCE\r\nIn a bowl, add 2 Cups of water, 2 Tablespoon soy sauce, 2 Tablespoon white vinegar, sherry cooking wine, 1/4 Teaspoon white pepper, minced ginger, minced garlic, hot pepper, ketchup, hoisin sauce, and sugar.\r\nMix together well and set aside.\r\nSTEP 2 - MARINATING THE CHICKEN\r\nIn a bowl, add the chicken, 1 pinch of salt, 1 pinch of white pepper, 2 egg whites, and 3 Tablespoon of corn starch\r\nSTEP 3 - DEEP FRY THE CHICKEN\r\nDeep fry the chicken at 350 degrees for 3-4 minutes or until it is golden brown and loosen up the chicken so that they don't stick together.\r\nSet the chicken aside.\r\nSTEP 4 - STIR FRY\r\nAdd the sauce to the wok and then the broccoli and wait until it is boiling.\r\nTo thicken the sauce, whisk together 2 Tablespoon of cornstarch and 4 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness.\r\nNext add in the chicken and stir-fry for a minute and serve on a plate`}</p>
                    </div>
                </div>
                <div className="absolute bg-white/80 border-white rounded-full p-2 top-2 left-67" onClick={this.props.onClick}>
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

        return(
        !this.state.clicked? (
            <div className="flex flex-col w-[calc(50%_-_1rem)] bg-card font-body rounded-xl pb-4 relative" onClick={this.handleClick}>
                <div>
                    <img src={TestPicture} alt="" className="rounded-t-xl hover:scale-110 ease-in-out duration-300 transition-transform" />
                </div>
                <div className="px-3">
                    <h1 className="text-sm my-4 font-bold">Tinola</h1>
                    <div className="flex gap-2">
                        <FoodLabel label={'Filipino'} className={'text-xs bg-background flex items-center justify-center py-1 px-3 rounded-2xl text-foreground border-1 border-card'} />
                        <FoodLabel label={'Stew'} className={'text-xs bg-background flex items-center justify-center py-1 px-3 rounded-2xl text-foreground border-1 border-card'} />
                    </div>
                </div>
                <div className="absolute bg-white/80 border-white rounded-full p-2 top-2 left-29">
                    <CiHeart />
                </div>
            </div>
        ) : (
            <CardInfo onClick={this.handleClick} onBlur={this.handleClick} />
        )
    )
    }

}

export default Card;