import { main } from './globals';

const handleWin = () => {
  const win = document.createElement('div');
  win.className = 'win';
  win.textContent = 'Got the W.';

  main.append(win);
};

export default handleWin;
