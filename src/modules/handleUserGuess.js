import { main } from './globals';
import handleCoordinateCheck from './handleCoordinateCheck';
import handleMiss from './handleMiss';
import handleHit from './handleHit';
import firebaseGet from '../firebase/firebaseGet';

const handleUserGuess = async (mapClickEvent) => {
  if (mapClickEvent.target.classList.contains('current-map')) {
    const map = mapClickEvent.target.getAttribute('data-map');
    const serverData = await firebaseGet(map);
    const keys = await Object.keys(serverData);

    const clickMenu = document.createElement('div');
    clickMenu.className = 'click-menu';
    clickMenu.style.left = `${mapClickEvent.pageX.toString()}px`;
    clickMenu.style.top = `${mapClickEvent.pageY.toString()}px`;

    keys.forEach((key) => {
      const clickMenuItem = document.createElement('p');
      clickMenuItem.setAttribute('data-key', key);
      clickMenuItem.textContent = key
        .slice(0, 1)
        .toUpperCase()
        .concat(key.slice(1));
      clickMenu.append(clickMenuItem);
    });

    main.append(clickMenu);

    clickMenu.addEventListener('click', async (menuClickEvent) => {
      const found = await handleCoordinateCheck(
        mapClickEvent,
        menuClickEvent,
        serverData
      );
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
};

export default handleUserGuess;
