

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {

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
