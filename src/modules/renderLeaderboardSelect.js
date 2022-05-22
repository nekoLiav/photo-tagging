import { main, mapConfig } from './globals';
import renderLeaderboard from './renderLeaderboard';

const renderLeaderboardSelect = () => {
  main.childNodes.forEach((child) => child.remove());

  const leaderboardSelectorsHeader = document.createElement('p');
  const leaderboardSelectors = document.createElement('div');
  const loading = document.createElement('div');

  leaderboardSelectorsHeader.className = 'selector-header';
  leaderboardSelectors.className = 'leaderboard-selectors';
  loading.className = 'loading';

  leaderboardSelectorsHeader.textContent = 'Leaderboards';
  loading.textContent = 'Loading leaderboards, please wait...';

  leaderboardSelectors.append(loading);
  main.append(leaderboardSelectors);

  setTimeout(() => {
    loading.remove();
    leaderboardSelectors.append(leaderboardSelectorsHeader);
    mapConfig.forEach(async (element) => {
      const leaderboardSelector = document.createElement('div');
      leaderboardSelector.className = 'leaderboard-selector';
      leaderboardSelector.textContent = element.properName;
      leaderboardSelector.addEventListener('click', () =>
        renderLeaderboard(element.literalName)
      );
      leaderboardSelectors.append(leaderboardSelector);
    });
  }, 1000);
};

export default renderLeaderboardSelect;
