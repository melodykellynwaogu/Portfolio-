// Typing effect for the welcome text
const typingText = document.getElementById("typing-text");
const text = "Welcome To My Portfolio";
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting && index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Typing speed
    } else if (isDeleting && index > 0) {
        typingText.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(typeEffect, 50); // Deleting speed
    } else {
        isDeleting = !isDeleting; // Switch between typing and deleting
        setTimeout(typeEffect, 1000); // Pause before switching
    }
}

typeEffect();

// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
let isDarkMode = false;

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    isDarkMode = !isDarkMode;
    themeToggle.textContent = isDarkMode ? "Switch To Light Mode" : "Switch To Dark Mode";
});

// Add dark mode styles dynamically
const darkModeStyles = document.createElement("style");
darkModeStyles.textContent = `
    body.dark-mode {
        background-color: #121212;
        color: #ffffff;
    }
    body.dark-mode a {
        color: #bb86fc;
    }
    body.dark-mode #navbar {
        background-color: #1f1f1f;
    }
    body.dark-mode button {
        background-color: #333333;
        color: #ffffff;
    }
`;
document.head.appendChild(darkModeStyles);