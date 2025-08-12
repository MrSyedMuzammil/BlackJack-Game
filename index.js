let firstCard = 7;
let secondCard = 13;
let sum = firstCard + secondCard;

console.log(sum);

if (sum === 21) {
  console.log(`You Win 🥳. You've got Blackjack!`);
} else if (sum < 21) {
  console.log(
    `You are still in the game 🙃. Do you want to draw a new card? 🙂`
  );
} else {
  console.log(`You lost badly 🥴`);
}
