// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjyq81nNDoGBNs1nG0ujU-3Vliyn0o2oI",
  authDomain: "clone-practice-6f062.firebaseapp.com",
  projectId: "clone-practice-6f062",
  storageBucket: "clone-practice-6f062.appspot.com",
  messagingSenderId: "1033540927995",
  appId: "1:1033540927995:web:9258b4e4c7141b4d4f4b5e",
  measurementId: "G-B6QYVT11FC",
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
