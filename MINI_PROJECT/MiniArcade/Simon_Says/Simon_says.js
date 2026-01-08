// The four colors we can use in the game
const colors = ["red", "blue", "green", "yellow"];

// Arrays to keep track of the game and user moves
let gameSequence = []; // Simon's sequence
let userSequence = []; // What the player clicks

// Game state
let level = 0; // Current level
let score = 0; // How many rounds the player completed
let canClick = false; // Flag to prevent clicking during Simon's turn

// Grab all the DOM elements we need
const tiles = document.querySelectorAll(".tile"); // The colored buttons
const startBtn = document.getElementById("start"); // Start button
const scoreboard = document.getElementById("scoreboard"); // Overlay showing score
const resultText = document.getElementById("resultText"); // "Game Over" text
const scoreText = document.getElementById("scoreText"); // Final score text
const playAgainBtn = document.getElementById("playAgain"); // Restart button

// Start the game when the player clicks the start button
startBtn.addEventListener("click", startGame);

// Reset everything and start the first round
function startGame() {
  resetGame(); // Clear previous sequences, level, score
  nextRound(); // Begin the first round
}

// Clears all game data and hides the scoreboard
function resetGame() {
  gameSequence = [];
  userSequence = [];
  level = 0;
  score = 0;
  scoreboard.classList.remove("show"); // Hide the end screen
}

// Add a new color to Simon's sequence and show it
function nextRound() {
  canClick = false; // Player can't click while Simon is showing the sequence
  userSequence = []; // Clear user's previous moves
  level++; // Move up a level
  const nextColor = colors[Math.floor(Math.random() * 4)]; // Pick a random color
  gameSequence.push(nextColor); // Add it to Simon's sequence
  playSequence(); // Show the full sequence
}

// Show Simon's sequence to the player
function playSequence() {
  let i = 0;
  const interval = setInterval(() => {
    flashColor(gameSequence[i]); // Animate each color
    i++;
    if (i >= gameSequence.length) {
      // Stop after the full sequence
      clearInterval(interval);
      canClick = true; // Now it's player's turn
    }
  }, 800); // Show a new color every 0.8 seconds
}

// Animate a tile by flashing it
function flashColor(color) {
  const tile = document.getElementById(color);
  tile.classList.add("active"); // Highlight the tile
  setTimeout(() => tile.classList.remove("active"), 400); // Remove highlight after 0.4s
}

// Handle player clicks
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (!canClick) return; // Ignore clicks if it's not the player's turn
    const color = tile.dataset.color; // Get the clicked color
    userSequence.push(color); // Add it to the player's sequence
    flashColor(color); // Animate the click
    checkAnswer(userSequence.length - 1); // Check if this move is correct
  });
});

// Check if the player's move is correct
function checkAnswer(currentIndex) {
  if (userSequence[currentIndex] !== gameSequence[currentIndex]) {
    // If wrong, game over
    showScoreboard("Game Over 😢");
    return;
  }

  // If the player finished the full sequence correctly
  if (userSequence.length === gameSequence.length) {
    score++; // Increase score
    setTimeout(nextRound, 1000); // Start next round after a short pause
  }
}

// Show the end-of-game screen with the score
function showScoreboard(message) {
  resultText.textContent = message; // Show message like "Game Over"
  scoreText.textContent = `Your Score: ${score}`; // Show final score
  scoreboard.classList.add("show"); // Make the overlay visible
  canClick = false; // Disable clicks until new game
}

// Restart the game when the player clicks "Play Again"
playAgainBtn.addEventListener("click", () => {
  scoreboard.classList.remove("show"); // Hide overlay
  startGame(); // Reset and start a new game
});
