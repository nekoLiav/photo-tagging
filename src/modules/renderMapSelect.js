import { main } from './globals';
import handleMapLoading from './handleMapLoading';
import resetGameState from './resetGameState';

const renderMapSelect = () => {
  resetGameState();
  main.childNodes.forEach((child) => child.remove());

  const mapSelectContainer = document.createElement('div');
  const loading = document.createElement('div');

  mapSelectContainer.className = 'map-select-container';
  loading.className = 'loading';

  loading.textContent = 'Loading maps, please wait...';

  mapSelectContainer.append(loading);
  main.append(mapSelectContainer);

  setTimeout(() => {
    loading.remove();
    const spaceWaldoContainer = document.createElement('div');
    const spaceWaldoLabel = document.createElement('p');
    const iceWaldoContainer = document.createElement('div');
    const iceWaldoLabel = document.createElement('p');

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
    mapSelectContainer.addEventListener('click', handleMapLoading);
  }, 2000);
};

export default renderMapSelect;
