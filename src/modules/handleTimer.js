/* eslint-disable no-unused-expressions */
import { gameState, info } from './globals';
import formatTime from './formatTime';

const handleTimer = () => {
  const timer = document.createElement('p');
  info[0].append(timer);

  const updateTimer = () => {
    gameState.timer += 1;
    timer.textContent = formatTime(gameState.timer);
  };

  const setTimer = setInterval(() => {
    gameState.gameOver ? clearInterval(setTimer) : updateTimer();
  }, 1000);
};

export default handleTimer;
