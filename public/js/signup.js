const signupForm = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const firstName = document.getElementById('first').value.trim();
  const password = document.getElementById('pass').value.trim();

  if (email && firstName && password) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ email, firstName, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document.getElementById('form').addEventListener('submit', signupForm);