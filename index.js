let firstCard = 7;
let secondCard = 13;
let sum = firstCard + secondCard;
message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
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
