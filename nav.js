import './nav.js';

// Create a navbar element
const navbar = document.createElement('nav');

// Add some styles to the navbar
navbar.style.backgroundColor = 'lightblue';
navbar.style.padding = '10px';

// Create a list element for the navbar items
const navList = document.createElement('ul');
navList.style.listStyleType = 'none';
navList.style.display = 'flex';
navList.style.justifyContent = 'space-around';

// Create navbar items
const homeItem = document.createElement('li');
homeItem.textContent = 'Home';

const aboutItem = document.createElement('li');
aboutItem.textContent = 'About';

const contactItem = document.createElement('li');
contactItem.textContent = 'Contact';

// Append navbar items to the list
navList.appendChild(homeItem);
navList.appendChild(aboutItem);
navList.appendChild(contactItem);

// Append the list to the navbar
navbar.appendChild(navList);

// Append the navbar to the document body
// Import the nav.js file

// The rest of your main.js code...