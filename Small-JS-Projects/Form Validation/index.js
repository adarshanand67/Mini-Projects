const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;
const email = document.getElementById("email").value;
const submit = document.getElementById("submit");

submit.onclick = function () {
  if (username.length < 3) {
    alert("Username must be at least 3 characters");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  if (email.indexOf("@") === -1) {
    alert("Email must contain an @");
    return false;
  }
  return true;
};

