import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebase = async () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyAoFfaGcIZ6nBX6fak0GXNCFAVpns6UU5A',
    authDomain: 'photo-tagging-36de1.firebaseapp.com',
    projectId: 'photo-tagging-36de1',
    storageBucket: 'photo-tagging-36de1.appspot.com',
    messagingSenderId: '1052950635931',
    appId: '1:1052950635931:web:c12ad9c683436b1b15ed3e',
  };

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
