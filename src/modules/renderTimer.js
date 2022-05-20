import { mapContainer, gameState } from './globals';

const renderTimer = () => {
  const timer = document.createElement('p');
  timer.className = 'timer';

  const updateTimer = () => {
    gameState.timer += 1;
    const date = new Date(null);
    date.setSeconds(gameState.timer);
    timer.textContent = date.toISOString().substring(14, 19);
  };

  const setTimer = setInterval(() => {
    if (gameState.gameOver) {
      clearInterval(setTimer);
    } else {
      updateTimer();
    }
  }, 1000);

  mapContainer[0].append(timer);
};

export default renderTimer;
