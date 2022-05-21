import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import firebaseConfig from './firebase-config';
import { mapConfig } from '../modules/globals';

const firebaseLbAdd = async (name, date, time, map) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const metadata = mapConfig.filter(
    (element) => Object.keys(element)[0] === map
  );
  await updateDoc(doc(db, 'leaderboards', 'maps'), {
    [map]: {
      leaders: arrayUnion({ name, date, time }),
      metadata: { name: metadata[0][map].name },
    },
  });
};

export default firebaseLbAdd;
