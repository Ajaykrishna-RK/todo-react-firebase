// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCzBFef5OTF2CiXuMYzhP2mvdxhhgy1wgM",
  authDomain: "fir-todo-74529.firebaseapp.com",
  projectId: "fir-todo-74529",
  storageBucket: "fir-todo-74529.appspot.com",
  messagingSenderId: "427829690321",
  appId: "1:427829690321:web:b4790d0d891ff3ad51aaf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


