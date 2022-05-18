import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const firebase = async () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // function to modify individual database entries
  // await setDoc(
  //   doc(db, 'maps', 'space-waldo'),
  //   {
  //     waldo: {
  //       x: 0.631,
  //       y: 0.325,
  //     },
  //     odlaw: {
  //       x: 0.11,
  //       y: 0.445,
  //     },
  //   },
  //   { merge: true }
  // );

  const docRef = doc(db, 'maps', 'space-waldo');
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? docSnap.data() : console.log('No doc found!');
};

export default firebase;
