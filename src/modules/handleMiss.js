import { main, gameState } from './globals';

const handleMiss = (menuClickEvent) => {
  if (gameState.foundCount.includes(menuClickEvent.target.textContent)) {
    const miss = document.createElement('p');
    miss.className = 'miss';
    miss.textContent = `You already found ${menuClickEvent.target.textContent}! Keep looking!`;
    miss.style.left = `${menuClickEvent.pageX.toString()}px`;
    miss.style.top = `${menuClickEvent.pageY.toString()}px`;
    main.append(miss);
    setTimeout(() => {
      miss.remove();
    }, 2000);
  } else {
    const miss = document.createElement('p');
    miss.className = 'miss';
    miss.textContent = 'Keep looking!';
    miss.style.left = `${menuClickEvent.pageX.toString()}px`;
    miss.style.top = `${menuClickEvent.pageY.toString()}px`;
    main.append(miss);
    setTimeout(() => {
      miss.remove();
    }, 2000);
  }
};

export default handleMiss;
