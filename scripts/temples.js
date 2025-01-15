// Set the current year dynamically
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Display the last modified date in the footer
document.getElementById('lastModified').textContent = document.lastModified;

// Select the hamburger icon and the navigation menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

// Add click event listener to the hamburger icon
hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');  // Toggle visibility of the menu
    // Toggle the icon between hamburger (☰) and close (✖)
    hamburger.textContent = hamburger.textContent === '☰' ? '✖' : '☰';
});
