fetch("nav.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.text();
  })
  .then((html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const nav = doc.querySelector("nav");
    if (nav) {
      document.getElementById("nav-container").appendChild(nav);
    } else {
      console.error("No <nav> element found in nav.html");
    }
  })
  .catch((error) => {
    console.error("Error fetching nav:", error);
  });

  function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  }
