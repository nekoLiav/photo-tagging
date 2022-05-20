import { currentMap } from './globals';
import renderBoundaries from './renderBoundaries';

const renderTestBoundaries = () => {
  const rect = currentMap[0].getBoundingClientRect();
  const pX = rect.width * 0.855;
  const tX = 0.05;
  const pY = rect.height * 0.74;
  const tY = 0.1;
  renderBoundaries(pX, tX, pY, tY);
};

export default renderTestBoundaries;
