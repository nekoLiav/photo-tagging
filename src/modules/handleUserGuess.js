import { main, mapContainer, gameState } from './globals';
import handleCoordinateCheck from './handleCoordinateCheck';
import handleHit from './handleHit';
import firebaseGet from '../firebase/firebaseGet';
import handleMiss from './handleMiss';
import renderToFindImages from './renderToFindImages';

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
      const clickMenuItem = document.createElement('div');
      clickMenuItem.className = 'click-menu-item';
      const clickMenuImg = renderToFindImages(key);
      const clickMenuText = document.createElement('p');

      clickMenuItem.setAttribute('data-key', key);
      clickMenuImg.setAttribute('data-key', key);
      clickMenuText.setAttribute('data-key', key);

      clickMenuText.textContent = key
        .slice(0, 1)
        .toUpperCase()
        .concat(key.slice(1));
      if (
        gameState.foundCount.includes(
          key.slice(0, 1).toUpperCase().concat(key.slice(1))
        )
      ) {
        clickMenuItem.classList.add('found');
        clickMenuImg.classList.add('found');
        clickMenuText.classList.add('found');
      }
      clickMenuItem.append(clickMenuImg, clickMenuText);
      clickMenu.append(clickMenuItem);
    });

    mapContainer[0].append(clickMenu);

    clickMenu.addEventListener('click', async (menuClickEvent) => {
      const found = await handleCoordinateCheck(
        mapClickEvent,
        menuClickEvent,
        serverData
      );
      if (found !== undefined) {
        handleHit(found, menuClickEvent);
      } else if (!menuClickEvent.target.classList.contains('found')) {
        handleMiss(menuClickEvent);
      }
    });

    main.addEventListener('click', (e) => {
      if (!e.target.classList.contains('found')) {
        clickMenu.remove();
      }
    });
  }
};

export default handleUserGuess;
