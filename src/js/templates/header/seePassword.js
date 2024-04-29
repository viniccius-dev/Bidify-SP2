const toggleButton = document.querySelector(".toggleButton");
const passwordInput = document.querySelector("#password");

export default function seePassword() {
  toggleButton.addEventListener("click", function() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
}