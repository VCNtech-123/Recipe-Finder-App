import React from 'react'
import { CiSearch, CiHeart } from "react-icons/ci";

const Button = ({className, onClick, text, icon: Icon}) => {
    return (
        <button className={className} onClick={onClick}>{Icon && <Icon className="w-5 h-5" />}{text}</button>
    )
}

class FilterButton extends React.Component {
    render () {
        return (
            <div className="flex gap-2 bg-card shadow-mix p-1.5 rounded-2xl">
                <Button className={`${this.props.sbgStyle} flex gap-4 py-2 w-1/2 justify-center items-center rounded-3xl`} onClick={this.props.srhButton} text={'Search'} icon={CiSearch} />
                <Button className={`${this.props.fbgStyle} flex gap-4 py-2 w-1/2 justify-center items-center rounded-3xl`} onClick={this.props.fvrButton} text={'Favorites'} icon={CiHeart} />
            </div>
        )
    }
}

export default FilterButton;