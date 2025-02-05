document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the logged-in user's email from localStorage
  const loggedInEmail = localStorage.getItem("loggedInUser");
  // Get the stored users
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(user => user.email === loggedInEmail);
  if (user) {
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;
  } else {
    window.location.href = "./login.html";
  }
  document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("loggedInUser"); 
    window.location.href = "./login.html"; 
  });
});
