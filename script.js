document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = navLinks.querySelectorAll('li a'); // Get all navigation links

    // Toggle mobile menu
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
        document.body.classList.toggle('no-scroll'); // Prevent scrolling when menu is open
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener("click", function() {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
                document.body.classList.remove('no-scroll');
            }
        });
    });

    // Update current year in footer
    const currentYearSpan = document.getElementById("current-year");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});