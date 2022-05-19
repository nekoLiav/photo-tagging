import firebaseLbGet from '../firebase/firebaseLbGet';
import { main } from './globals';

const renderLeaderboard = async () => {
  main.childNodes.forEach((child) => child.remove());

  const leaderboardContainer = document.createElement('div');
  leaderboardContainer.className = 'leaderboard-container';
  const leaderboard = document.createElement('div');
  leaderboard.className = 'leaderboard';

  leaderboardContainer.append(leaderboard);
  main.append(leaderboardContainer);

  const leaders = await firebaseLbGet();

  leaders.spaceWaldo.forEach((leader) => {
    const leaderContainer = document.createElement('div');
    leaderContainer.className = 'leader-container';
    const leaderName = document.createElement('p');
    leaderName.className = 'leader-name';
    leaderName.textContent = `Name: ${leader.name}`;
    const leaderTime = document.createElement('p');
    leaderTime.className = 'leader-time';
    leaderTime.textContent = `Time (seconds): ${leader.time}`;

    leaderContainer.append(leaderName, leaderTime);
    leaderboard.append(leaderContainer);
  });
};

export default renderLeaderboard;
