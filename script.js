//your JS code here. If required.
const player1Input = document.getElementById('player-1');
const player2Input = document.getElementById('player-2');
const submitButton = document.getElementById('submit');
const messageDiv = document.querySelector('.message');
const boardCells = document.querySelectorAll('.cell');

let currentPlayer = 'X'; // 'X' represents player 1, 'O' represents player 2

submitButton.addEventListener('click', startGame);

function startGame() {
  const player1Name = player1Input.value;
  const player2Name = player2Input.value;

  if (player1Name.trim() === '' || player2Name.trim() === '') {
    alert('Please enter both player names.');
    return;
  }

  messageDiv.textContent = `${player1Name}, you're up!`;
  boardCells.forEach(cell => cell.addEventListener('click', handleCellClick));

  submitButton.disabled = true;
  player1Input.disabled = true;
  player2Input.disabled = true;
}

function handleCellClick(event) {
  const cell = event.target;

  if (cell.textContent === '') {
    cell.textContent = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateMessage();
  }
}

function checkWin() {
  // You need to implement the logic to check for a win here
  // and show the message with the winner's name.
}

function updateMessage() {
  const player1Name = player1Input.value;
  const player2Name = player2Input.value;
  const message = currentPlayer === 'X' ? `${player1Name}, you're up!` : `${player2Name}, you're up!`;
  messageDiv.textContent = message;
}
