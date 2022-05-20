import firebaseLbGet from '../firebase/firebaseLbGet';
import formatTime from './formatTime';
import { main, gameState } from './globals';

const renderLeaderboard = async () => {
  main.childNodes.forEach((child) => child.remove());

  gameState.currentMap = 'space-waldo';

  const leaderboardContainer = document.createElement('div');
  leaderboardContainer.className = 'leaderboard-container';

  const leaderboardMapName = document.createElement('p');
  leaderboardMapName.className = 'leaderboard-map-name';

  const leaderboard = document.createElement('table');
  leaderboard.className = 'leaderboard';

  const leaderboardHeaderContainer = document.createElement('tr');
  leaderboardHeaderContainer.className = 'leaderboard-headers';
  const leaderboardNameHeader = document.createElement('th');
  leaderboardNameHeader.textContent = 'Name';
  const leaderboardDateHeader = document.createElement('th');
  leaderboardDateHeader.textContent = 'Date';
  const leaderboardTimeHeader = document.createElement('th');
  leaderboardTimeHeader.textContent = 'Time';

  leaderboardHeaderContainer.append(
    leaderboardNameHeader,
    leaderboardDateHeader,
    leaderboardTimeHeader
  );
  leaderboard.append(leaderboardHeaderContainer);
  leaderboardContainer.append(leaderboardMapName, leaderboard);
  main.append(leaderboardContainer);

  const mapInfo = await firebaseLbGet(gameState.currentMap);

  leaderboardMapName.textContent = mapInfo.metadata.name;

  // leaders
  mapInfo.leaders.forEach((leader) => {
    const leaderContainer = document.createElement('tr');
    const leaderName = document.createElement('td');
    const leaderDate = document.createElement('td');
    const leaderTime = document.createElement('td');
    leaderContainer.className = 'leader-container';
    leaderName.className = 'leader-name';
    leaderDate.className = 'leader-date';
    leaderTime.className = 'leader-time';

    leaderName.textContent = leader.name;
    leaderDate.textContent = leader.date.substring(0, 10);
    leaderTime.textContent = formatTime(leader.time);

    leaderContainer.append(leaderName, leaderDate, leaderTime);
    leaderboard.append(leaderContainer);
  });
};

export default renderLeaderboard;
