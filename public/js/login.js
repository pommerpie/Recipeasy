const loginForm = async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('user').value.trim();
    const password = document.getElementById('pass').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        await fetch('/', {
          method: 'GET',
        });
        document.location.replace('/')
      } else {
        alert('Failed to log in.');
      }
    }
  };

document.getElementById('form').addEventListener('submit', loginForm);