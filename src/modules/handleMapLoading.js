import { main } from './globals';
import renderSpaceWaldo from './renderSpaceWaldo';
import renderIceWaldo from './renderIceWaldo';
import handleUserGuess from './handleUserGuess';
import handleTimer from './handleTimer';

const handleMapLoading = (e) => {
  if (e.target.tagName === 'P') {
    let mapToLoad;
    main.childNodes.forEach((child) => child.remove());
    if (e.target.textContent === 'Space Waldo') {
      mapToLoad = renderSpaceWaldo();
    } else if (e.target.textContent === 'Ice Waldo') {
      mapToLoad = renderIceWaldo();
    }
    mapToLoad.classList.add('current-map');
    const mapContainer = document.createElement('div');
    mapContainer.className = 'map-container';
    const info = document.createElement('div');
    info.className = 'info';
    mapContainer.append(info, mapToLoad);
    main.append(mapContainer);
    // setTimeout(renderTestBoundaries, 1000);
    handleTimer();
    main.addEventListener('click', handleUserGuess);
  }
};

export default handleMapLoading;
