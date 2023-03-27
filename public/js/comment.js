const deleteFormHandler = async (event) => {
  event.preventDefault();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length -1
  ]; 
  console.log(post_id);

  const response = await fetch(`/api/post/${post_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('#delete')
  .addEventListener('click', deleteFormHandler);
