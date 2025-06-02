fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-container').innerHTML = data;
    // Attach toggleMenu globally after nav is loaded
    window.toggleMenu = function() {
      const navLinks = document.querySelector(".nav-links");
      navLinks.classList.toggle("active");
    };
  });

let script = document.createElement('script');
script.src = 'script.js';
document.body.appendChild(script);

