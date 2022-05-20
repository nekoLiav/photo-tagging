import { currentMap } from './globals';
import renderBoundaries from './renderBoundaries';

const renderTestBoundaries = () => {
  const rect = currentMap[0].getBoundingClientRect();
  const pX = rect.width * 0.615;
  const tX = 0.06;
  const pY = rect.height * 0.88;
  const tY = 0.08;
  renderBoundaries(pX, tX, pY, tY);
};

export default renderTestBoundaries;
