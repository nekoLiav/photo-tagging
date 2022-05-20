import { main, gameState } from './globals';
import renderBoundaries from './renderBoundaries';
import handleWin from './handleWin';

const handleHit = (found, menuClickEvent) => {
  if (gameState.foundCount.includes(menuClickEvent.target.textContent)) {
    const alreadyHit = document.createElement('p');
    alreadyHit.className = 'hit';
    alreadyHit.textContent = `You already found ${menuClickEvent.target.textContent
      .slice(0, 1)
      .toUpperCase()
      .concat(menuClickEvent.target.textContent.slice(1))}! Keep looking!`;
    alreadyHit.style.left = `${menuClickEvent.pageX.toString()}px`;
    alreadyHit.style.top = `${menuClickEvent.pageY.toString()}px`;
    main.append(alreadyHit);
  } else {
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
  }
  if (gameState.foundCount.length === gameState.toFindCount) {
    handleWin();
  }
};

export default handleHit;
