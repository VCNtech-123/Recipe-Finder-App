import React from 'react'
import Logo from '../assets/logo.png'

class Header extends React.Component {
    

    render() {
        return (
            <div className="flex items-center gap-2 font-display">
                <img src={Logo} alt="" className="max-w-14" />
                <div className="flex flex-col">
                    <h1 className="font-bold text-xl">The Daily Plate</h1>
                    <p className="font-thin text-xs font-body">Discover delicious recipes</p>
                </div>
                
            </div>
        )
    }
}

export default Header;