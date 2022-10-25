import Card from "./Card";

class CardDeck {
  newDeck: Card[];
  drawArr: Card[];
  totalCards: number;

  constructor() {
    this.newDeck = [];
    this.drawArr = [];
    this.totalCards = 52;
    const allSuits = ['diams', 'hearts', 'clubs', 'spades'];
    const allRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let i = 0; i < allSuits.length; i++){
      for (let j = 0; j < allRanks.length; j++){
        const newCard = new Card(allSuits[i], allRanks[j]);
        this.newDeck.push(newCard);
      }
    }
  }

  getCard() {
    let randomCard = Math.floor(Math.random() * this.totalCards);
    let cardDeleted = this.newDeck.splice(randomCard, 1);
    return cardDeleted[0];
  }

  getCards(howMany: number)  {
    for (let k = 0; k < howMany; k++){
      this.drawArr.push(this.getCard());
    }
    return this.drawArr;
  }
}

export default CardDeck;