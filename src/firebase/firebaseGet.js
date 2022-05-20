import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebaseConfig from './firebase-config';

const firebaseGet = async (map) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const docRef = doc(db, 'maps', map);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : console.log('No doc found!');
};

export default firebaseGet;
