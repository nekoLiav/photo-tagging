import firebase from '../../firebase/firebase';
import renderClickCircle from './renderClickCircle';

const handleCoordinateCheck = async (mapClickEvent) => {
  let found;
  if (mapClickEvent.target.classList.contains('current-map')) {
    const serverData = await firebase();
    const rect = mapClickEvent.target.getBoundingClientRect();
    const waldoToleranceX = 0.05;
    const waldoToleranceY = 0.15;
    const odlawToleranceX = 0.2;
    const odlawToleranceY = 0.1;
    const localWaldoPosX = rect.width * serverData.waldo.x;
    const localWaldoPosY = rect.height * serverData.waldo.y;
    const localOdlawPosX = rect.width * serverData.odlaw.x;
    const localOdlawPosY = rect.height * serverData.odlaw.y;

    renderClickCircle(localWaldoPosX + rect.x, localWaldoPosY + rect.y);
    renderClickCircle(
      localWaldoPosX * (1 + waldoToleranceX) + rect.x,
      localWaldoPosY * (1 + waldoToleranceY) + rect.y
    );
    renderClickCircle(
      localWaldoPosX * (1 - waldoToleranceX) + rect.x,
      localWaldoPosY * (1 - waldoToleranceY) + rect.y
    );

    renderClickCircle(localOdlawPosX + rect.x, localOdlawPosY + rect.y);
    renderClickCircle(
      localOdlawPosX * (1 + odlawToleranceX) + rect.x,
      localOdlawPosY * (1 + odlawToleranceY) + rect.y
    );
    renderClickCircle(
      localOdlawPosX * (1 - odlawToleranceX) + rect.x,
      localOdlawPosY * (1 - odlawToleranceY) + rect.y
    );

    if (
      mapClickEvent.x > localWaldoPosX * (1 - waldoToleranceX) + rect.x &&
      mapClickEvent.x < localWaldoPosX * (1 + waldoToleranceY) + rect.y
    ) {
      if (
        mapClickEvent.y > localWaldoPosY * (1 - waldoToleranceX) + rect.x &&
        mapClickEvent.y < localWaldoPosY * (1 + waldoToleranceY) + rect.y
      ) {
        found = 'Waldo';
      }
    } else if (
      mapClickEvent.x > localOdlawPosX * (1 - odlawToleranceX) + rect.x &&
      mapClickEvent.x < localOdlawPosX * (1 + odlawToleranceY) + rect.y
    ) {
      if (
        mapClickEvent.y > localOdlawPosY * (1 - odlawToleranceX) + rect.x &&
        mapClickEvent.y < localOdlawPosY * (1 + odlawToleranceY) + rect.y
      ) {
        found = 'Odlaw';
      }
    }
  }
  return found;
};

export default handleCoordinateCheck;
