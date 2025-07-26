// js/auth.js

import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Page Protection Logic
onAuthStateChanged(auth, (user) => {
  const currentPage = location.pathname;

  const isLoginPage = currentPage.includes("index.html") || currentPage === "/";
  const isProtectedPage = !isLoginPage;

  if (!user && isProtectedPage) {
    // Not logged in and trying to access protected page
    window.location.href = "index.html";
  }

  // Optionally show/hide login/logout buttons here if needed
});

// Logout button (if you have one)
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
      window.location.href = "index.html";
    });
  });
}
