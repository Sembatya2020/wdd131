document.addEventListener("DOMContentLoaded", function () {
    // Update the current year in the footer
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Display last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    // Ensure menu starts hidden only on small screens
    function checkScreenSize() {
        if (window.innerWidth >= 768) {
            mainNav.style.display = "flex"; // Show nav on large screens
        } else {
            mainNav.style.display = "none"; // Hide nav on small screens
        }
    }

    // Run on page load
    checkScreenSize();

    // Run whenever window resizes
    window.addEventListener("resize", checkScreenSize);

    menuToggle.addEventListener("click", function () {
        if (mainNav.style.display === "none" || mainNav.style.display === "") {
            mainNav.style.display = "flex"; // Show menu
        } else {
            mainNav.style.display = "none"; // Hide menu
        }
    });
});
