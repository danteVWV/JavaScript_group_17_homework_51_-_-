import React, {useState} from 'react';
import './App.css';
import CardProps from './card';
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";

function App() {

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

  const [cards, setCards] = useState<Card[]>([]);

  const playCards = function() {
    const testDeck = new CardDeck();
    testDeck.getCards(5);

    setCards([
      {rank: testDeck.drawArr[0].rank, suit: testDeck.drawArr[0].suit},
      {rank: testDeck.drawArr[1].rank, suit: testDeck.drawArr[1].suit},
      {rank: testDeck.drawArr[2].rank, suit: testDeck.drawArr[2].suit},
      {rank: testDeck.drawArr[3].rank, suit: testDeck.drawArr[3].suit},
      {rank: testDeck.drawArr[4].rank, suit: testDeck.drawArr[4].suit},
    ]);

    return(
      <React.Fragment>
        <CardView rank={testDeck.drawArr[0].rank} suit={testDeck.drawArr[0].suit}/>
        <CardView rank={testDeck.drawArr[1].rank} suit={testDeck.drawArr[1].suit}/>
        <CardView rank={testDeck.drawArr[2].rank} suit={testDeck.drawArr[2].suit}/>
        <CardView rank={testDeck.drawArr[3].rank} suit={testDeck.drawArr[3].suit}/>
        <CardView rank={testDeck.drawArr[4].rank} suit={testDeck.drawArr[4].suit}/>
      </React.Fragment>
      );
    }

  if (cards.length === 0) {
    return (
      <button onClick={playCards}>Draw your cards</button>
    )
  } else {
    return (
      <div className="App">
        <button onClick={playCards}>Draw more cards</button>
      </div>
    );
  }
}

export default App;
