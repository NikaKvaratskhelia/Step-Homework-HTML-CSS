document.getElementById('burger-menu').addEventListener('click', function() {
    document.getElementById('burger-menu-list').style.display = 'flex';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('burger-menu-list')) {
        document.getElementById('burger-menu-list').style.display = 'none';
    }
  });
  
  
  document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('burger-menu-list').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('burger-menu-list')) {
        document.getElementById('burger-menu-list').style.display = 'flex';
    }
  });