import { main, gameState } from './globals';
import renderBoundaries from './renderBoundaries';
import handleWin from './handleWin';

const handleHit = (found, menuClickEvent) => {
  const hit = document.createElement('p');
  hit.className = 'hit';
  hit.textContent = `You found ${found.key
    .slice(0, 1)
    .toUpperCase()
    .concat(found.key.slice(1))}!`;
  hit.style.left = `${menuClickEvent.pageX.toString()}px`;
  hit.style.top = `${menuClickEvent.pageY.toString()}px`;
  main.append(hit);
  setTimeout(() => {
    hit.remove();
  }, 2000);
  renderBoundaries(found.pX, found.tX, found.pY, found.tY);
  gameState.foundCount.push(
    found.key.slice(0, 1).toUpperCase().concat(found.key.slice(1))
  );

  if (gameState.foundCount.length === gameState.toFindCount) {
    handleWin();
  }
};

export default handleHit;
