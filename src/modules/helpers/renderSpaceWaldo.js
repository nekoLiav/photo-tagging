import spaceWaldo from '../../assets/maps/space-waldo.jpg';

const renderSpaceWaldo = () => {
  const spaceWaldoImg = new Image();
  spaceWaldoImg.src = spaceWaldo;
  spaceWaldoImg.className = 'space-waldo';
  return spaceWaldoImg;
};

export default renderSpaceWaldo;
