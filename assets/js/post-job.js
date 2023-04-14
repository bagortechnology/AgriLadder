import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, update, onValue } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
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
      // Update the user's data in the database
      try {
        await update(ref(database, `users/${userRole}/${user.uid}/job/${jobTitle}`), job);
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

// Get the current authenticated user
const user = auth.currentUser;

// Get a reference to the jobListings container element
const jobListings = document.getElementById('jobListings');

// Get a reference to the user's job data in the database
const userRole = 'farmer';
const userJobsRef = ref(database, `users/${userRole}/${user.uid}/job`);

// Listen for changes to the user's job data in the database
onValue(userJobsRef, (snapshot) => {
  // Clear the jobListings container
  jobListings.innerHTML = '';

  // Loop through each job in the user's job data and display it in the jobListings container
  snapshot.forEach((jobSnapshot) => {
    const job = jobSnapshot.val();
    const jobKey = jobSnapshot.key;

    // Create a new job item element using the HTML code as a template
    const jobItem = document.createElement('div');
    jobItem.classList.add('container', 'job-item', 'p-4', 'mb-4');
    jobItem.innerHTML = `<div class="container job-item p-4 mb-4">
    <div class="row g-4">
      <div class="col-sm-12 col-md-8 d-flex align-items-center">
        <div class="image-upload"><img id="photo" src="/assets/images/kris-farm-organic.png" alt="farmer-logo" class="flex-shrink-0 img-fluid border rounded" style="width: 80px; height: 80px"></div>
        <div class="text-start ps-4">
          <h5 id="jobTitle" class="mb-3 lead fw-bolder" style="color:#00660a">${job.jobTitle}</h5>
          <span id="jobLocation" class="text-truncate me-3"><i class="fa fa-map-marker-alt me-2"></i>${job.location}</span>
          <span id="jobCategory" class="text-truncate me-3"><i class="far fa-clock me-2"></i>${job.jobCategory}</span>
          <span id="hourlyRate" class="text-truncate me-3"><i class="far fa-money-bill-alt me-2"></i>${job.hourlyRate}</span>
        </div>
      </div>
      <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
        <div class="d-flex mb-3">
          <a href="" class="btn btn-light btn-square me-3"><i class="fa fa-trash-o text-light"></i></a>
          <a href="#" class="btn search-btn"><i class="fa fa-pencil-square-o" aria-hidden="true" style="color: yellow"></i> Edit</a>
          <a href="#" class="btn mx-3" data-bs-toggle="collapse" data-bs-target="#jobDescription" aria-expanded="false" aria-controls="jobDescription"><i class="fa fa-eye" aria-hidden="true" style="color: yellow"></i> Job</a>
        </div>
        <small id="timeStamp" class="text-truncate"><i class="far fa-calendar-alt me-2"></i>updated just now.</small>
      </div>
      <div class="col-12">
        <div id="jobDescription" class="collapse job-description">
          <div class="lead fw-bold text-lg-start fs-3 my-3" style="color: #00660a;">About this Job</div>
          <div>
            <p class="px-3 p-lg-5 m-lg-5" style="text-align: justify;">
            ${job.jobDescription}
            </p>
          </div>
        </div>                  
    </div>
  </div>
</div>`;

// Append the job item to the job list
jobList.appendChild(jobItem); 
});
});
displayJobs(); // Call the function to display the jobs on the page
