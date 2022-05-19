import { main } from './globals';
import renderSpaceWaldo from './renderSpaceWaldo';
import handleUserGuess from './handleUserGuess';
import handleTimer from './handleTimer';

const handleMapLoading = (e) => {
  if (e.target.tagName === 'IMG') {
    let mapToLoad;
    main.childNodes.forEach((child) => child.remove());
    if (e.target.className === 'space-waldo') {
      mapToLoad = renderSpaceWaldo();
      mapToLoad.classList.add('current-map');
    }
    const mapContainer = document.createElement('div');
    mapContainer.className = 'map-container';
    const info = document.createElement('div');
    info.className = 'info';
    mapContainer.append(info, mapToLoad);
    main.append(mapContainer);
    handleTimer();
    main.addEventListener('click', handleUserGuess);
  }
};

export default handleMapLoading;
