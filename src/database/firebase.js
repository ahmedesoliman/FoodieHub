// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFHK7zHyoqHZd7rvTGYPYy48tzNLLEsic",
  authDomain: "streetfood-9d708.firebaseapp.com",
  projectId: "streetfood-9d708",
  storageBucket: "streetfood-9d708.appspot.com",
  messagingSenderId: "47129067715",
  appId: "1:47129067715:web:1b8c07d03ad3b171b82276",
  measurementId: "G-EQ52F2NB77"
};

// Initialize Firebase
// Use this to initialize the firebase App
firebase.initializeApp(firebaseConfig);

export default firebase;
