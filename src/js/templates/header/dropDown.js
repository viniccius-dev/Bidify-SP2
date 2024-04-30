import createElement from "../../helpers/createElement.js";

export default function dropDown(profile) {
    const div4 = createElement('div', 'h-14 w-14 rounded-full flex items-center justify-center border hover:bg-secondary hover:border-transparent duration-300');

    const div5 = createElement('div', 'mx-auto absolute top-[120px]');
    div5.setAttribute("id", "dropDownMenu");

    const div6 = createElement('div', 'bg-light w-80 border rounded-lg p-10 flex flex-col mr-16');
    const div7 = createElement('div', 'flex items-center gap-6 border-b mb-6');

    const profileAvatar = createElement('img', 'mb-4 h-14 w-14 rounded-full object-cover');
    profileAvatar.src = profile.avatar.url; 
    profileAvatar.alt = profile.avatar.alt;

    const div8 = createElement('div', 'mb-4');

    const helloMessage = createElement('p', 'font-medium', `Hello, ${profile.name}`);

    const userCredits = createElement('p', 'flex gap-3 text-sm', 'Credits: ');

    const userCreditsAmount = createElement('span');
    userCreditsAmount.textContent = profile.credits;

    userCredits.append(userCreditsAmount);

    const div9 = createElement('div', 'flex flex-col gap-3 border-b');

    const yourProfile = createElement('a', 'hover:font-medium duration-100', 'Your profile');

    const messages = createElement('p', 'flex justify-between items-center', 'Messages');
    const messagesCount = createElement('p', 'bg-secondary text-sm px-1.5 py-1 rounded', '3');

    messages.append(messagesCount);

    const notifications = createElement('p', 'mb-6', 'Notifications');

    const div10 = createElement('div', 'mt-6 flex flex-col items-start gap-4');

    const support = createElement('p', "", 'Support');
    const logOutBtn = createElement('button', 'font-medium', 'Log out');
    logOutBtn.id = 'logOutBtn';

    div10.append(support, logOutBtn);
    div9.append(yourProfile, messages, notifications);
    div8.append(helloMessage, userCredits);
    div7.append(profileAvatar, div8);
    div6.append(div7, div9, div10);
    div5.appendChild(div6);
    div4.append(div5);

    return div4;
}