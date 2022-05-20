import { main, gameState } from './globals';
import handleUserGuess from './handleUserGuess';
import renderMap from './renderMap';
import renderTimer from './renderTimer';

const handleMapLoading = (e) => {
  if (e.target.className === 'map-select') {
    main.childNodes.forEach((child) => child.remove());

    const map = renderMap(e.target.getAttribute('data-map'));
    const mapContainer = document.createElement('div');

    map.classList.add('current-map');
    mapContainer.className = 'map-container';

    mapContainer.append(map);
    main.append(mapContainer);

    renderTimer();
    // setTimeout(renderTestBoundaries, 1000);

    main.addEventListener('click', handleUserGuess);

    gameState.currentMap = e.target.getAttribute('data-map');
  }
};

export default handleMapLoading;
