/* eslint-disable no-unused-expressions */
import { gameState, info } from './globals';

const handleTimer = () => {
  const timer = document.createElement('p');
  info[0].append(timer);

  const updateTimer = () => {
    gameState.timer += 1;
    const date = new Date(null);
    date.setSeconds(gameState.timer);
    timer.textContent = date.toISOString().substring(14, 19);
  };

  const setTimer = setInterval(() => {
    gameState.gameOver ? clearInterval(setTimer) : updateTimer();
  }, 1000);
};

export default handleTimer;
