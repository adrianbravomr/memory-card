import React,{useState, useEffect} from 'react';

import './App.css';

import { Header } from './components/Header';
import { Board } from './components/Board';
import { Footer } from './components/Footer';

import { monsters } from './game/monsters';


const App = (props) => {
  
  const [score,setScore] = useState(0);
  useEffect(()=>{
    if (score>bestscore) setBestscore(score);
    shuffleCards();
  },[score])

  const [bestscore,setBestscore] = useState(0);
  const [selectionList,setSelectionList] = useState([]);
  const [cards,setCards] = useState(monsters); 

  const shuffleCards = () => {
    let shuffled = [...cards]
      .map(card => ({card, sort: Math.random() *10 }))
      .sort((a,b) => a.sort - b.sort)
      .map(({card}) => card)
    setCards(shuffled);
  }

  const newScore = () => {
    setScore(score+1);
  }

  const restartGame = () => {
    setScore(0);
    setSelectionList([]);
  }

  const handleSelection = (e, card) => {
    // console.log(card);
    if(!selectionList.filter(name => name === card.name).length){
      setSelectionList([...selectionList,card.name]);
      newScore();
    } else{
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
