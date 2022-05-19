import { main, gameState } from './globals';

const handleWin = () => {
  const winModal = document.createElement('div');
  winModal.className = 'win-modal';

  const winMessage = document.createElement('p');
  winMessage.textContent = `You found them in ${gameState.timer} seconds! Submit your name to appear on the leaderboard.`;

  const nameInput = document.createElement('input');
  nameInput.className = 'name-input';
  nameInput.type = 'text';

  const submitButton = document.createElement('button');
  submitButton.className = 'submit-button';
  submitButton.textContent = 'Submit';

  submitButton.addEventListener('click', () => {
    console.log(nameInput.value);
  });

  gameState.gameOver = true;

  winModal.append(winMessage, nameInput, submitButton);
  main.append(winModal);
};

export default handleWin;
