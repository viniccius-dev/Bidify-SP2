import createElement from "../../helpers/createElement.js";
import getProfile from "../../api/auth/requests/getProfile.js";

export default async function loggedIn(container, name) {

    const profile = await getProfile(name)

    const dropDownContainer = createElement("div", "relative");

    const img = createElement("img", "h-14 w-14 rounded-full object-cover");
    img.src = profile.avatar.url;
    img.alt = profile.avatar.alt;

    const dropDownBtn = createElement("button", "h-8 w-8 bg-light");

    const dropDownIcon = createElement("i", "fa-solid fa-chevron-down text-sm");

    const dropDownMenu = createElement("div", "");

    dropDownContainer.append(img, dropDownBtn, dropDownMenu);

    const div2 = createElement("div", "h-14 w-14 rounded-full flex items-center justify-center border hover:bg-secondary hover:border-transparent duration-300");
    const i = createElement("i", "fa-solid fa-bell");
    div2.appendChild(i);

    container.append(dropDownContainer, div2)
}