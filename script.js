
const typingText = document.getElementById("typing-text");
const text = "Welcome To My Portfolio";
let index = 0;

function typeEffect() {
  if (index <= text.length) {
    typingText.textContent = text.substring(0, index);
    index++;
    setTimeout(typeEffect, 80); 
  } else {
    typingText.textContent = text; 
  }
}
typeEffect();


const themeToggle = document.getElementById("theme-toggle");


function setTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  themeToggle.textContent = isDark ? "Switch To Light Mode" : "Switch To Dark Mode";
  // localStorage.setItem("darkMode", isDark ? "true" : "false");
}


themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  setTheme(isDark);
});
themeToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    themeToggle.click();
  }
});


function filterProjects(category) {
  const tiles = document.querySelectorAll('.project-tile');
  tiles.forEach(tile => {
    if (category === 'all' || tile.getAttribute('data-category') === category) {
      tile.style.display = "flex";
      tile.classList.add("project-show");
    } else {
      tile.style.display = "none";
      tile.classList.remove("project-show");
    }
  });

  
  const buttons = document.querySelectorAll('#project-filter button');
  buttons.forEach(btn => btn.classList.remove('active'));
  const activeBtn = Array.from(buttons).find(btn => 
    btn.textContent.toLowerCase().includes(category.toLowerCase())
  );
  if (activeBtn) activeBtn.classList.add('active');
}

// Make filterProjects globally accessible
window.filterProjects = filterProjects;

// Optional: Initialize with 'all'
filterProjects('all');


document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    if (section) section.scrollIntoView({ behavior: "smooth" });
  });
});