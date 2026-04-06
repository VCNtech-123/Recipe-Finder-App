import React from 'react'
import TestPicture from '../assets/TestPicture.jpg'
import { RxCross2 } from "react-icons/rx";

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
        return (
        <>
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"></div>
            <div className="flex flex-col fixed bg-background w-5/6 h-4/5 overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-xl">
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
                         <p className="text-xs bg-card p-4">Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!</p>
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
        this.setState({ clicked: true }); 
    }

    render () {

        return(
        !this.state.clicked? (
            <div className="flex flex-col w-[calc(50%_-_1rem)] bg-card font-body rounded-xl pb-4" onClick={this.handleClick}>
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
            </div>
        ) : (
            <CardInfo onClick={this.handleClick} />
        )
    )
    }

}

export default Card;