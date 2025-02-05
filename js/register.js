document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();  
  let valid = true;
  // Get values from input fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Get error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }
  // Email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  } else {
    // Check for unique email in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Users in localStorage:", users); // Debugging
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      emailError.textContent = "Email is already registered.";
      valid = false;
    } else {
      emailError.textContent = "";
    }
  }
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }
  if (valid) {
    const newUser = { name, email, password };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "./login.html"; 
  }
});
