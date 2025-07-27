import { auth, db, onAuthStateChanged, doc, getDoc, updateDoc } from "./firebase-config.js";

const coinDisplay = document.getElementById("coinCount");
const startBtn = document.getElementById("startChatBtn");
const userInfoEl = document.getElementById("userInfo");

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  // Show user email or display name
  const nameOrEmail = user.displayName || user.email;
  userInfoEl.textContent = `${nameOrEmail}`;

  // Load and display coin count
  const userRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userRef);
  let coins = userDoc.data().coins || 0;
  coinDisplay.textContent = coins;

  // Handle "Start Chat" button
  startBtn.onclick = async () => {
    if (coins >= 1000) {
      coins -= 1000;
      await updateDoc(userRef, { coins });
      coinDisplay.textContent = coins;
      alert("Matched with a random user! (fake for now)");
    } else {
      alert("Not enough Spirit Coins!");
    }
  };
});
