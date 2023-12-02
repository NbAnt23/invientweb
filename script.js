document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('mouseover', function (event) {
            event.preventDefault();
            this.querySelector('.dropdown-content').style.display = 'block';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Define the text to be typed
    const textToType = "Invient";

    // Get the h1 element
    const typingTextElement = document.getElementById("typing-text");

    // Function to simulate typing animation
    function typeText(index) {
        typingTextElement.textContent = textToType.slice(0, index);

        if (index < textToType.length) {
            setTimeout(function () {
                typeText(index + 1);
            }, 150); // Adjust the typing speed as needed
        }
    }

    // Start typing animation
    typeText(0);

    document.addEventListener('DOMContentLoaded', function () {
        // Get the header element
        const header = document.querySelector('.header-image');

        // Add the show-header class after a delay (adjust the delay as needed)
        setTimeout(function () {
            header.classList.add('show-header');
        }, 500);
    });
});
