import React from "react";
import "../styles/Card.css"

export const Card = (props) => {

  const card = props.card;
  const handleSelection = props.handleSelection;

  const cardComp = (
    <div 
      className="card-cont" 
      id={card.name} 
      onClick={(e)=>{handleSelection(e,card)}}
    >    
      <img src={card.img} alt={card.name}/>
      <div>{card.name}</div>
    </div>
  );

  return cardComp

} 