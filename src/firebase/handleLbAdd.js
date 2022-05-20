import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import firebaseConfig from './firebase-config';

const firebaseLbAdd = async (name, date, time, map) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  await updateDoc(doc(db, 'leaderboards', 'maps'), {
    [map]: { leaders: arrayUnion({ name, date, time }) },
  });
};

export default firebaseLbAdd;
