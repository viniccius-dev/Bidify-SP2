import createElement from "../../helpers/createElement.js";
import modalToggle from "../../helpers/modalToggle.js";
import loginListen from "../../api/listeners/login.js";

export default function loggedOut(container) {
    const btn1 = createElement("button", "font-semibold hover:text-secondary duration-100", "Register");
    const span = createElement("span", null, "or");
    const btn2 = createElement("button", "border px-6 py-3 rounded hover:bg-secondary hover:border-secondary duration-300", "Log in");
    btn2.id = "openLogin";

    closeBtn.addEventListener("click", modalToggle)
    modalCancel.addEventListener("click", modalToggle)
    btn2.addEventListener("click", modalToggle)
    loginListen()

    container.append(btn1, span, btn2)
}

