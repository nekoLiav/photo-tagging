import './styles/meyer-reset.css';
import './styles/index.css';

import { body, main, header } from './modules/globals';
import mapSelect from './modules/mapSelect';
import handleMainLoading from './modules/helpers/handleMainLoading';
import firebase from './firebase/firebase';

body.append(main);
mapSelect();
firebase();

header.addEventListener('click', handleMainLoading);
