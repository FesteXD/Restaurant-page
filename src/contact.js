export const contactPage = () => {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.innerHTML = 'Contact';
    content.appendChild(headline);

    const contactDiv = document.createElement('div');
    content.appendChild(contactDiv);
    const locationP = document.createElement('p');
    locationP.innerHTML = '3608 Lindale Avenue, Oakland, California';
    content.appendChild(locationP);
    const emailP = document.createElement('p');
    emailP.innerHTML = 'restaurant@notfake.cx';
    content.appendChild(emailP);
    const numberP = document.createElement('p');
    numberP.innerHTML = '+992-222-236';
    content.appendChild(numberP);

}