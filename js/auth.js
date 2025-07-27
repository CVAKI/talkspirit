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

// coinnn
import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    const userInfoEl = document.getElementById("userInfo");

    if (user) {
      const nameOrEmail = user.displayName || user.email;
      if (userInfoEl) {
        userInfoEl.textContent = `${nameOrEmail}`;
      }
    } else {
      if (userInfoEl) {
        userInfoEl.textContent = "Not logged in";
      }
      window.location.href = "index.html";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    console.log("Logout button found"); // ✅ Debug line

    logoutBtn.addEventListener("click", () => {
      console.log("Logout button clicked"); // ✅ Debug line
      signOut(auth)
        .then(() => {
          console.log("User signed out"); // ✅ Debug line
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error("Logout failed:", error);
        });
    });
  } else {
    console.warn("Logout button not found!");
  }
});
