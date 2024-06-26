import createElement from "../../helpers/createElement.js";
import dropDown from "./dropDown.js";
import getProfile from "../../api/auth/requests/getProfile.js";
import dropDownMenu from '../../helpers/dropDownMenu.js';

export default async function loggedIn(container, name) {
    const profile = await getProfile(name);

    const headerLoggedIn = createHeaderLoggedIn(profile);
    const dropDownMenu = dropDown(profile);

    container.appendChild(headerLoggedIn);
    container.appendChild(dropDownMenu);
}

function createHeaderLoggedIn(profile) {
    const div1 = createElement('div', 'xl:w-1/2 2xl:w-1/6 gap-2 items-center justify-end hidden xl:flex');
    div1.setAttribute("id", "headerLoggedIn");

    const div2 = createElement('div', 'flex flex-col mr-3');
    const credits = createElement('p', 'text-right text-sm', 'Credits:');
    const userCredits = createElement('p', 'text-right text-sm font-medium', profile.credits);
    const div3 = createElement('div', 'relative h-16 w-16');

    const profileAvatar = createElement('img', 'h-14 w-14 rounded-full object-cover');
    profileAvatar.src = profile.avatar.url;
    profileAvatar.alt = profile.avatar.alt;

    const dropDownBtn = createElement('button', 'absolute bottom-0 right-0 h-6 w-6 bg-light rounded-full border flex items-center justify-center');
    dropDownBtn.id = "dropDownBtn";
    dropDownBtn.addEventListener('click', dropDownMenu)

    const dropDownIcon = createElement('i', 'fa-solid fa-chevron-down text-xs');

    const div4 = createElement('div','h-14 w-14 rounded-full cursor-pointer flex items-center justify-center border hover:bg-secondary hover:border-transparent duration-300');
    const bellIcon = createElement('i', 'fa-solid fa-bell');

    dropDownBtn.appendChild(dropDownIcon);
    div4.append(bellIcon);
    div3.append(profileAvatar, dropDownBtn);
    div2.append(credits, userCredits);
    div1.append(div2, div3, div4);

    return div1;
}