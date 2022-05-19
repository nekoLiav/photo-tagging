import { main, gameState } from './globals';
import renderBoundaries from './renderBoundaries';
import handleWin from './handleWin';

const handleHit = (found, menuClickEvent) => {
  const renderHit = (foundChar) => {
    renderBoundaries(
      found.pX,
      found.rX,
      found.tX,
      found.pY,
      found.rY,
      found.tY
    );
    const hit = document.createElement('p');
    hit.className = 'hit';
    hit.textContent = `You found ${foundChar}`;

    hit.style.left = `${menuClickEvent.x.toString()}px`;
    hit.style.top = `${menuClickEvent.y.toString()}px`;

    main.append(hit);

    setTimeout(() => {
      hit.remove();
    }, 2000);
  };

  if (
    found.character === 'Waldo' &&
    menuClickEvent.target.textContent === 'Waldo'
  ) {
    gameState.foundWaldo = true;
    renderHit('Waldo');
  } else if (
    found.character === 'Odlaw' &&
    menuClickEvent.target.textContent === 'Odlaw'
  ) {
    gameState.foundOdlaw = true;
    renderHit('Odlaw');
  }

  if (gameState.foundWaldo && gameState.foundOdlaw) {
    handleWin();
  }
};

export default handleHit;
