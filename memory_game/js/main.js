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

//checkForMatch
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
    alert("you found a match");
  } else {
    console.log("Sorry, try again.");
    alert("Sorry, try again");
  }
};

//flipCard
var flipCard = function () {
  cardId = this.getAttribute('data-id');
  console.log(cardId);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch ();
    cardsInPlay = [];
  }
};

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
