import React from 'react';  
import { RxCross2 } from "react-icons/rx";
    
const Ingredient = ({ ingredient, measurement }) => {
    return (
        <li className="text-sm bg-card p-2 rounded-xl text-muted-foreground"><span className="font-bold text-foreground">{ingredient} -</span>{measurement}</li>
    )
}

const FoodLabel = ({ label, className }) => {
    return (
        <div className={className}>{label}</div>
    )
}

class CardInfo extends React.Component {

    
    render () {

        const { recipeInfo } = this.props;
        return (
        <>
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={this.props.onClick}></div>
            <div className="flex flex-col fixed bg-background w-5/6 h-4/5 overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] rounded-xl" onClick={(e) => e.stopPropagation()}>
                <div className="w-full h-70 relative">
                    <img src={recipeInfo.picture} alt="" className="w-full max-h-70 object-cover" style={{ 
                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' 
                        }}/>
                    <h1 className="absolute top-45 left-5 font-body text-2xl text-white font-bold">{recipeInfo.foodName}</h1>
                    <div className="flex gap-4 absolute top-55 left-4">
                            {recipeInfo.tags.map(label => <FoodLabel label={label} key={label} className={'text-xs bg-background/50 flex items-center justify-center py-1 px-5 rounded-2xl text-foreground border-1 border-card '} />)}        
                    </div>
                </div>
                <div className="flex flex-col px-4 py-3 gap-6">
                    <div className="flex flex-col gap-3">
                        <h1 className="border-l-3 border-l-primary font-bold px-2">Ingredients</h1>
                        <ul className="flex flex-col gap-2 list-disc list-inside marker:text-primary">
                            {recipeInfo.ingredients.map(({ ingredient, measurement}) => <Ingredient key={`${ingredient}-${measurement}`} ingredient={ingredient} measurement={measurement} />)}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                         <h1 className="border-l-3 border-l-primary font-bold px-2">Instructions</h1>
                            <p className="text-xs bg-card p-4 whitespace-pre-line">{recipeInfo.instructions}</p>
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

export default CardInfo;