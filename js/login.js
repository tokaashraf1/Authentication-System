document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); 
  const email = document.getElementById("Email").value.trim();
  const password = document.getElementById("Password").value.trim();

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  emailError.textContent = "";
  passwordError.textContent = "";

  let valid = true;

  if (email === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  }

  if (password === "") {
    passwordError.textContent = "Password is required.";
    valid = false;
  }

  if (!valid) return;

  // Retrieve stored users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email exists
  const user = users.find(user => user.email === email);

  if (!user) {
    emailError.textContent = "This email is not registered.";
  } else if (user.password !== password) {
    passwordError.textContent = "Incorrect password.";
  } else {
    localStorage.setItem("loggedInUser", user.email);
    window.location.href = "./profile.html"; 

  }
});
