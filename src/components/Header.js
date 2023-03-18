import React from "react"

import "../styles/Header.css"

export const Header = ({score,bestscore}) => {

  const header = (
    <header>
      <div>
        <div>Score: {score}</div>
        <div>Best: {bestscore}</div>
      </div>
    </header>
  )
  return header
}