const latesBtn = document.getElementById('lates');
if (latesBtn) {
  latesBtn.addEventListener('click', function() {
    window.location.href = 'lates.html';
  });
}




const typingText = document.getElementById("typing-text");
if (typingText) {
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
}


function filterProjects(category) {
  const tiles = document.querySelectorAll('.project-tile');
  tiles.forEach(tile => {
    if (category === 'all' || tile.getAttribute('data-category') === category) {
      tile.style.display = "flex";
    } else {
      tile.style.display = "none";
    }
  });

  const buttons = document.querySelectorAll('#project-filter button');
  buttons.forEach(btn => btn.classList.remove('active'));
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
filterProjects('all');


document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    if (section) section.scrollIntoView({ behavior: "smooth" });
  });
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
  });
}