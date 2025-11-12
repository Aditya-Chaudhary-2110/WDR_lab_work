// --- Selecting all the required elements from HTML ---
const cells = document.querySelectorAll(".cell"); // all 9 boxes
const scoreboard = document.getElementById("scoreboard"); // popup box
const resultText = document.getElementById("result-text"); // win/draw message
const scoreText = document.getElementById("score-text"); // running score display
const playAgainBtn = document.getElementById("play-again"); // restart button

// --- Game state setup ---
let currentPlayer = "❌"; // ❌ always starts first
let board = Array(9).fill(""); // empty 3x3 board
let scores = { "❌": 0, "⭕": 0, Draw: 0 }; // score tracker

// --- Handle clicks on each cell ---
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const index = cell.getAttribute("data-index"); // which box was clicked?

    // only allow clicking empty boxes
    if (board[index] === "") {
      board[index] = currentPlayer; // mark it in board array
      cell.textContent = currentPlayer; // show ❌ or ⭕ on screen

      // --- Check what happened after the move ---
      if (checkWinner()) {
        // someone won
        scores[currentPlayer]++; // increase their score first
        showScoreboard(`${currentPlayer} Wins!`); // show win popup
      } else if (board.every((cell) => cell !== "")) {
        // board full → draw
        scores.Draw++;
        showScoreboard("It's a Draw!");
      } else {
        // otherwise, switch turn
        currentPlayer = currentPlayer === "❌" ? "⭕" : "❌";
      }
    }
  });
});

// --- Function to check if the current player has won ---
function checkWinner() {
  // all 8 possible winning combinations
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  // check if any winning pattern is filled by current player
  return winPatterns.some((pattern) =>
    pattern.every((i) => board[i] === currentPlayer)
  );
}

// --- Function to show popup scoreboard ---
function showScoreboard(message) {
  resultText.textContent = message; // set win/draw text
  // display updated scores
  scoreText.textContent = `❌: ${scores["❌"]} | ⭕: ${scores["⭕"]} | Draws: ${scores.Draw}`;
  scoreboard.classList.add("show"); // make popup visible (CSS handles animation)
}

// --- Handle "Play Again" button ---
playAgainBtn.addEventListener("click", () => {
  scoreboard.classList.remove("show"); // hide popup
  board.fill(""); // clear board array
  cells.forEach((cell) => (cell.textContent = "")); // clear UI cells
  currentPlayer = "❌"; // reset turn to ❌
});
