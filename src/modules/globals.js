export const body = document.getElementsByTagName('body')[0];
export const header = document.getElementsByTagName('header')[0];
export const main = document.getElementsByClassName('main')[0];
export const info = document.getElementsByClassName('info');
export const currentMap = document.getElementsByClassName('current-map');
export const gameState = {
  foundWaldo: false,
  foundOdlaw: false,
  timer: 0,
  gameOver: false,
};
