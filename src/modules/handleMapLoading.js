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
    const info = document.createElement('div');
    const timerText = document.createElement('p');
    let timer = 0;
    info.className = 'info';
    const toTime = (seconds) => {
      const date = new Date(null);
      date.setSeconds(seconds);
      return date.toISOString().substring(14, 19);
    };
    setInterval(() => {
      timer += 1;
      timerText.textContent = toTime(timer);
    }, 1000);
    info.append(timerText);
    main.append(info, mapToLoad);
    main.addEventListener('click', handleUserGuess);
  }
};

export default handleMapLoading;
