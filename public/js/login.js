// Define a reusable function to handle form submissions
const formSubmitHandler = async (event, endpoint) => {
  event.preventDefault();

  const usernameInput = event.target.querySelector('[name="username"]');
  const passwordInput = event.target.querySelector('[name="password"]');
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username && password) {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
};

// Handle login form submissions
document.querySelector('.login-form').addEventListener('submit', (event) => {
  formSubmitHandler(event, '/api/users/login');
});

// Handle signup form submissions
document.querySelector('.signup-form').addEventListener('submit', (event) => {
  formSubmitHandler(event, '/api/users');
});
