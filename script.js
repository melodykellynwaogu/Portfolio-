<<<<<<< HEAD
// Lates Projects button click handler
const latesBtn = document.getElementById('lates');
if (latesBtn) {
  latesBtn.addEventListener('click', function() {
    window.location.href = 'lates.html';
  });
}
const themeToggle = document.getElementById("theme-toggle");
document.body.classList.add("dark-mode");
themeToggle.textContent = "Switch To Light Mode";

function setTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  themeToggle.textContent = isDark ? "Switch To Light Mode" : "Switch To Dark Mode";
}
=======

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
  
}

>>>>>>> 3b656c077b8c85a98061699ee7dcb1564878665b

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  setTheme(isDark);
<<<<<<< HEAD
});

themeToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    themeToggle.click();
  }
});


const typingText = document.getElementById("typing-text");
const text = "Python Web-developer";
let index = 0;
typingText.textContent = "";
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

=======
});
themeToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    themeToggle.click();
  }
});

>>>>>>> 3b656c077b8c85a98061699ee7dcb1564878665b

function filterProjects(category) {
  const tiles = document.querySelectorAll('.project-tile');
  tiles.forEach(tile => {
    if (category === 'all' || tile.getAttribute('data-category') === category) {
      tile.style.display = "flex";
<<<<<<< HEAD
    } else {
      tile.style.display = "none";
=======
      tile.classList.add("project-show");
    } else {
      tile.style.display = "none";
      tile.classList.remove("project-show");
>>>>>>> 3b656c077b8c85a98061699ee7dcb1564878665b
    }
  });

  
  const buttons = document.querySelectorAll('#project-filter button');
  buttons.forEach(btn => btn.classList.remove('active'));
<<<<<<< HEAD
  const activeBtn = Array.from(buttons).find(btn => {
    if (category === 'all') return btn.textContent.trim().toLowerCase() === 'all';
    if (category === 'web-dev') return btn.textContent.toLowerCase().includes('web');
    if (category === 'js') return btn.textContent.toLowerCase().includes('js') || btn.textContent.toLowerCase().includes('ml');
    if (category === 'python') return btn.textContent.toLowerCase().includes('python');
    return false;
  });
  if (activeBtn) activeBtn.classList.add('active');
}
window.filterProjects = filterProjects;
=======
  const activeBtn = Array.from(buttons).find(btn => 
    btn.textContent.toLowerCase().includes(category.toLowerCase())
  );
  if (activeBtn) activeBtn.classList.add('active');
}


window.filterProjects = filterProjects;


>>>>>>> 3b656c077b8c85a98061699ee7dcb1564878665b
filterProjects('all');


document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    if (section) section.scrollIntoView({ behavior: "smooth" });
  });
<<<<<<< HEAD
});

function showThankYou(event) {
    event.preventDefault();
    var form = event.target;
    var thankYou = document.getElementById('thank-you-message');
    if (thankYou) {
        thankYou.style.display = 'block';
        form.style.display = 'none';
    }

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
}





=======
});
>>>>>>> 3b656c077b8c85a98061699ee7dcb1564878665b
