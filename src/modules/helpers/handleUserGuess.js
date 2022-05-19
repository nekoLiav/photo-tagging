import { main, currentMap } from '../globals';
import handleCoordinateCheck from './handleCoordinateCheck';
import renderBoundaries from './renderBoundaries';

const handleUserGuess = async (mapClickEvent) => {
  if (mapClickEvent.target.classList.contains('current-map')) {
    const found = await handleCoordinateCheck(mapClickEvent);

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

      clickMenu.addEventListener('click', (menuClickEvent) => {
        if (
          found !== undefined &&
          menuClickEvent.target.textContent === found.character
        ) {
          console.log(`Found ${found.character}.`);
          renderBoundaries(
            found.pX,
            found.rX,
            found.tX,
            found.pY,
            found.rY,
            found.tY
          );
        } else {
          console.log('Keep looking!');
        }
      });

      main.addEventListener('click', () => {
        clickMenu.remove();
      });
    }
  }
};

export default handleUserGuess;
