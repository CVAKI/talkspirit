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
//---------------------------------------------------------------test
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


// Logout button logic
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      signOut(auth)
        .then(() => {
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error("Logout failed:", error);
        });
    });
  }
});
