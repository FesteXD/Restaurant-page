export const menuPage = () => {
    const content = document.getElementById('content');
    
    const headline = document.createElement('h1');
    headline.innerHTML = 'Menu';
    content.appendChild(headline);

    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu-Div')
    content.appendChild(menuDiv);
    const meal1 = document.createElement('div');
    const meal2 = document.createElement('div');
    const meal3 = document.createElement('div');
    menuDiv.appendChild(meal1);
    menuDiv.appendChild(meal2);
    menuDiv.appendChild(meal3);

    const meal1name = document.createElement('h2');
    const meal2name = document.createElement('h2');
    const meal3name = document.createElement('h2');
    meal1name.innerHTML = 'Pizza quattro formaggi';
    meal2name.innerHTML = 'Lasagne Bolognese';
    meal3name.innerHTML = 'Spaghetti Napoletana';
    meal1.appendChild(meal1name);
    meal2.appendChild(meal2name);
    meal3.appendChild(meal3name);



    const img1 = document.createElement('img');
    img1.setAttribute('id', 'meal');
    img1.src = "./images/pizza.jpg"
    meal1.appendChild(img1);
    const img2 = document.createElement('img');
    img2.setAttribute('id', 'meal');
    img2.src = "./images/lasagne.jpg"
    meal2.appendChild(img2);
    const img3 = document.createElement('img');
    img3.setAttribute('id', 'meal');
    img3.src = "./images/spaghetti.jpg"
    meal3.appendChild(img3);
    
}
