import React from 'react'
import './SquareButton.css'


function returnButton(type, onClick){
    if(type==="home"){
        return  <button className="SquareButton" onClick={onClick}><img class="ImageStyle" src='/houseIcon.png' alt=""/></button>
    }
    else if(type==="person"){
        return <button className="SquareButton" onClick={onClick}><img class="ImageStyle" src='/personIcon.png' alt=""/></button>
    }
}


const SquareButton = (props) => {
  return (
        returnButton(props.type, props.onClick)
  )
}

export default SquareButton