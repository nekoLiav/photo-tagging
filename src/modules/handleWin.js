import { main, gameState } from './globals';

const handleWin = () => {
  const win = document.createElement('div');
  win.className = 'win';
  win.textContent = 'Got the W.';
  gameState.gameOver = true;

  main.append(win);
};

export default handleWin;
