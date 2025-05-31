fetch("footer.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.text();
  })
  .then((html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const footer = doc.querySelector("footer");
    if (footer) {
      document.getElementById("footer-container").appendChild(footer);
    } else {
      console.error("No <footer> element found in footer.html");
    }
  })
  .catch((error) => {
    console.error("Error fetching footer:", error);
  });
