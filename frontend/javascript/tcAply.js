document
  .getElementById("tcForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const studentName = this.studentName.value;
    const rollNo = this.rollNo.value;

    const response = await fetch("http://localhost:5000/api/tcs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentName, rollNo }),
    });

    if (response.ok) {
      alert("TC application submitted!");
      this.reset();
    } else {
      alert("Submission failed. Please try again.");
    }
  });
