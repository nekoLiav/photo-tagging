import { mapContainer, gameState } from './globals';
import firebaseLbAdd from '../firebase/handleLbAdd';
import renderLeaderboard from './renderLeaderboard';
import resetGameState from './resetGameState';
import formatTime from './formatTime';

const handleWin = () => {
  gameState.gameInProgress = false;

  const winModal = document.createElement('div');
  const winMessage = document.createElement('p');
  const nameInput = document.createElement('input');
  const submitButton = document.createElement('button');

  winModal.className = 'win-modal';
  nameInput.className = 'name-input';
  submitButton.className = 'submit-button';

  nameInput.type = 'text';
  winMessage.textContent = `Your time to finish was ${formatTime(
    gameState.timer
  )}! Submit your name to appear on the leaderboard.`;
  submitButton.textContent = 'Submit';

  winModal.append(winMessage, nameInput, submitButton);
  mapContainer[0].append(winModal);

  submitButton.addEventListener('click', () => {
    firebaseLbAdd(
      nameInput.value,
      new Date(Date.now()).toISOString(),
      gameState.timer,
      gameState.currentMap
    );
    renderLeaderboard(gameState.currentMap);
    resetGameState();
  });
};

export default handleWin;
