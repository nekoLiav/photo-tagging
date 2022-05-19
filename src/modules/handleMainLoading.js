import { main, gameState } from './globals';
import mapSelect from './mapSelect';

const handleMainLoading = (e) => {
  if (
    e.target.tagName === 'HEADER' ||
    e.target.parentNode.tagName === 'HEADER'
  ) {
    main.childNodes.forEach((child) => child.remove());
    mapSelect();
    gameState.foundWaldo = false;
    gameState.foundOdlaw = false;
    gameState.timer = 0;
    gameState.gameOver = false;
  }
};

export default handleMainLoading;
