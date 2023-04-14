import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, remove } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

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

onAuthStateChanged(auth, (user) => {
    if (user) {
      // Attach a click event listener to the trash icon
      jobListings.addEventListener('click', (event) => {
        if (event.target.classList.contains('fa-trash-o')) {
          // Get the job key from the parent element's data-key attribute
          const jobKey = event.target.parentElement.parentElement.parentElement.dataset.key;
  
          // Get a reference to the job in the database and remove it
          const userRole = 'farmer';
          const jobRef = ref(database, `users/${userRole}/${user.uid}/job/${jobKey}`);
          remove(jobRef)
            .then(() => {
              alert("Job deleted successfully!");
            })
            .catch((error) => {
              alert(`Error deleting job: ${error.message}`);
            });
        }
      });
    } else {
      // User is not signed in, do something else
    }
  });  
