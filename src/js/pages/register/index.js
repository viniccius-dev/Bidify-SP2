import storage from "../../utils/storage.js";
import seePassword from "../login/seePassword.js";
import register from "./register.js";

register();

const registerForm = document.querySelector("#registrationForm");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const body = {
    password: document.querySelector("#password").value,
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
  };

  storage.save("register", body);
  window.location.href = "/register/register.html";
});

seePassword();
