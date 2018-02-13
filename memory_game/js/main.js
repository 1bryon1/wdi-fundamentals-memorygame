console.log("Up and Running");

console.log("User flipped a queen");
console.log("user flipped a king");

var cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];
//cardsInPlay array area??
var cardsInPlay = [];
var checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("you found a match");
      alert("YOU FOUND A MATCH");
      } else {
      console.log("sorry, try again.");
      alert("SORRY TRY AGAIN");
  }
}

//flipCard function
var flipCard = function(cardId){
  var cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
  console.log("User flipped" + cards[cardID].rank); + " of " + cards[cardID].suit);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
if (cardsInPlay.length === 2 && cardsInplay[0] === cardsInPlay[1]) {
  checkForMatch();
  }
}

//createBoard FUNCTION section
var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

  createBoard();
