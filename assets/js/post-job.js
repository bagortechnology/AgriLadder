import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3O2EEuaM2o-pzftNVuBs7m3KvvWI4xFI",
  authDomain: "agriladder-jobs.firebaseapp.com",
  databaseURL: "https://agriladder-jobs-default-rtdb.firebaseio.com",
  projectId: "agriladder-jobs",
  storageBucket: "agriladder-jobs.appspot.com",
  messagingSenderId: "635800620871",
  appId: "1:635800620871:web:724d28204dd3878f36c662"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

// Get form element and alert element
const form = document.querySelector('.container');
const alertElement = document.querySelector('.alert');

// Add event listener to the form
form.addEventListener('submit', async function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form values
  const jobTitle = document.getElementById('jobTitle').value;
  const location = document.getElementById('jobLocation').value;
  const jobCategory = document.querySelector('input[name="jobCategory"]:checked').value;
  const hourlyRate = document.getElementById('hourlyRate').value;
  const jobDescription = document.getElementById('jobDescription').value;

  const job = {
    jobTitle,
    location,
    jobCategory,
    hourlyRate,
    jobDescription
  };

  const userRole = 'farmer';
  // Get the current authenticated user
  const user = auth.currentUser;
  // Update the user's data in the database
  try {
    await update(ref(database, `users/${userRole}/${user.uid}/${jobTitle}`), job);
    // Show success alert
    alertElement.innerHTML = '<div class="alert alert-success mt-3" role="alert">New job posted successfully!</div>';
    // Clear the form inputs
    clearForm();
  } catch (error) {
    // Show error alert
    alertElement.innerHTML = `<div class="alert alert-danger mt-3" role="alert">Error posting job: ${error.message}</div>`;
  }
});

// Function to clear the form inputs
function clearForm() {
  document.getElementById('jobTitle').value = '';
  document.getElementById('jobLocation').value = '';
  document.querySelector('input[name="jobCategory"]:checked').checked = false;
  document.getElementById('hourlyRate').value = '';
  document.getElementById('jobDescription').value = '';
}
