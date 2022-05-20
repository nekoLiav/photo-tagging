import { main, gameState } from './globals';
import handleMapLoading from './handleMapLoading';

const renderMapSelect = () => {
  main.childNodes.forEach((child) => child.remove());

  const mapSelectContainer = document.createElement('div');
  const spaceWaldoContainer = document.createElement('div');
  const spaceWaldoLabel = document.createElement('p');
  const iceWaldoContainer = document.createElement('div');
  const iceWaldoLabel = document.createElement('p');

  mapSelectContainer.className = 'map-select-container';
  spaceWaldoContainer.className = 'map-select';
  spaceWaldoLabel.className = 'map-select';
  spaceWaldoLabel.textContent = 'Space Waldo';
  spaceWaldoLabel.setAttribute('data-map', 'space-waldo');
  iceWaldoContainer.className = 'map-select';
  iceWaldoLabel.className = 'map-select';
  iceWaldoLabel.textContent = 'Ice Waldo';
  iceWaldoLabel.setAttribute('data-map', 'ice-waldo');

  spaceWaldoContainer.append(spaceWaldoLabel);
  iceWaldoContainer.append(iceWaldoLabel);
  mapSelectContainer.append(iceWaldoContainer, spaceWaldoContainer);
  main.append(mapSelectContainer);
  mapSelectContainer.addEventListener('click', handleMapLoading);

  gameState.currentMap = null;
  gameState.timer = 0;
  gameState.foundCount = 0;
  gameState.toFindCount = 0;
  gameState.gameOver = false;
};

export default renderMapSelect;
