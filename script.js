
const typingText = document.getElementById("typing-text");
const text = "Welcome To My Portfolio";
let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting && index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && index > 0) {
    typingText.textContent = text.substring(0, index - 1);
    index--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    setTimeout(typeEffect, 1000);
  }
}
typeEffect();


const themeToggle = document.getElementById("theme-toggle");
let isDarkMode = false;

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  isDarkMode = !isDarkMode;
  themeToggle.textContent = isDarkMode ? "Switch To Light Mode" : "Switch To Dark Mode";
});