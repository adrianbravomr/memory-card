import React from "react";

import { Card } from "./Card";

import "../styles/Board.css"

export const Board = ({cards,handleSelection}) => {

  const board = (
    <div className="board-cont">
      <h3>MONSTER HUNTER® Memory Card</h3>
      <div>Get points selecting each monster once</div>
      <div className="cards-cont">
        {
          cards.map(card => {
            return <Card key={card.name} card={card} handleSelection={handleSelection}/>
          })
        }
      </div>
    </div>
  )

  return board
}