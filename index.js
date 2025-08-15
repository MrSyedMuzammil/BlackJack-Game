let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "Syed Muzammil",
  chips: `$140`,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name} : ${player.chips}`;

document.getElementById("start-btn").addEventListener("click");

function startGame() {
  isAlive = true; // Add this line to start the game
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
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
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);

    renderGame();
  }
}
