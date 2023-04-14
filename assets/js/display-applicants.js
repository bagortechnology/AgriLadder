import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { getAuth, } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

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


// Get a reference to the jobListings container element
const jobListings = document.getElementById('application');

// Get a reference to the jobs data in the database
const jobsRef = ref(database, 'application');

// Listen for changes to the jobs data in the database
onValue(jobsRef, (snapshot) => {
  // Clear the jobListings container
  jobListings.innerHTML = '';

  // Loop through each job in the jobs data and display it in the jobListings container
  snapshot.forEach((jobSnapshot) => {
    const job = jobSnapshot.val();
    const jobKey = jobSnapshot.key;

    // Create a new job item element using the HTML code as a template
    const jobItem = document.createElement('div');
    jobItem.classList.add();
    jobItem.innerHTML = `
    <div class="table-responsive">
    <table class="table">
        <thead>
            <tr>
                <th>Candidate</th>
                <th>Desired Position</th>
                <th>Date Applied</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="${job.portfolio}">${job.fullName}</a></td>
                <td>${job.desiredJob}</td>
                <td>${job.date}</td>
                <td><span class="status pending">Pending</span></td>
            </tr>

        </tbody>
    </table>
</div>`;

    // Append the job item to the job list
    jobListings.appendChild(jobItem); 
  });
});

function displayJobs() {
    // Call the function to display the jobs on the page
  };