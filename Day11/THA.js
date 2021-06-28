const cards = document.querySelectorAll(".card-inner");
const matchedCardsElement = document.querySelector(".matchedCards");
const remainingCardsElement = document.querySelector(".remainingCards");
let counter = document.querySelector(".moves");

var numberOfRemainingCards = cards.length;
var numberOfMatchedCards = 0;
var numberOfcurrentlyFlipedCards = 0;
var moves = 0;
var classOfCard1, classOfcard2;

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

document.body.onload = startgame();

function startgame() {
  init();
  cards = shuffle(cards);
}

[...cards].forEach(function (card) {
  card.addEventListener("click", () => {
    if (numberOfcurrentlyFlipedCards == 0) {
      card.classList.add("card-flip");
      classOfCard1;
      numberOfcurrentlyFlipedCards++;
      moves++;
    } else if (numberOfcurrentlyFlipedCards == 1) {
      if (!card.classList.contains("card-flip")) {
        card.classList.add("card-flip");
        classOfcard2 = card.className;
        numberOfcurrentlyFlipedCards++;
        moves++;
      }
    } else {
      var currentlyFlipedCards = document.querySelectorAll(".card-flip");
      [...currentlyFlipedCards].forEach(function (cc) {
        cc.classList.remove("card-flip");
      });
      numberOfcurrentlyFlipedCards = 0;
    }
    init();
  });
});

function init() {
  counter.textContent = moves;
  matchedCardsElement.textContent = numberOfMatchedCards;
  remainingCardsElement.textContent = numberOfRemainingCards;
}
