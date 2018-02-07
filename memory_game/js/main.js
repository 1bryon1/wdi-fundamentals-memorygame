console.log("Up and Running");

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
var cardId = 0;
var cardsInPlay = [].push(cards[cardId].rank);

console.log("User flipped a queen");
console.log("user flipped a king");
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

//start card match
var checkForMatch = function () {
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("you found a match");
  } else {
  console.log("sorry, try again.");
  }
}

//start card flip
var flipCard = function(cardId){
var flipCard = (0);
var flipCard = (2);
console.log("A" + cards[cardId].rank + "was flipped!");
if (cardsInPlay.length === 2 && cardsInplay[0] === cardsInPlay[1]) {
  alert ("You Found A Match!");
}else{
  alert ("Sorry Try Again");
  }
}
