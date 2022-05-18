import { main, currentMap } from '../globals';
import handleCoordinateCheck from './handleCoordinateCheck';

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
        if (menuClickEvent.target.textContent === found) {
          console.log(`found ${found}`);
        } else {
          console.log('found nothing');
        }
      });

      main.addEventListener('click', () => {
        clickMenu.remove();
      });
    }
  }
};

export default handleUserGuess;
