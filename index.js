let firstCard = 7;
let secondCard = 13;
let sum = firstCard + secondCard;
message = "";

if (sum === 21) {
  message = `You Win 🥳. You've got Blackjack!`;
} else if (sum < 21) {
  message = `You are still in the game 🙃.`;
} else {
  message = `You lost badly 🥴`;
}

console.log(message);
