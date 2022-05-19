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
    const info = document.createElement('div');
    info.className = 'info';
    main.append(info, mapToLoad);
    handleTimer();
    main.addEventListener('click', handleUserGuess);
  }
};

export default handleMapLoading;
