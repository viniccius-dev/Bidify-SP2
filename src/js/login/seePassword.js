const toggleButton = document.getElementById("seePassword");
const passwordInput = document.getElementById("password");

export default function seePassword() {
  toggleButton.style.display = "none"; 

  passwordInput.addEventListener("input", function() {
    if (passwordInput.value.length > 0) {
      toggleButton.style.display = "flex"; 
    } else {
      toggleButton.style.display = "none"; 
    }
  });

  toggleButton.addEventListener("click", function() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      confirmPassword.type = "text";
    } else {
      passwordInput.type = "password";
      confirmPassword.type = "password";
    }
  });
}