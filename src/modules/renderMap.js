import spaceWaldo from '../assets/maps/space-waldo.jpg';
import iceWaldo from '../assets/maps/ice-waldo.jpg';

const renderMap = (mapAttribute) => {
  let map;

  if (mapAttribute === 'space-waldo') {
    const spaceWaldoImg = new Image();
    spaceWaldoImg.src = spaceWaldo;
    spaceWaldoImg.setAttribute('data-map', 'space-waldo');
    map = spaceWaldoImg;
  } else if (mapAttribute === 'ice-waldo') {
    const iceWaldoImg = new Image();
    iceWaldoImg.src = iceWaldo;
    iceWaldoImg.setAttribute('data-map', 'ice-waldo');
    map = iceWaldoImg;
  }

  return map;
};

export default renderMap;
