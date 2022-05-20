import { gameState } from './globals';

const resetGameState = () => {
  gameState.currentMap = null;
  gameState.timer = 0;
  gameState.foundCount = [];
  gameState.toFindCount = 0;
  gameState.gameInProgress = false;
};

export default resetGameState;
