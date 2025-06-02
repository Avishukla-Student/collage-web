

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Show user info if logged in



window.addEventListener("scroll", function () {
  const userFullName = localStorage.getItem("userFullName");
  if (!userFullName) {
    alert("Please login first to access this page.");
    // Optionally, redirect to login page:
    // window.location.href = "login.html";
    // Remove the event listener after first alert to avoid multiple popups
    window.removeEventListener("scroll", arguments.callee);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Handle session end or cleanup
  
const userFullName = localStorage.getItem("userFullName");
const userInfoContainer = document.getElementById("user-info-container");
const userNameElem = document.getElementById("user-name");
const loginLink = document.getElementById("login-link");
const logoutText = document.getElementById("logout-text");

if (
  userFullName &&
  userInfoContainer &&
  userNameElem &&
  loginLink &&
  logoutText
) {
  userInfoContainer.style.display = "flex";
  userNameElem.textContent = userFullName;
  console.log(userNameElem.textContent);
  loginLink.style.display = "none";

  userNameElem.addEventListener("click", function (e) {
    e.stopPropagation();
    logoutText.style.display =
      logoutText.style.display === "inline" ? "none" : "inline";
  });

  logoutText.addEventListener("click", function (e) {
    e.stopPropagation();
    localStorage.removeItem("userFullName");
    userInfoContainer.style.display = "none";
    loginLink.style.display = "inline";
    logoutText.style.display = "none";
    
  });

  // Hide logout text when clicking outside
  document.addEventListener("click", function () {
    logoutText.style.display = "none";
  });
}
});
