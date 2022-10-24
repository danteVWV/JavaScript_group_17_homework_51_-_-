import React from 'react';
import './App.css';
import CardProps from './card';
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";

const CardView: React.FC<CardProps> = props => {
  let suitSymbol = props.suit;
  switch (suitSymbol) {
    case 'diams':
      suitSymbol = '♦';
      break;
    case 'hearts':
      suitSymbol = '♥';
      break;
    case 'clubs':
      suitSymbol = '♣';
      break;
    case 'spades':
      suitSymbol = '♠';
      break;
    default:
      alert('No such suits in the deck!');
  }

  const cardClass = 'card rank-' + props.rank.toLowerCase() + ' ' + props.suit;

  return(
    <div className="playingCards faceImages">
      <span className={cardClass}>
        <span className="rank">{props.rank}</span>
        <span className="suit">{suitSymbol}</span>
      </span>
    </div>
  )
}

function App() {
  const newCard = new Card('spades', 'Q');
  const testDeck = new CardDeck();
  testDeck.getCards(5);

  return (
    <div className="App">
      <CardView suit={newCard.suit} rank={newCard.rank}/>
    </div>
  );
}

export default App;
