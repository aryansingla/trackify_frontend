import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFGtHqC4eAzlV-Y9J2OMVIe5PLRytaH5M",
  authDomain: "trackify-19da2.firebaseapp.com",
  projectId: "trackify-19da2",
  storageBucket: "trackify-19da2.appspot.com",
  messagingSenderId: "938504417860",
  appId: "1:938504417860:web:5b0353057f9c811e1f4211",
  measurementId: "G-PC4ENQX8GR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {app,auth,provider};
