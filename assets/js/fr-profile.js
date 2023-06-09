import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, get, update } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
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
    
const form = document.querySelector(".container");
const fNameInput = form.querySelector("#FName");
const mNameInput = form.querySelector("#MName");
const lNameInput = form.querySelector("#LName");
const farmRegNameInput = form.querySelector("#farmRegName");
const emailInput = form.querySelector("#email");
const mobileInput = form.querySelector("#mobile");
const farmWebsiteInput = form.querySelector("#farmWebsite");
const aboutFarmInput = form.querySelector("#aboutFarm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fName = fNameInput.value;
  const mName = mNameInput.value;
  const lName = lNameInput.value;
  const farmRegName = farmRegNameInput.value;
  const email = emailInput.value;
  const mobile = mobileInput.value;
  const farmWebsite = farmWebsiteInput.value;
  const aboutFarm = aboutFarmInput.value;

  

  const data = {
    fName,
    mName,
    lName,
    farmRegName,
    email,
    mobile,
    farmWebsite,
    aboutFarm

  };

  const userRole = 'farmer';
  // Get the current authenticated user
  const user = auth.currentUser;
    // Update the user's data in the database
    update(ref(database, `users/${userRole}/${user.uid}`), data)
    .then(() => {
      alert("Profile data updated successfully!");
    })
    .catch((error) => {
      alert("Error updating profile data: " + error.message);
    });
  });

// Get the current authenticated user
const user = auth.currentUser;
 const userRole = 'farmer';
// Listen for changes in the user's authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Get the user's data from the database
    get(ref(database, `users/${userRole}/${user.uid}`)).then((snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Update the input fields with the user's data
        fNameInput.value = data.fName ?? "";
        mNameInput.value = data.mName ?? "";
        lNameInput.value = data.lName ?? "";
        farmRegNameInput.value = data.farmRegName ?? "";
        emailInput.value = data.email ?? "";
        mobileInput.value = data.mobile ?? "";
        farmWebsiteInput.value = data.farmWebsite ?? "";
        aboutFarmInput.value = data.aboutFarm ?? "";

      }      
    });
  }
});
