import { mapContainer } from './globals';

const renderBoundaries = (pX, tX, pY, tY) => {
  const bound = document.createElement('div');
  bound.className = 'boundary';
  bound.style.left = `${(pX * (1 - tX)).toString()}px`;
  bound.style.top = `${(pY * (1 - tY)).toString()}px`;
  bound.style.width = `${(pX * (1 + tX) - pX * (1 - tX)).toString()}px`;
  bound.style.height = `${(pY * (1 + tY) - pY * (1 - tY)).toString()}px`;
  mapContainer[0].append(bound);
};

export default renderBoundaries;
