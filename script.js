// Dark Mode Toggle
const html = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const userPref = localStorage.getItem("theme");

if (userPref === "dark" || (!userPref && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  html.classList.add("dark");
  themeToggle.textContent = "☀️ Light Mode";
}

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  const isDark = html.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Typing Effect
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