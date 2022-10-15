// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkX6yPvNBgWkkdX2TA31SoF02eLIkqIec",
  authDomain: "crud-diplomado-d7d09.firebaseapp.com",
  projectId: "crud-diplomado-d7d09",
  storageBucket: "crud-diplomado-d7d09.appspot.com",
  messagingSenderId: "959617153850",
  appId: "1:959617153850:web:d80744c4e6969e4762ee03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}
