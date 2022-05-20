import formatTime from './formatTime';
import { mapContainer, gameState } from './globals';

const renderTimer = () => {
  const timer = document.createElement('p');
  timer.className = 'timer';
  mapContainer[0].append(timer);

  const setTimer = setInterval(() => {
    if (gameState.gameInProgress) {
      gameState.timer += 1;
      timer.textContent = formatTime(gameState.timer);
    } else {
      clearInterval(setTimer);
    }
  }, 1000);
};

export default renderTimer;
