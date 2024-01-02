
function navigateToWorks() {
    window.location.href = "works.html";
  }

  function navigateToWorks() {
    var overlay = document.getElementById('overlay');
    overlay.classList.add('move-right');
    
    new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
        window.location.href = "works.html";
      });
    }