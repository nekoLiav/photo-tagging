import { mapContainer, gameState } from './globals';
import firebaseLbAdd from '../firebase/handleLbAdd';
import renderLeaderboard from './renderLeaderboard';
import resetGameState from './resetGameState';

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
    firebaseLbAdd(
      nameInput.value,
      new Date(Date.now()).toISOString(),
      gameState.timer
    );
    resetGameState();
    renderLeaderboard();
  });

  gameState.gameInProgress = false;

  winModal.append(winMessage, nameInput, submitButton);
  mapContainer[0].append(winModal);
};

export default handleWin;
