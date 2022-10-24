import React from 'react';
import './App.css';
import CardProps from './card';

const CardView: React.FC<CardProps> = props => {
  const cardClass = 'card rank-' + props.rank.toLowerCase() + ' ' + props.suit;

  return(
    <div className="playingCards faceImages">
      <span className={cardClass}>
        <span className="rank">{props.rank}</span>
        <span className="suit">{props.suit}</span>
      </span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <CardView rank={'K'} suit={'♦'}/>
    </div>
  );
}

export default App;
