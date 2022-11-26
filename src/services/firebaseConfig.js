import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBE9bbQWKSoyn4PK2JRs2D4SWQyfSsB2OA",
  authDomain: "melcoder-reactjs.firebaseapp.com",
  projectId: "melcoder-reactjs",
  storageBucket: "melcoder-reactjs.appspot.com",
  messagingSenderId: "892897113670",
  appId: "1:892897113670:web:6c5137c43137dd81363c47"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const productosDb = collection(db,"productos")
export const ordenesDb = collection(db, "ordenes")