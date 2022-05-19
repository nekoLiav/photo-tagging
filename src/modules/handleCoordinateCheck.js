import firebaseCoordsGet from '../firebase/firebaseCoordsGet';
import mapConfig from './mapConfig';

const handleCoordinateCheck = async (mapClickEvent) => {
  let found;
  if (mapClickEvent.target.classList.contains('current-map')) {
    const rPos = await firebaseCoordsGet();

    const rect = mapClickEvent.target.getBoundingClientRect();

    // click area tolerances, percentage offset
    const wTolX = mapConfig.spaceWaldo.tolerance.waldo.x;
    const wTolY = mapConfig.spaceWaldo.tolerance.waldo.y;
    const oTolX = mapConfig.spaceWaldo.tolerance.odlaw.x;
    const oTolY = mapConfig.spaceWaldo.tolerance.odlaw.y;

    // add rect.x/y to these to correctly offset within map
    const wPosX = rect.width * rPos.waldo.x;
    const wPosY = rect.height * rPos.waldo.y;
    const oPosX = rect.width * rPos.odlaw.x;
    const oPosY = rect.height * rPos.odlaw.y;

    // click is within horizontal tolerance
    if (
      mapClickEvent.x > wPosX * (1 - wTolX) + rect.x &&
      mapClickEvent.x < wPosX * (1 + wTolX) + rect.x
    ) {
      // click is within vertical tolerance
      if (
        mapClickEvent.y > wPosY * (1 - wTolY) + rect.y &&
        mapClickEvent.y < wPosY * (1 + wTolY) + rect.y
      ) {
        found = {
          character: 'Waldo',
          pX: wPosX,
          rX: rect.x,
          tX: wTolX,
          pY: wPosY,
          rY: rect.y,
          tY: wTolY,
        };
      }
      // click is within horizontal tolerance
    } else if (
      mapClickEvent.x > oPosX * (1 - oTolX) + rect.x &&
      mapClickEvent.x < oPosX * (1 + oTolX) + rect.x
    ) {
      // click is within vertical tolerance
      if (
        mapClickEvent.y > oPosY * (1 - oTolY) + rect.y &&
        mapClickEvent.y < oPosY * (1 + oTolY) + rect.y
      ) {
        found = {
          character: 'Odlaw',
          pX: oPosX,
          rX: rect.x,
          tX: oTolX,
          pY: oPosY,
          rY: rect.y,
          tY: oTolY,
        };
      }
    }
  }
  return found;
};

export default handleCoordinateCheck;
