
  window.onload = function() {
  var navbarLinks = document.querySelectorAll('#links a');
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
};
