import Card from "./Card";

class CardDeck {
  newDeck: object[];
  allSuits: string[];
  allRanks: string[];
  totalCards: number;
  drawArr?: object[];

  constructor() {
    this.newDeck = [];
    this.totalCards = 52;
    this.allSuits = ['diams', 'hearts', 'clubs', 'spades'];
    this.allRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let i = 0; i < this.allSuits.length; i++){
      for (let j = 0; j < this.allRanks.length; j++){
        const newCard = new Card(this.allSuits[i], this.allRanks[j]);
        this.newDeck.push(newCard);
      }
    }
  }

  getCard() {
    let randomCard = Math.floor(Math.random() * this.totalCards);
    const cardDeleted = this.newDeck.splice(randomCard, 1);
    return cardDeleted[0];
  }

  getCards(howMany: number)  {
    this.drawArr = [];
    for (let k = 0; k < howMany; k++){
      this.drawArr.push(this.getCard());
    }
    return this.drawArr;
  }
}

export default CardDeck;