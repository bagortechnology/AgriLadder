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
const form = document.getElementById('easyApply');

// Add event listener to the form
form.addEventListener('submit', async function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the form values
    const fullName = document.getElementById('fullName').value;
    const desiredJob = document.getElementById('desiredJob').value;
    const experience = document.getElementById('experience').value;
    const date = document.querySelector('#today').value;
    const portfolio = document.getElementById('portfolio').value;   

    const job = {
        fullName,
        desiredJob,
        experience,
        date,
        portfolio
    };      

    const userRole = 'farmhand';
    // Get the current authenticated user
    const user = auth.currentUser;

    // Define the database references and data to write
    const userJobRef = `users/${userRole}/${user.uid}/application/${desiredJob}`;
    const jobsRef = `application/${desiredJob}`;
    const data = {
        [userJobRef]: job,
        [jobsRef]: job
    };

    try {
        // Write the data to multiple paths in the database
        await update(ref(database), data);
        alert("Applied successfully!");
        // Clear the form inputs
        clearForm();
    } catch (error) {
        alert(`Error applying job: ${error.message}`);
    }
});


// Function to clear the form inputs
function clearForm() {
  document.getElementById('fullName').value = '';
  document.getElementById('desiredJob').value = '';
  document.getElementById('experience').value = '';
  document.querySelector('#today').checked = false;
  document.getElementById('portfolio').value = '';
}