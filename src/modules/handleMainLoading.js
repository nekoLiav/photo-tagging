import { main } from './globals';
import mapSelect from './mapSelect';

const handleMainLoading = (e) => {
  if (
    e.target.tagName === 'HEADER' ||
    e.target.parentNode.tagName === 'HEADER'
  ) {
    main.childNodes.forEach((child) => child.remove());
    mapSelect();
  }
};

export default handleMainLoading;
