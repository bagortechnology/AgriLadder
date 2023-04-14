const button = document.querySelector('.job-item .btn.mx-3');
const jobDescription = document.querySelector('#jobDescription');
const icon = button.querySelector('i');

button.addEventListener('click', () => {
  jobDescription.classList.toggle('show');
  
  if (icon.classList.contains('fa-eye')) {
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
});
