export const body = document.getElementsByTagName('body')[0];
export const header = document.getElementsByTagName('header')[0];
export const main = document.getElementsByClassName('main')[0];
export const mapContainer = document.getElementsByClassName('map-container');
export const info = document.getElementsByClassName('info');
export const currentMap = document.getElementsByClassName('current-map');
export const mapConfig = [
  {
    literalName: 'space-waldo',
    properName: 'Space Waldo',
  },
  {
    literalName: 'ice-waldo',
    properName: 'Ice Waldo',
  },
  {
    literalName: 'beach-waldo',
    properName: 'Beach Waldo',
  },
  {
    literalName: 'fruit-waldo',
    properName: 'Fruit Waldo',
  },
  {
    literalName: 'holly-waldo',
    properName: 'Holly Waldo',
  },
  {
    literalName: 'olympic-waldo',
    properName: 'Olympic Waldo',
  },
];
export const gameState = {
  currentMap: null,
  timer: 0,
  foundCount: [],
  toFindCount: 0,
  gameInProgress: false,
};
