import { homePage } from "./home"; 
import { menuPage } from "./menu"; 
import { contactPage } from "./contact"; 
import { firstLoad } from "./firstLoad";

const content = document.getElementById('content');


firstLoad();

home.addEventListener('click', () => {
    while (content.children.length > 1) {
        content.removeChild(content.lastChild);
    }
    home.setAttribute('class', 'active');
    menu.classList.remove('active');
    contact.classList.remove('active');
    homePage();
});

menu.addEventListener('click', () => {
    while (content.children.length > 1) {
        content.removeChild(content.lastChild);
    }
    menu.setAttribute('class', 'active');
    home.classList.remove('active');
    contact.classList.remove('active');
    menuPage(); 
}); 

contact.addEventListener('click', () => {
    while (content.children.length > 1) {
        content.removeChild(content.lastChild);
    }
    contact.setAttribute('class', 'active');
    home.classList.remove('active');
    menu.classList.remove('active');
    contactPage(); 
}); 


