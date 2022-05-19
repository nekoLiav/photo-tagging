import { main } from './globals';
import renderSpaceWaldo from './renderSpaceWaldo';
import handleMapLoading from './handleMapLoading';

const mapSelect = () => {
  const mapSelectContainer = document.createElement('div');
  const spaceWaldoContainer = document.createElement('div');
  const spaceWaldoLabel = document.createElement('p');
  const spaceWaldo = renderSpaceWaldo();

  mapSelectContainer.className = 'map-select-container';
  spaceWaldoLabel.textContent = 'Space Waldo';
  spaceWaldoContainer.className = 'map-selection';

  spaceWaldoContainer.append(spaceWaldo, spaceWaldoLabel);
  mapSelectContainer.append(spaceWaldoContainer);
  main.append(mapSelectContainer);
  mapSelectContainer.addEventListener('click', handleMapLoading);
};

export default mapSelect;
