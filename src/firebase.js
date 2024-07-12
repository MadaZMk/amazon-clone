// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// initialize the firebase app with firebase config
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the database with firestore(), which is the real time db in firebase
const db = firebaseApp.firestore();

// set up the auth(), which give us the variable we need for sign in, sign out etc.
const auth = firebase.auth();

// export them to re-use in Login.js
export { db, auth };


//! important
// First do global install of Firebase  "npm install -g firebase-tools"
// Second do                            "npm install firebase"
