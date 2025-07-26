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
