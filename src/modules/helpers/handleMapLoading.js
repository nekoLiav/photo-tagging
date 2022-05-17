import { main } from '../globals';
import renderSpaceWaldo from './renderSpaceWaldo';

const handleMapLoading = (e) => {
  if (e.target.tagName === 'IMG') {
    main.childNodes.forEach((child) => child.remove());
    if (e.target.className === 'space-waldo') {
      const spaceWaldo = renderSpaceWaldo();
      main.append(spaceWaldo);
    }
  }
};

export default handleMapLoading;
