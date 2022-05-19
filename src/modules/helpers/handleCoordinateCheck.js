import firebase from '../../firebase/firebase';
import mapConfig from '../mapConfig';

const handleCoordinateCheck = async (mapClickEvent) => {
  let found;
  if (mapClickEvent.target.classList.contains('current-map')) {
    const serverData = await firebase();

    const rect = mapClickEvent.target.getBoundingClientRect();

    // click area tolerances, percentage offset
    const wtx = mapConfig.spaceWaldo.tolerance.waldo.x;
    const wty = mapConfig.spaceWaldo.tolerance.waldo.y;
    const otx = mapConfig.spaceWaldo.tolerance.odlaw.x;
    const oty = mapConfig.spaceWaldo.tolerance.odlaw.y;

    // add rect.x/y to these to correctly offset within map
    const localWaldoPosX = rect.width * serverData.waldo.x;
    const localWaldoPosY = rect.height * serverData.waldo.y;
    const localOdlawPosX = rect.width * serverData.odlaw.x;
    const localOdlawPosY = rect.height * serverData.odlaw.y;

    if (
      mapClickEvent.x > localWaldoPosX * (1 - wtx) + rect.x &&
      mapClickEvent.x < localWaldoPosX * (1 + wtx) + rect.x
    ) {
      if (
        mapClickEvent.y > localWaldoPosY * (1 - wty) + rect.y &&
        mapClickEvent.y < localWaldoPosY * (1 + wty) + rect.y
      ) {
        found = {
          character: 'Waldo',
          posX: localWaldoPosX,
          rectX: rect.x,
          tolX: wtx,
          poxY: localWaldoPosY,
          rectY: rect.y,
          tolY: wty,
        };
      }
    } else if (
      mapClickEvent.x > localOdlawPosX * (1 - otx) + rect.x &&
      mapClickEvent.x < localOdlawPosX * (1 + otx) + rect.x
    ) {
      if (
        mapClickEvent.y > localOdlawPosY * (1 - oty) + rect.y &&
        mapClickEvent.y < localOdlawPosY * (1 + oty) + rect.y
      ) {
        found = {
          character: 'Odlaw',
          posX: localOdlawPosX,
          rectX: rect.x,
          tolX: otx,
          poxY: localOdlawPosY,
          rectY: rect.y,
          tolY: oty,
        };
      }
    }
  }
  return found;
};

export default handleCoordinateCheck;
