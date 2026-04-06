import React from 'react'
import TestPicture from '../assets/TestPicture.jpg'

const FoodLabel = ({ label, className }) => {
    return (
        <div className={className}>{label}</div>
    )
}

class CardInfo extends React.Component {
    render () {
        return (
        <div className="flex flex-col fixed bg-card w-5/6 h-4/5 overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-screen h-70 relative">
                <img src={TestPicture} alt="" className="w-screen max-h-70 object-cover" style={{ 
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' 
                    }}/>
                <h1 className="absolute top-45 left-5 font-body text-2xl text-white font-bold">Tinola</h1>
                <div className="flex gap-4 absolute top-55 left-4">
                        <FoodLabel label={'Filipino'} className={'text-xs bg-background/50 flex items-center justify-center py-1 px-5 rounded-2xl text-foreground border-1 border-card '} />
                        <FoodLabel label={'Stew'} className={'text-xs bg-background/50 flex items-center justify-center py-1 px-5 rounded-2xl text-foreground border-1 border-card '} />
                </div>
             </div>
             <div className="flex flex-col px-4 py-2">
                    <h1 className="">Ingredients</h1>
             </div>
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
                        <FoodLabel label={'Filipino'} className={'text-xs bg-background flex items-center justify-center py-1 px-3 rounded-2xl text-foreground border-1 border-card'} />
                        <FoodLabel label={'Stew'} className={'text-xs bg-background flex items-center justify-center py-1 px-3 rounded-2xl text-foreground border-1 border-card'} />
                    </div>
                </div>
            </div>
        ) : (
            null
        )
    )
    }

}

export default CardInfo;