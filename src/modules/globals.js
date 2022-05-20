export const body = document.getElementsByTagName('body')[0];
export const header = document.getElementsByTagName('header')[0];
export const main = document.getElementsByClassName('main')[0];
export const mapContainer = document.getElementsByClassName('map-container');
export const info = document.getElementsByClassName('info');
export const currentMap = document.getElementsByClassName('current-map');
export const mapConfig = [
  {
    'space-waldo': {
      name: 'Space Waldo',
    },
  },
  {
    'ice-waldo': {
      name: 'Ice Waldo',
    },
  },
  {
    'beach-waldo': {
      name: 'Beach Waldo',
    },
  },
  {
    'fruit-waldo': {
      name: 'Fruit Waldo',
    },
  },
  {
    'holly-waldo': {
      name: 'Holly Waldo',
    },
  },
  {
    'olympic-waldo': {
      name: 'Olympic Waldo',
    },
  },
];
export const gameState = {
  currentMap: null,
  timer: 0,
  foundCount: [],
  toFindCount: 0,
  gameInProgress: false,
};
