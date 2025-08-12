let firstCard = 7;
let secondCard = 13;
let sum = firstCard + secondCard;
message = "";

console.log(sum);

if (sum === 21) {
  message = `You Win 🥳. You've got Blackjack!`;
} else if (sum < 21) {
  message = `You are still in the game 🙃. Do you want to draw a new card? 🙂`;
} else {
  message = `You lost badly 🥴`;
}

console.log(message);
