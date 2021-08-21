import restaurant from '../images/restaurant.jpg';

export const homePage = () => {
    const content = document.getElementById('content');
    
    const headline = document.createElement('h1');
    headline.innerHTML = 'Restaurant';
    
    const myImage = new Image();
    myImage.src = restaurant;
    
    const hours = document.createElement('div');
    const hoursh2 = document.createElement('h2');
    const monday = document.createElement('p');
    const tuesday = document.createElement('p');
    const wednesday = document.createElement('p');
    const thursday = document.createElement('p');
    const friday = document.createElement('p');
    const sat = document.createElement('p');
    const sun = document.createElement('p')
    
    hoursh2.innerHTML = 'Opening hours'
    hours.appendChild(hoursh2);
    hours.setAttribute('id', 'hours');

    monday.innerHTML = 'Monday 8:00 - 20:00';
    tuesday.innerHTML = 'Tuesday 8:00 - 20:00';
    wednesday.innerHTML = 'Wednesday 8:00 - 20:00';
    thursday.innerHTML = 'Thursday 8:00 - 20:00';
    friday.innerHTML = 'Friday 8:00 - 24:00';
    sat.innerHTML = 'Saturday 6:00 - 22:00';
    sun.innerHTML = 'Sunday 6:00 - 20:00';

    hours.appendChild(monday);
    hours.appendChild(tuesday);
    hours.appendChild(wednesday);
    hours.appendChild(thursday);
    hours.appendChild(friday);
    hours.appendChild(sat);
    hours.appendChild(sun);
    
    
    
    content.appendChild(headline);
    content.appendChild(myImage);
    content.appendChild(hours);
    

   

  


};

