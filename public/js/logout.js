const logout = async () => {
  try {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(response.statusText);
    document.location.replace('/');
  } catch (err) {
    alert(err.message);
  }
};

document.querySelector('#logout').addEventListener('click', (event) => {
  event.preventDefault();
  logout();
});
