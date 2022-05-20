import { currentMap } from './globals';
import renderBoundaries from './renderBoundaries';

const renderTestBoundaries = () => {
  const rect = currentMap[0].getBoundingClientRect();
  const pX = rect.width * 0.782;
  const tX = 0.06;
  const pY = rect.height * 0.59;
  const tY = 0.1;
  renderBoundaries(pX, tX, pY, tY);
};

export default renderTestBoundaries;
