
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

// Project filter functionality
function filterProjects(category) {
  const projectTiles = document.querySelectorAll(".project-tile");

  projectTiles.forEach((tile) => {
    if (category === "all" || tile.getAttribute("data-category") === category) {
      tile.style.display = "block";
    } else {
      tile.style.display = "none";
    }
  });
}

// Theme toggle functionality (if you want to add this feature)
// const themeToggle = document.getElementById("theme-toggle");
// let isDarkMode = false;

// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
//   isDarkMode = !isDarkMode;
//   themeToggle.textContent = isDarkMode ? "Switch To Light Mode" : "Switch To Dark Mode";
// });
