import { main } from './globals';
import handleMapLoading from './handleMapLoading';

const mapSelect = () => {
  const mapSelectContainer = document.createElement('div');
  const spaceWaldoContainer = document.createElement('div');
  const spaceWaldoLabel = document.createElement('p');
  const iceWaldoContainer = document.createElement('div');
  const iceWaldoLabel = document.createElement('p');

  mapSelectContainer.className = 'map-select-container';
  spaceWaldoContainer.className = 'map-select';
  spaceWaldoLabel.textContent = 'Space Waldo';
  iceWaldoContainer.className = 'map-select';
  iceWaldoLabel.textContent = 'Ice Waldo';

  spaceWaldoContainer.append(spaceWaldoLabel);
  iceWaldoContainer.append(iceWaldoLabel);
  mapSelectContainer.append(iceWaldoContainer, spaceWaldoContainer);
  main.append(mapSelectContainer);
  mapSelectContainer.addEventListener('click', handleMapLoading);
};

export default mapSelect;
