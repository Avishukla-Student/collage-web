document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const password = form.password.value;

    const res = await fetch(
      "https://collage-web-ifhm.onrender.com/api/users/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, password }),
      }
    );

    const data = await res.json();
    if (res.ok) {
        alert(data.message);
        localStorage.setItem("userFullName", fullName);
        window.location.href = "index.html"; // Redirect to home page
    } else {
      alert(data.message);
    }
  });

