import React from "react"

import "../styles/Header.css"

export const Header = (props) => {

  const score = props.score;
  const bestscore = props.bestscore;

  const header = (
    <header>
      <div>
        <div>Score: {score}</div>
        <div>Best Score: {bestscore}</div>
      </div>
    </header>
  )
  return header
}