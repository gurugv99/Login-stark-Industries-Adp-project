document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
   // if (username == 'username' && password == '') {
      // Redirect to a new page
      window.location.href = 'home.html';
    } else {
      document.getElementById('errorMessage').textContent = 'Invalid username or password.';
    }
  });
  
