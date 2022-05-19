import iceWaldo from '../assets/maps/ice-waldo.jpg';

const renderIceWaldo = () => {
  const iceWaldoImg = new Image();
  iceWaldoImg.src = iceWaldo;
  iceWaldoImg.className = 'ice-waldo';
  return iceWaldoImg;
};

export default renderIceWaldo;
