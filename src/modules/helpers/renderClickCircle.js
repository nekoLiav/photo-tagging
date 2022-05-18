import { main } from '../globals';

const renderClickCircle = (x, y) => {
  const clickCircle = document.createElement('div');
  clickCircle.className = 'click-circle';
  clickCircle.style.left = `${x.toString()}px`;
  clickCircle.style.top = `${y.toString()}px`;
  main.append(clickCircle);
  setTimeout(() => {
    clickCircle.remove();
  }, 2000);
};

export default renderClickCircle;
