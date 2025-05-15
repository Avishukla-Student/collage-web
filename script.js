
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll('.slides');
  const dots = document.querySelectorAll('.dot');
  slides.forEach(slide => slide.style.display = 'none'); // Hide all slides
  dots.forEach(dot => dot.classList.remove('active')); // Remove active class from all dots
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1; // Reset to the first slide if at the end
  slides[slideIndex - 1].style.display = 'block'; // Show the current slide
  dots[slideIndex - 1].classList.add('active'); // Highlight the current dot
  setTimeout(showSlides, 4000); // Change slide every 5 seconds
}

function changeSlide(n) {
  slideIndex += n - 1;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

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

function showMoreFaculty() {
  const hiddenCards = document.querySelectorAll('.faculty-card.hidden');
  hiddenCards.forEach(card => card.classList.remove('hidden'));
  document.querySelector('.view-more-btn').style.display = 'none'; // Hide the button after showing more faculty
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

const login=document.querySelector(".logind");
const dropdown=document.querySelector(".dropdown");

let clickcount=0;

login.addEventListener("click",()=>{
  if(clickcount==0){
    dropdown.style.display = "block";    
    clickcount=1;
  }else{
    dropdown.style.display = "none";
    clickcount=0;
  }
})