import { main, mapConfig } from './globals';
import firebaseLbGet from '../firebase/firebaseLbGet';
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
      const leaderboard = await firebaseLbGet(Object.keys(element));
      const leaderboardSelector = document.createElement('div');
      leaderboardSelector.className = 'leaderboard-selector';
      leaderboardSelector.textContent = leaderboard.metadata.name;
      leaderboardSelector.addEventListener('click', () =>
        renderLeaderboard(Object.keys(element)[0])
      );
      leaderboardSelectors.append(leaderboardSelector);
    });
  }, 2000);
};

export default renderLeaderboardSelect;
