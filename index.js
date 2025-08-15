let firstCard = 7;
let secondCard = 13;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]}`;
  }

  sumEl.textContent = `Sum: ${sum}`;
  if (sum === 21) {
    message = `You Win 🥳. You've got Blackjack!`;
  } else if (sum < 21) {
    message = `You are still in the game 🙃.`;
  } else {
    message = `You lost badly 🥴`;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = 7;
  sum += card;
  cards.push(card);

  renderGame();
}
