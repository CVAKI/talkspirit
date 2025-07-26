// js/auth.js
import { auth, db, GoogleAuthProvider, signInWithPopup, doc, getDoc, setDoc } from "./firebase-config.js";

const provider = new GoogleAuthProvider();
const loginBtn = document.getElementById('loginBtn');

if (loginBtn) {
  loginBtn.onclick = async () => {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if user is new
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      await setDoc(userRef, {
        coins: 1000,
        name: user.displayName,
        email: user.email
      });
    }
    window.location.href = "dashboard.html";
  };
}
