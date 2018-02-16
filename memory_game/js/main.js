console.log("Up and Running");
//playing Cards
var cards = [
{
  rank: 'queen',
  suit: 'hearts',
  cardImage: "images/disney-queen-of-hearts.png"
},
{
  rank: 'queen',
  suit: 'diamonds',
  cardImage: "images/disney-queen-of-diamonds.png"
},
{
  rank: 'king',
  suit: 'hearts',
  cardImage: "images/disney-king-of-hearts.png"
},
{
  rank: 'king',
  suit:'diamonds',
  cardImage: "images/disney-king-of-diamonds.png"
}
];
//cardsInPlay
var cardsInPlay = [];

//flipCard
var flipCard = function() {
  var cardId = this.getAttribute('data-Id');
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    cardsinPLay.push(cards[cardID].rank);
    console.log("user flipped" + cards[cardID].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
  }
}
//checkForMatch
var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("you found a match");
    }else{
      alert("sorry try again");
  }
}
//createBoard
var createBoard = function() {
  for (var i = 0; i < cards.length; i ++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-Id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}
createBoard();
