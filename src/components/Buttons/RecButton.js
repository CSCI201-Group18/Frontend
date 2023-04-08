import React from 'react'
import './RecButton.css'

function returnButton(type, name, onClick){
  if(type==="short"){
    return <button className="RecShortButton" onClick={onClick}>{name}</button>
  }
  else if(type==="long"){
    return <button className="RecLongButton" onClick={onClick}>{name}</button>
  }
  else if(type==="bold"){
    return <button className="RecBoldButton" onClick={onClick}>{name}</button>
  }
}


const RecButton = (props) => {
return (
  returnButton(props.type, props.name, props.onClick)
)
}

export default RecButton