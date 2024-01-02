        const links = document.querySelectorAll('.nav-link');
      
        links.forEach(link => {
          link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('selected'));
            link.classList.add('selected');
          });
        });
      
        const hamburger = document.getElementById('hamburger');
        const linksContainer = document.getElementById('links');
      
        hamburger.addEventListener('click', () => {
          linksContainer.classList.toggle('show');
        });
      
        function toggleDarkMode() {
  var body = document.body;
  var icon = document.getElementById('darkModeIcon');
  
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    icon.src = "lightmode.png";
  } else {
    body.classList.add('dark-mode');
    icon.src = "darkmode.png";
  }
}
      
        function navigateToHome() {
          // You can use window.location.href or any other method to navigate to home.html
          window.location.href = 'home.html';
        }

        function toggleDarkMode() {
          var body = document.body;
          if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
          } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
          }
        }
        
        // On page load, check if a theme is stored in localStorage and apply it
        window.onload = function() {
          var storedTheme = localStorage.getItem('theme');
          if (storedTheme) {
            document.body.className = storedTheme;
          }
        }