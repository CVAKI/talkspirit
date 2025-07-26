// js/coin.js
import { auth, db, doc, getDoc, updateDoc } from "./firebase-config.js";

const coinDisplay = document.getElementById("coinCount");
const startBtn = document.getElementById("startChatBtn");

auth.onAuthStateChanged(async (user) => {
  if (!user) return; // already redirected from auth.js if not logged in

  const userRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userRef);
  let coins = userDoc.data().coins;
  coinDisplay.textContent = coins;

  startBtn.onclick = async () => {
    if (coins >= 1000) {
      coins -= 1000;
      await updateDoc(userRef, { coins });
      alert("Matched with random user! (fake for now)");
      coinDisplay.textContent = coins;
    } else {
      alert("Not enough Spirit Coins!");
    }
  };
});

// Logout logic
document.getElementById("logoutBtn").addEventListener("click", () => {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
});
