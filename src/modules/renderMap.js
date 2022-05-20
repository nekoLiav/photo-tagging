import spaceWaldo from '../assets/maps/space-waldo.jpg';
import iceWaldo from '../assets/maps/ice-waldo.jpg';
import beachWaldo from '../assets/maps/beach-waldo.jpg';
import fruitWaldo from '../assets/maps/fruit-waldo.jpg';
import hollyWaldo from '../assets/maps/holly-waldo.jpg';
import olympicWaldo from '../assets/maps/olympic-waldo.jpg';

const renderMap = (mapAttribute) => {
  let map;

  if (mapAttribute === 'space-waldo') {
    const spaceWaldoImg = new Image();
    spaceWaldoImg.src = spaceWaldo;
    spaceWaldoImg.setAttribute('data-map', mapAttribute);
    map = spaceWaldoImg;
  } else if (mapAttribute === 'ice-waldo') {
    const iceWaldoImg = new Image();
    iceWaldoImg.src = iceWaldo;
    iceWaldoImg.setAttribute('data-map', mapAttribute);
    map = iceWaldoImg;
  } else if (mapAttribute === 'beach-waldo') {
    const beachWaldoImg = new Image();
    beachWaldoImg.src = beachWaldo;
    beachWaldoImg.setAttribute('data-map', mapAttribute);
    map = beachWaldoImg;
  } else if (mapAttribute === 'holly-waldo') {
    const hollyWaldoImg = new Image();
    hollyWaldoImg.src = hollyWaldo;
    hollyWaldoImg.setAttribute('data-map', mapAttribute);
    map = hollyWaldoImg;
  } else if (mapAttribute === 'fruit-waldo') {
    const fruitWaldoImg = new Image();
    fruitWaldoImg.src = fruitWaldo;
    fruitWaldoImg.setAttribute('data-map', mapAttribute);
    map = fruitWaldoImg;
  } else if (mapAttribute === 'olympic-waldo') {
    const olympicWaldoImg = new Image();
    olympicWaldoImg.src = olympicWaldo;
    olympicWaldoImg.setAttribute('data-map', mapAttribute);
    map = olympicWaldoImg;
  }

  return map;
};

export default renderMap;
