import { auth, db, onAuthStateChanged, doc, getDoc, updateDoc } from "./firebase-config.js";

const coinDisplay = document.getElementById("coinCount");
const startBtn = document.getElementById("startChatBtn");
const userInfoEl = document.getElementById("userInfo");
const userPhotoEl = document.getElementById("userPhoto");

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  // Show user name/email
  const nameOrEmail = user.displayName || user.email;
  userInfoEl.textContent = `Logged in as: ${nameOrEmail}`;

  // Show user photo if available
  if (user.photoURL) {
    userPhotoEl.src = user.photoURL;
    userPhotoEl.style.display = "inline-block";
  }

  // Load and display coins
  const userRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userRef);
  let coins = userDoc.data().coins || 0;
  coinDisplay.textContent = coins;

  // Start Chat button logic
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
