document.addEventListener('DOMContentLoaded', () => {
    // Set last modified date in the footer
    const lastModifiedSpan = document.getElementById('last-modified');
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

    const navMenu = document.querySelector('.nav-menu');
    const links = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');

    // Create hover effect element
    const hoverEffect = document.createElement('div');
    hoverEffect.classList.add('hover-effect');
    navMenu.appendChild(hoverEffect);

    // Navbar hide/reappear on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScrollTop) {
            navbar.style.top = '-100px'; // Hide navbar
        } else {
            navbar.style.top = '0'; // Show navbar
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
    });

    // Hamburger menu functionality
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navMenu.classList.toggle('show'); // Ensure the slide-in effect applies
    });

    // Close the pop-up menu when clicking outside
    document.addEventListener('click', e => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active', 'show');
        }
    });

    // Prevent menu from closing when clicking inside
    navMenu.addEventListener('click', e => {
        e.stopPropagation();
    });

    // Highlight active link
    const originalActiveLink = [...links].find(link => link.href === window.location.href);
    if (originalActiveLink) {
        originalActiveLink.classList.add('active');
    }

    // Hover effect for navigation links
    links.forEach(link => {
        link.addEventListener('mouseenter', e => {
            const activeLink = document.querySelector('.nav-link.active');
            // Temporarily remove the active class from the active link
            if (activeLink) {
                activeLink.classList.remove('active');
            }

            const rect = e.target.getBoundingClientRect();
            hoverEffect.style.width = `${rect.width}px`;
            hoverEffect.style.height = `${rect.height}px`;
            hoverEffect.style.left = `${rect.left - navMenu.getBoundingClientRect().left}px`;
            hoverEffect.style.top = `${rect.top - navMenu.getBoundingClientRect().top}px`;
            hoverEffect.style.opacity = '1';
        });

        link.addEventListener('mouseleave', () => {
            hoverEffect.style.opacity = '0';

            // Restore the active class to the active link after hover
            const activeLink = document.querySelector('.nav-link.active');
            if (!activeLink) {
                const originalActiveLink = [...links].find(link =>
                    link.href === window.location.href
                );
                if (originalActiveLink) {
                    originalActiveLink.classList.add('active');
                }
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            localStorage.setItem('contactFormData', JSON.stringify(formObject));
            alert('Form data saved locally!');
        });

        // Load form data from localStorage
        const savedFormData = localStorage.getItem('contactFormData');
        if (savedFormData) {
            const formObject = JSON.parse(savedFormData);
            Object.keys(formObject).forEach((key) => {
                const input = contactForm.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = formObject[key];
                }
            });
        }
    }

    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });

    // Example of object usage
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com'
    };

    // Example of array and array method usage
    const programs = ['Organic Farming', 'Modern Tools', 'Community Support'];
    programs.forEach(program => {
        console.log(`Program: ${program}`);
    });

    // Example of template literals
    const welcomeMessage = `Welcome, ${user.name}!`;
    console.log(welcomeMessage);
});