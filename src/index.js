import './styles/meyer-reset.css';
import './styles/index.css';
import { body, main, header } from './modules/globals';
import mapSelect from './modules/mapSelect';
import handleMainLoading from './modules/handleMainLoading';

body.append(main);
mapSelect();

header.addEventListener('click', handleMainLoading);
