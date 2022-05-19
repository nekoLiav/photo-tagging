import spaceWaldoCrop from '../assets/maps/space-waldo-crop.jpg';

const renderSpaceWaldo = () => {
  const spaceWaldoImg = new Image();
  spaceWaldoImg.src = spaceWaldoCrop;
  spaceWaldoImg.className = 'space-waldo';
  return spaceWaldoImg;
};

export default renderSpaceWaldo;
