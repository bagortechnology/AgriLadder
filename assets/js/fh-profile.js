import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
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
const emailInput = form.querySelector("#email");
const mobileInput = form.querySelector("#mobile");
const birthDateInput = form.querySelector("#birthDate");
const genderInputs = form.querySelectorAll("input[name='gender']");
const portfolioInput = form.querySelector("#portfolio");
const aboutMeInput = form.querySelector("#about-me");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fName = fNameInput.value;
  const mName = mNameInput.value;
  const lName = lNameInput.value;
  const email = emailInput.value;
  const mobile = mobileInput.value;
  const birthDate = birthDateInput.value;
  const gender = [...genderInputs].find((input) => input.checked).value;
  const portfolio = portfolioInput.value;
  const aboutMe = aboutMeInput.value;

  const data = {
    name: {
      first: fName,
      middle: mName,
      last: lName,
    },
    email,
    mobile,
    birthDate,
    gender,
    portfolio,
    aboutMe,
  };
  const userRole = 'farmhand';

  // Get the current authenticated user
  const user = auth.currentUser;
  // Update the database
  update(ref(database, `users/${userRole}/${user.uid}`), data);

  // Display the input data inside the respective form field
  fNameInput.value = fName;
  mNameInput.value = mName;
  lNameInput.value = lName;
  emailInput.value = email;
  mobileInput.value = mobile;
  birthDateInput.value = birthDate;
  genderInputs.forEach((input) => (input.checked = input.value === gender));
  portfolioInput.value = portfolio;
  aboutMeInput.value = aboutMe;
});