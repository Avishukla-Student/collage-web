// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   const slides = document.querySelectorAll('.slides');
//   const dots = document.querySelectorAll('.dot');
//   slides.forEach(slide => slide.style.display = 'none'); // Hide all slides
//   dots.forEach(dot => dot.classList.remove('active')); // Remove active class from all dots
//   slideIndex++;
//   if (slideIndex > slides.length) slideIndex = 1; // Reset to the first slide if at the end
//   slides[slideIndex - 1].style.display = 'block'; // Show the current slide
//   dots[slideIndex - 1].classList.add('active'); // Highlight the current dot
//   setTimeout(showSlides, 4000); // Change slide every 5 seconds
// }

// function changeSlide(n) {
//   slideIndex += n - 1;
//   showSlides();
// }

// function currentSlide(n) {
//   slideIndex = n - 1;
//   showSlides();
// }

function toggleDetails(button) {
  const details = button.previousElementSibling; // Get the <p> element before the button
  if (details.style.display === "none") {
    details.style.display = "block"; // Show details
    button.textContent = "Less Details"; // Change button text
  } else {
    details.style.display = "none"; // Hide details
    button.textContent = "More Details"; // Change button text
  }
}

// function showMoreFaculty() {
//   const hiddenCards = document.querySelectorAll('.faculty-card.hidden');
//   hiddenCards.forEach(card => card.classList.remove('hidden'));
//   document.querySelector('.view-more-btn').style.display = 'none'; // Hide the button after showing more faculty
// }

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

const login = document.querySelector(".logind");
const dropdown = document.querySelector(".dropdown");

// Show user info if logged in
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
    window.location.reload();
  });

  // Hide logout text when clicking outside
  document.addEventListener("click", function () {
    logoutText.style.display = "none";
  });
}

// Require login before navigation
document.querySelectorAll(".nav-links a").forEach((link) => {
  // Skip the login link (handles variations like ./login.html or /login.html)
  const href = link.getAttribute("href") || "";
  if (href.toLowerCase().includes("login.html")) return;

  link.addEventListener("click", function (e) {
    const userFullName = localStorage.getItem("userFullName");
    if (!userFullName) {
      e.preventDefault();
      alert("Please login first to access this page.");
    }
  });
});
