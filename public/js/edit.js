const editFormHandler = async (event) => {
  event.preventDefault();

  const form = event.target.closest('form');
  const formData = new FormData(form);

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: formData,
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#update').addEventListener('click', editFormHandler);
