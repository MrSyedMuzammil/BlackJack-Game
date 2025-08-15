let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;

message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function getRandomCard() {
  const card = Math.floor(Math.random() * 13) + 1;
  if (card === 1) {
    return 11;
  } else if (card > 10) {
    return 10;
  } else {
    return card;
  }
}

function renderGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  let cards = [firstCard, secondCard];
  let sum = firstCard + secondCard;

  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]}`;
  }

  sumEl.textContent = `Sum: ${sum}`;
  if (sum === 21) {
    message = `You Win 🥳. You've got Blackjack!`;
    hasBlackJack = true;
  } else if (sum < 21) {
    message = `You are still in the game 🙃.`;
  } else {
    message = `You lost badly 🥴`;
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);

  renderGame();
}
