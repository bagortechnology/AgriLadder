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

// Get form element
const form = document.getElementById('postJob');

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

    // Define the database references and data to write
    const userJobRef = `users/${userRole}/${user.uid}/job/${jobTitle}`;
    const jobsRef = `jobs/${jobTitle}`;
    const data = {
        [userJobRef]: job,
        [jobsRef]: job
    };

    try {
        // Write the data to multiple paths in the database
        await update(ref(database), data);
        alert("New Job is posted successfully!");
        // Clear the form inputs
        clearForm();
    } catch (error) {
        alert(`Error posting job: ${error.message}`);
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