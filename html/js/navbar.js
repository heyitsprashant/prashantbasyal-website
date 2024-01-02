function showMore() {
    document.body.style.opacity = 0; // Set opacity to 0 for the fade effect

    setTimeout(function() {
        window.location.href = 'about.html'; // Redirect to the new webpage
    }, 1250); // 1.25 seconds

    return false; // Prevent the default button behavior
}

window.onload = function() {
  var navbarLinks = document.querySelectorAll('#navbar a');
  navbarLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var href = this.href;
      var overlay = document.getElementById('overlay');
      overlay.classList.add('move-right');
      setTimeout(function() {
        window.location.href = href;
      }, 2000); // Delay navigation until after the 2 second transition
    });
  });
}


