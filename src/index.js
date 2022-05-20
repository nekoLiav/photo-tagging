import './styles/meyer-reset.css';
import './styles/index.css';
import { body, main } from './modules/globals';
import renderMapSelect from './modules/renderMapSelect';

const homeButton = document.createElement('div');
homeButton.className = 'home-button';
homeButton.textContent = 'Home';

homeButton.addEventListener('click', renderMapSelect);

body.append(main, homeButton);
renderMapSelect();
