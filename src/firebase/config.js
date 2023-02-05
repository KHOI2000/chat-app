import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

// var firebaseConfig = {
//   apiKey: 'AIzaSyBRpDZ63mVfrzmzTjHFjRssP4cOvw_jc04',
//   authDomain: 'chat-app-c975a.firebaseapp.com',
//   projectId: 'chat-app-c975a',
//   storageBucket: 'chat-app-c975a.appspot.com',
//   messagingSenderId: '942648297216',
//   appId: '1:942648297216:web:d8c4321ba778c8808f95e5',
//   measurementId: 'G-01WLMKYFFM',
// };
const firebaseConfig = {
  apiKey: "AIzaSyAfBheX88tArs6P8XkLpwEgYHC5AbBawkk",
  authDomain: "chat-app-5f22a.firebaseapp.com",
  projectId: "chat-app-5f22a",
  storageBucket: "chat-app-5f22a.appspot.com",
  messagingSenderId: "581821768815",
  appId: "1:581821768815:web:e5385d4e2564a7515a199a",
  measurementId: "G-PWY075XBJM"
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
