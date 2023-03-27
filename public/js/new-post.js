const submitPostForm = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const title = formData.get('post-title').trim();
  const content = formData.get('content').trim();

  try {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    alert(error.message);
  }
};

const postForm = document.querySelector('#new-post-form');
postForm.addEventListener('submit', submitPostForm);
