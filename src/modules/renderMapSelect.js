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
      const mapSelector = document.createElement('div');
      mapSelector.setAttribute('data-map', element.literalName);
      mapSelector.className = 'map-select';
      mapSelector.textContent = element.properName;
      mapSelectContainer.append(mapSelector);
    });

    mapSelectContainer.addEventListener('click', handleMapLoading);
  }, 1000);
};

export default renderMapSelect;
