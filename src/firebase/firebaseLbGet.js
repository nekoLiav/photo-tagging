import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebaseConfig from './firebase-config';

const firebaseLbGet = async () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const docRef = doc(db, 'leaderboards', 'maps');
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? docSnap.data() : console.log('No doc found!');
};

export default firebaseLbGet;
