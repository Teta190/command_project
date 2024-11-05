function submitForm() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const comment = document.getElementById("comment");

  if (fullName && email && phone && comment) {
    alert("Form submitted successfully!");
  } else {
    alert("Pleaase fill in all fields");
  }
}
//  Activites pages

// /* Activites pages */
