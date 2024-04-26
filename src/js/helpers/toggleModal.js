const modalContainer = document.querySelector("#modal-container");
const openLogin = document.querySelector("#openLogin");
const closeBtn = document.querySelector("#closeBtn");
const modalCancel = document.querySelector("#modalCancel");

export default function modalToggle(e) {
    e.preventDefault()
    modalContainer.classList.toggle("hidden")
    modalContainer.classList.toggle("flex")
    document.body.classList.toggle("overflow-hidden")
}

closeBtn.addEventListener("click", modalToggle)
modalCancel.addEventListener("click", modalToggle)
openLogin.addEventListener("click", modalToggle)
