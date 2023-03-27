const deleteFormHandler = async (event) => {
  event.preventDefault();

  const postId = extractPostIdFromUrl();

  console.log(postId);

  const deletePost = await deletePostRequest(postId);

  if (deletePost.ok) {
    redirectToDashboard();
  } else {
    alert(deletePost.statusText);
  }
}

const extractPostIdFromUrl = () => {
  const urlParts = window.location.toString().split('/');
  return urlParts[urlParts.length - 1];
}

const deletePostRequest = async (postId) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      post_id: postId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
}

const redirectToDashboard = () => {
  document.location.replace('/dashboard/');
}

document
  .querySelector('#delete')
  .addEventListener('click', deleteFormHandler);
