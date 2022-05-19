import { main } from './globals';

const renderBoundaries = (pX, rX, tX, pY, rY, tY) => {
  const bound = document.createElement('div');
  bound.className = 'boundary';
  bound.style.left = `${(pX * (1 - tX) + rX).toString()}px`;
  bound.style.top = `${(pY * (1 - tY) + rY).toString()}px`;
  bound.style.width = `${(
    pX * (1 + tX) +
    rX -
    (pX * (1 - tX) + rX)
  ).toString()}px`;
  bound.style.height = `${(
    pY * (1 + tY) +
    rY -
    (pY * (1 - tY) + rY)
  ).toString()}px`;
  main.append(bound);
};

export default renderBoundaries;
