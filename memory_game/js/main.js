console.log("Up and Running");

var cards = ["queen", "queen", "king", "king"];
var cardId = 0;
var cardsInPlay = [].push(cards[cardId]);

console.log("User flipped a queen");
console.log("user flipped a king");

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
console.log("A" + cards[cardId] + "was flipped!");
if (cardsInPlay.length === 2 && cardsInplay[0] === cardsInPlay[1]) {
  alert ("You Found A Match!");
}else{
  alert ("Sorry Try Again");
  }
}
