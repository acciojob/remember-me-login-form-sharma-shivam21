//your JS code here. If required.
 const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const existingBtn = document.getElementById('existing');
    const form = document.getElementById('loginForm');

    // Check for saved credentials on load
    window.onload = function () {
      const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      if (savedUsername && savedPassword) {
        existingBtn.style.display = 'block';
      }
    };

    // Submit handler
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;

      alert(`Logged in as ${username}`);

      if (checkbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      existingBtn.style.display = (localStorage.getItem('username') && localStorage.getItem('password')) ? 'block' : 'none';
    });

    // Existing user login
    existingBtn.addEventListener('click', function () {
      const savedUsername = localStorage.getItem('username');
      if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
      }
    });