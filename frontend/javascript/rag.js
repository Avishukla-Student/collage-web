document
  .getElementById("registrationForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const type = form.type.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const res = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password, type }),
    });

    const data = await res.json();
    alert(data.message);
  });
