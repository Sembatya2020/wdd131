// Set the current year dynamically
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Display the last modified date in the footer
document.getElementById('lastModified').textContent = document.lastModified;

// Select the hamburger icon and the navigation menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');

// Add click event listener to the hamburger icon
hamburger.addEventListener('click', function() {
    // Toggle the 'active' class on the nav and the hamburger to show the menu and change the icon
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');  // Toggle active state on the hamburger icon
    // Toggle the icon between ☰ and ✖
    hamburger.textContent = hamburger.textContent === '☰' ? '✖' : '☰';
});
