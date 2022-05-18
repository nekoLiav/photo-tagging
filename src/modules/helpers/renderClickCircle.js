import { main } from '../globals';

const renderClickCircle = (x, y) => {
  const clickBox = document.createElement('div');
  clickBox.className = 'click-box';
  clickBox.style.left = `${x.toString()}px`;
  clickBox.style.top = `${y.toString()}px`;
  main.append(clickBox);
  setTimeout(() => {
    clickBox.remove();
  }, 2000);
};

export default renderClickCircle;
