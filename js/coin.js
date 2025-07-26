
import { auth, db, onAuthStateChanged, doc, getDoc, updateDoc } from "./firebase-config.js";

const coinDisplay = document.getElementById("coinCount");
const startBtn = document.getElementById("startChatBtn");

onAuthStateChanged(auth, async user => {
  if (!user) window.location.href = "index.html";

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
  //--------------------------------------------------------------------------------------------------------------2
import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  const userInfoEl = document.getElementById("userInfo");
  if (user) {
    const nameOrEmail = user.displayName || user.email;
    userInfoEl.textContent = `Logged in as: ${nameOrEmail}`;
  } else {
    userInfoEl.textContent = "Not logged in";
  }
});
