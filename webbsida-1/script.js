const form = document.getElementById("contactForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    errorMessage.textContent = "All fields are required.";
    return;
  }

  errorMessage.style.color = "green";
  errorMessage.textContent = "Message sent successfully!";
  form.reset();
});