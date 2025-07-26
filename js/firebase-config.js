// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔁 Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCMYEymIWJN56e61fpJiSrJHIyEmckkaRk",
  authDomain: "talkspirit-cva.firebaseapp.com",
  projectId: "talkspirit-cva",
  storageBucket: "talkspirit-cva.firebasestorage.app",
  messagingSenderId: "343539982634",
  appId: "1:343539982634:web:bb80a78cb626be867d3e53",
  measurementId: "G-T2NS3C8ZS2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, doc, getDoc, setDoc, updateDoc };
