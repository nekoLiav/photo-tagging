import { main, mapConfig } from './globals';
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
    mapConfig.forEach((element) => {
      const key = Object.keys(element);
      const { name } = element[key];

      const mapSelector = document.createElement('div');
      mapSelector.setAttribute('data-map', key);
      mapSelector.className = 'map-select';
      mapSelector.textContent = name;

      mapSelectContainer.append(mapSelector);
    });

    mapSelectContainer.addEventListener('click', handleMapLoading);
  }, 0);
};

export default renderMapSelect;
