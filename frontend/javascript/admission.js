document.getElementById('admissionForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    dob: form.dob.value,
    gender: form.gender.value,
    email: form.email.value,
    phone: form.phone.value,
    course: form.course.value,
    address: form.address.value
  };
  try {
    const response = await fetch('http://localhost:5000/api/admissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (response.ok) {
      alert('Admission form submitted successfully!');
      form.reset();
    } else {
      alert(result.message || 'Submission failed');
    }
  } catch (err) {
    alert('Error submitting form');
  }
});
