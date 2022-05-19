import { main } from '../globals';

const renderBoundaries = (posX, rectX, tolX, posY, rectY, tolY) => {
  const clickCircle = document.createElement('div');
  clickCircle.className = 'click-circle';
  clickCircle.style.left = `${(posX * (1 - tolX) + rectX).toString()}px`;
  clickCircle.style.top = `${(posY * (1 - tolY) + rectY).toString()}px`;
  clickCircle.style.width = `${(
    posX * (1 + tolX) +
    rectX -
    (posX * (1 - tolX) + rectX)
  ).toString()}px`;
  clickCircle.style.height = `${(
    posY * (1 + tolY) +
    rectY -
    (posY * (1 - tolY) + rectY)
  ).toString()}px`;
  main.append(clickCircle);
};

export default renderBoundaries;
