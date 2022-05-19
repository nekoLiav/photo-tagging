import { main, currentMap } from './globals';
import handleCoordinateCheck from './handleCoordinateCheck';
import handleMiss from './handleMiss';
import handleHit from './handleHit';

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
        if (found !== undefined) {
          handleHit(found, menuClickEvent);
        } else {
          handleMiss(menuClickEvent);
        }
      });

      main.addEventListener('click', () => {
        clickMenu.remove();
      });
    }
  }
};

export default handleUserGuess;
