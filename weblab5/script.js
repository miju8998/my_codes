const rollButton = document.getElementById("roll-button");
const restartButton = document.getElementById("restart-button");
const horse1 = document.getElementById("horse1");
const horse2 = document.getElementById("horse2");
const diceDisplay = document.getElementById("dice-display");
const winnerModal = document.getElementById("winner-modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const winnerText = document.getElementById("winner-text");
const closeModal = document.getElementById("close-modal");

let currentPlayer = 1;
let horse1Position = 0;
let horse2Position = 0;
const trackWidth = 800;

function rollDice() {
  return Math.floor(Math.random() * 4) + 1;
}

function updateDiceDisplay(rolls) {
  diceDisplay.textContent = rolls.join(" ");
}

function moveHorse(horse, steps) {
  const newLeft = Math.min(trackWidth, (parseInt(horse.style.left || "0") + (steps * 80)));
  horse.style.left = `${newLeft}px`;
  return newLeft >= trackWidth;
}

function showWinner(player) {
  winnerText.textContent = `Congrats Player ${player} won!`;
  winnerModal.style.display = "block";
  modalBackdrop.style.display = "block";
  rollButton.disabled = true;
}

function handleRoll() {
  const rolls = [rollDice(), rollDice(), rollDice(), rollDice()];
  updateDiceDisplay(rolls);

  const steps = rolls.filter(num => num === 1).length;
  const hasWon = currentPlayer === 1 ? moveHorse(horse1, steps) : moveHorse(horse2, steps);

  if (hasWon) {
    showWinner(currentPlayer);
    return;
  }

  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function restartGame() {
  horse1.style.left = "0";
  horse2.style.left = "0";
  horse1Position = 0;
  horse2Position = 0;
  currentPlayer = 1;
  diceDisplay.textContent = "dice dice dice dice";
  winnerModal.style.display = "none";
  modalBackdrop.style.display = "none";
  rollButton.disabled = false;
}

rollButton.addEventListener("click", handleRoll);
restartButton.addEventListener("click", restartGame);
closeModal.addEventListener("click", () => {
  winnerModal.style.display = "none";
  modalBackdrop.style.display = "none";
});
