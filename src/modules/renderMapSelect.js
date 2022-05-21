import { main, mapConfig } from './globals';
import handleMapLoading from './handleMapLoading';
import resetGameState from './resetGameState';
import renderLeaderboardSelect from './renderLeaderboardSelect';

const renderMapSelect = () => {
  resetGameState();
  main.childNodes.forEach((child) => child.remove());

  const mapSelectorsHeader = document.createElement('p');
  const mapSelectContainer = document.createElement('div');
  const leaderboardButton = document.createElement('div');
  const loading = document.createElement('div');

  mapSelectorsHeader.className = 'selector-header';
  mapSelectContainer.className = 'map-select-container';
  leaderboardButton.className = 'leaderboard-button';
  loading.className = 'loading';

  mapSelectorsHeader.textContent = 'Maps';
  loading.textContent = 'Loading maps, please wait...';
  leaderboardButton.textContent = 'View Leaderboards';

  mapSelectContainer.append(leaderboardButton, loading);
  main.append(mapSelectContainer);

  leaderboardButton.addEventListener('click', renderLeaderboardSelect);

  setTimeout(() => {
    loading.remove();
    mapSelectContainer.append(mapSelectorsHeader);
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
  }, 2000);
};

export default renderMapSelect;
