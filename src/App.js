import React,{useState, useEffect} from 'react';

import './App.css';

import { Header } from './components/Header';
import { Board } from './components/Board';
import { Footer } from './components/Footer';

import { monsters } from './game/monsters';
import {shuffle} from './game/utils'


const App = (props) => {
  
  const [score,setScore] = useState(0);
  const [bestscore,setBestscore] = useState(0);
  const [selectionList,setSelectionList] = useState([]);
  const [cards,setCards] = useState(monsters); 

  useEffect(()=>{
    setCards(shuffle(cards));
  },[])


  const restartGame = () => {
    setScore(0);
    setSelectionList([]);
  }

  const handleSelection = (e, card) => {
    setCards(shuffle(cards));
    if(!selectionList.includes(card.name)){
      setSelectionList([...selectionList,card.name]);
      let newScore = score+1;
      setScore(newScore);
      if (newScore>bestscore) setBestscore(newScore);
    } else {
      restartGame();
    }
  }

  const app = (
  <div className="App">
    <Header 
      score = {score} 
      bestscore = {bestscore}
    />
    <Board 
      cards = {cards} 
      handleSelection = {handleSelection}
    />
    <Footer/>
  </div>
  )

  return app;
}

export default App;
