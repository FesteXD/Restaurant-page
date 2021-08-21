import { homePage } from "./home";

export const firstLoad = () => {
    const header = document.createElement('header');
    const navbar = document.createElement('nav');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    home.setAttribute('id', 'home');
    menu.setAttribute('id', 'menu');
    contact.setAttribute('id', 'contact');

    home.setAttribute('class', 'active');
    menu.classList.remove('active');
    contact.classList.remove('active');

    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);

    header.appendChild(navbar);
    content.appendChild(header); 

    homePage()
}