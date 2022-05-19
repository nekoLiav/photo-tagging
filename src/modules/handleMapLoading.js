import { main } from './globals';
import renderSpaceWaldo from './renderSpaceWaldo';
import handleUserGuess from './handleUserGuess';

const handleMapLoading = (e) => {
  if (e.target.tagName === 'IMG') {
    let mapToLoad;
    main.childNodes.forEach((child) => child.remove());
    if (e.target.className === 'space-waldo') {
      mapToLoad = renderSpaceWaldo();
      mapToLoad.classList.add('current-map');
    }
    main.append(mapToLoad);
    main.addEventListener('click', handleUserGuess);
  }
};

export default handleMapLoading;
