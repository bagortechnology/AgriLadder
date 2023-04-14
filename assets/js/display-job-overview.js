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
const jobListings = document.getElementById('jobOverview');

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
    jobItem.innerHTML = `<div class="container job-item p-4 my-4">
      <div class="row g-4">
        <div class="col-sm-12 col-md-8 d-flex align-items-center">
          <img src="/assets/images/kris-farm-organic.png" alt="farmer-logo" class="flex-shrink-0 img-fluid border rounded"
            style="width: 80px; height: 80px">
          <div class="text-start ps-4">
            <h5 class="mb-3 lead fw-bolder" style="color:#00660a">${job.jobTitle} <i class="fa fa-fire text-warning"
                aria-hidden="true"></i></h5>
            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt me-2"></i>${job.location}</span>
            <span class="text-truncate me-3"><i class="far fa-clock me-2"></i>${job.jobCategory}</span>
            <span class="text-truncate me-3"><i class="far fa-money-bill-alt me-2"></i>₱${job.hourlyRate}</span>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
          <div class="d-flex mb-3">
            <a href="/farmhand/login.html" class="btn btn-primary">Apply Now</a>
          </div>
          <small class="text-truncate"><i class="far fa-calendar-alt me-2"></i>posted just now.</small>
        </div>
      </div>
    </div>
  
    <!--Job Description & About the Farm-->
    < class="tab-class text-center ">
      <ul class="nav nav-pills d-inline-flex justify-content-center align-items-center border-bottom mb-5">
        <li class="nav-item">
          <a class="d-flex align-items-center text-start pb-3 active" data-bs-toggle="pill" href="#aboutJob">
            <h6 class="lead mt-n1 mb-0"> About this Job     </h6>
          </a>
        </li>
        <li class="nav-item">
          <a class="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#aboutFarm">
            <h6 class="lead mt-n1 mb-0">About the Farm </h6>
          </a>
        </li>
      </ul>
  
      <div class="container">
          <div class="tab-content">
              <div id="aboutJob" class="tab-pane fade show p-0 active">
                  <div class="lead fw-bold text-lg-start fs-3 my-3" style="color: #00660a;">About this Job</div>
                      <div id="jobDescription"><p class="lead px-3 p-lg-5 m-lg-5" style="text-align: justify;">
                      ${job.jobDescription}
                      </p></div>
              </div>
          </div>
      </div>
  
      <div class="container">
          <div class="tab-content">
              <div id="aboutFarm" class="tab-pane fade show p-0">
                  <div class="lead fw-bold text-lg-start fs-3 my-3" style="color: #00660a;">About the Farm</div>
                  <div>
                      <div id="aboutUs">
                      <p class="lead px-3 p-lg-5 m-lg-5" style="text-align: justify;">
                          Welcome to Kris Farm Organic, a sustainable integrated organic farming company based in Labason. We are committed to producing high-quality organic fruits and vegetables using environmentally friendly farming practices, from production to marketing. At Kris Farm Organic, we prioritize sustainable agriculture and aim to provide our customers with fresh and healthy produce that is free from harmful chemicals and pesticides.
                      </p>
                      </div>
              </div>
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