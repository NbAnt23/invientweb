document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('mouseover', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            this.querySelector('.dropdown-content').style.display = 'block';
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

