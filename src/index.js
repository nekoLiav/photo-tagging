import './styles/meyer-reset.css';
import './styles/index.css';
import { body, main } from './modules/globals';
import mapSelect from './modules/mapSelect';

body.append(main);
mapSelect();
