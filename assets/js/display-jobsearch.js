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
const jobListings = document.getElementById('jobListings');

// Get a reference to the jobs data in the database
const jobsRef = ref(database, 'jobs');

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
    jobItem.innerHTML = `<div class="container job-item p-4 mb-4">
    <div class="row g-4">
      <div class="col-sm-12 col-md-8 d-flex align-items-center">
        <img src="/assets/images/kris-farm-organic.png" alt="farmer-logo" class="flex-shrink-0 img-fluid border rounded"
          style="width: 80px; height: 80px">
        <div class="text-start ps-4">
          <h5 class="mb-3 lead fw-bolder" style="color:#00660a"><a href="/jobs/${job.jobTitle}.html"> ${job.jobTitle} <i class="fa fa-fire text-warning"
              aria-hidden="true"></i></h5></a>
          <span class="text-truncate me-3"><i class="fa fa-map-marker-alt me-2"></i>${job.location}</span>
          <span class="text-truncate me-3"><i class="far fa-clock me-2"></i>${job.jobCategory}</span>
          <span class="text-truncate me-3"><i class="far fa-money-bill-alt me-2"></i>₱${job.hourlyRate}</span>
        </div>
      </div>
      <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
        <div class="d-flex mb-3">
        <a href="#" class="btn btn-primary" id="applyButton"><i class="fa fa-bolt" aria-hidden="true" style="color: yellow"></i> Easy Apply</a>
        </div>
        <small class="text-truncate"><i class="far fa-calendar-alt me-2"></i>posted just now</small>
      </div>
    </div>
  </div>`;

    // Append the job item to the job list
    jobListings.appendChild(jobItem); 
  });
});

function displayJobs() {
    // Call the function to display the jobs on the page
  };