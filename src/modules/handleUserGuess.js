import { main, currentMap, gameState } from './globals';
import handleCoordinateCheck from './handleCoordinateCheck';
import renderBoundaries from './renderBoundaries';
import handleWin from './handleWin';
import handleMiss from './handleMiss';

const handleUserGuess = async (mapClickEvent) => {
  if (mapClickEvent.target.classList.contains('current-map')) {
    const clickMenu = document.createElement('div');
    clickMenu.className = 'click-menu';

    if (currentMap[0].classList.contains('space-waldo')) {
      const clickMenuWaldo = document.createElement('p');
      const clickMenuOdlaw = document.createElement('p');

      clickMenuWaldo.textContent = 'Waldo';
      clickMenuOdlaw.textContent = 'Odlaw';

      clickMenu.style.left = `${mapClickEvent.x.toString()}px`;
      clickMenu.style.top = `${mapClickEvent.y.toString()}px`;

      clickMenu.append(clickMenuWaldo, clickMenuOdlaw);
      main.append(clickMenu);

      clickMenu.addEventListener('click', async (menuClickEvent) => {
        const found = await handleCoordinateCheck(mapClickEvent);
        if (
          found !== undefined &&
          menuClickEvent.target.textContent === found.character
        ) {
          if (found.character === 'Waldo') {
            gameState.foundWaldo = true;
          } else if (found.character === 'Odlaw') {
            gameState.foundOdlaw = true;
          }
          renderBoundaries(
            found.pX,
            found.rX,
            found.tX,
            found.pY,
            found.rY,
            found.tY
          );
          if (gameState.foundWaldo && gameState.foundOdlaw) {
            handleWin();
          }
        } else {
          handleMiss();
        }
      });

      main.addEventListener('click', () => {
        clickMenu.remove();
      });
    }
  }
};

export default handleUserGuess;
