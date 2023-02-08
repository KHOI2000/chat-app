import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDKrvL0CPHW883CCX6vdnB0pxKxiQ5Klpo",
  authDomain: "chat-app-5b2ff.firebaseapp.com",
  projectId: "chat-app-5b2ff",
  storageBucket: "chat-app-5b2ff.appspot.com",
  messagingSenderId: "518710347361",
  appId: "1:518710347361:web:d99afb21cfc17634268c20",
  measurementId: "G-EVSRZM1R8C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
