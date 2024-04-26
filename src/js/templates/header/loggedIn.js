import createElement from "../../helpers/createElement.js";
import getProfile from "../../api/auth/requests/getProfile.js";

export default async function loggedIn( container, name) {


    const profile = await getProfile(name)
const div1 = createElement("div", "flex flex-col");
const p1 = createElement("p", "text-center", "Hello, " + profile.name);
const p2 = createElement("p", "text-center font-medium text-sm", profile.credits + " credits");
div1.appendChild(p1);
div1.appendChild(p2);

const img = createElement("img", "h-14 w-14 rounded-full object-cover");
img.src = profile.avatar.url;
img.alt = profile.avatar.alt;

const div2 = createElement("div", "h-14 w-14 rounded-full flex items-center justify-center border");
const i = createElement("i", "fa-solid fa-bell");
div2.appendChild(i);

container.append(div1, img, div2)

}