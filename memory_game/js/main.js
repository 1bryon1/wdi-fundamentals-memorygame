console.log("Up and Running");
//playing Cards
var cards = [
{
  rank: 'queen',
  suit: 'hearts',
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: 'queen',
  suit: 'diamonds',
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: 'king',
  suit: 'hearts',
  cardImage: "images/king-of-hearts.png"
},
{
  rank: 'king',
  suit:'diamonds',
  cardImage: "images/king-of-diamonds.png"
}
];
//cardsInPlay area
var cardsInPlay =[].push('cardOne' + 'cardTwo');

//flipCard (Chap 9)
var flipCard = function(cardId){
  this.setAttribute('src',cards[cardId].cardImage);
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    cardsInPlay.push(cards[cardId].rank);
    console.log("user flipped " + cards[cardID].rank)
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].cardSuit);
}
//checkForMatch
var cardsInPlay =[];
  var checkForMatch = function (){
  var cardId=this.getAttribute('data-id');
    if (cardsInPlay[0] ===  cardsInPlay[1]){
    console.log("you found a match");
    alert("you found a match");
    }else{
    console.log("you found a match");
    alert("you found a match");
checkForMatch();
    var cardId=this.getAttribute('data-id');
    this.setAttribute('src',cards[cardId].cardImage);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
  }
}
//createBoard
var createBoard = function(){
for (var i = 0; i < cards.length; i++){
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src', "images/back.png");
  cardElement.setAttribute('data-id, i');
  cardElement.addEventListener('click', flipCard);
  document.getElementById('game-board').appendChild(cardElement);
  }
}
createBoard();
