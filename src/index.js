import './styles/meyer-reset.css';
import './styles/index.css';
import { body, main } from './modules/globals';
import renderMapSelect from './modules/renderMapSelect';
import renderLeaderboard from './modules/renderLeaderboard';

const homeButton = document.createElement('div');
homeButton.className = 'home-button';
homeButton.textContent = 'Home';

homeButton.addEventListener('click', renderMapSelect);

body.append(main, homeButton);
renderLeaderboard();
