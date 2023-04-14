// Select the eye icon element
const eyeIcon = document.querySelector('#jobDescriptionToggle i');

// Select the job description element
const jobDescription = document.querySelector('#jobDescription');

// Add a click event listener to the eye icon
eyeIcon.addEventListener('click', () => {
  // Toggle the visibility of the job description element
  jobDescription.classList.toggle('show');

  // Update the eye icon
  if (jobDescription.classList.contains('show')) {
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
});
