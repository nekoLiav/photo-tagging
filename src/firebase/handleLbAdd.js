import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import firebaseConfig from './firebase-config';

const firebaseLbAdd = async (name, time) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // function to modify individual database entries
  await updateDoc(doc(db, 'leaderboards', 'maps'), {
    spaceWaldo: arrayUnion({ name, time }),
  });
};

export default firebaseLbAdd;
