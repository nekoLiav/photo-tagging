import { gameState, currentMap } from './globals';

const handleCoordinateCheck = async (
  mapClickEvent,
  menuClickEvent,
  serverData
) => {
  let found;
  if (mapClickEvent.target.classList.contains('current-map')) {
    const rect = currentMap[0].getBoundingClientRect();
    const iterableServerData = Object.entries(serverData);
    gameState.toFindCount = iterableServerData.length;
    const key = menuClickEvent.target.getAttribute('data-key');
    let tolerances;
    let coords;
    iterableServerData.forEach((entry) => {
      if (entry[0] === key) {
        tolerances = entry[1].tolerances;
        coords = entry[1].coords;
      }
    });

    // click area tolerances, percentage offset
    const tX = tolerances.x;
    const tY = tolerances.y;

    // locate key within image via percentage offset
    const pX = rect.width * coords.x;
    const pY = rect.height * coords.y;

    // click is within horizontal tolerance
    if (
      mapClickEvent.x > pX * (1 - tX) + rect.x &&
      mapClickEvent.x < pX * (1 + tX) + rect.x
    ) {
      // click is within vertical tolerance
      if (
        mapClickEvent.y > pY * (1 - tY) + rect.y &&
        mapClickEvent.y < pY * (1 + tY) + rect.y
      ) {
        found = {
          key,
          pX,
          tX,
          pY,
          tY,
        };
      }
    }
  }
  return found;
};

export default handleCoordinateCheck;
