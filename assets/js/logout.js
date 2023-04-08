const signOutLink = document.getElementById('logout');

signOutLink.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    // Display success message
    const alert = document.createElement('div');
    alert.className = 'alert alert-success mt-3';
    alert.setAttribute('role', 'alert');
    alert.innerText = 'You have been signed out successfully.';

    const cardBody = document.querySelector('.card-body');
    cardBody.insertBefore(alert, loginForm);

    // Redirect to the login page
    setTimeout(() => {
      window.location.href = '/farmhand/login.html';
    }, 2000);
  }).catch((error) => {
    console.error(error);
  });
});
