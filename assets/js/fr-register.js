import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

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


const signUpForm = document.getElementById('registerForm');

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = signUpForm.username.value;
  const email = signUpForm.email.value;
  const password = signUpForm.pwd.value;

  // Get the current date in mm-dd-yyyy format
  const createdAt = new Date().toLocaleDateString('en-US');
  // Define user role
  const userRole = 'farmer';
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      //send to the database
      set(ref(database, `users/${userRole}/${user.uid}`), {
        email: email,
        createdAt: createdAt,
        username: username,
        role: userRole // Include user role in the database
      })
      .then(() => {
        // Clear the form inputs
        signUpForm.username.value = '';
        signUpForm.email.value = '';
        signUpForm.pwd.value = '';

        // Display success message
        const alert = document.createElement('div');
        alert.className = 'alert alert-success mt-3';
        alert.setAttribute('role', 'alert');
        alert.innerText = 'Registration successful!';

        const cardBody = document.querySelector('.card-body');
        cardBody.insertBefore(alert, signUpForm);

        // Redirect to login page
        setTimeout(() => {
          window.location.href = '/farmer/login.html';
        }, 2000);
      })
      .catch((error) => {
        // Display error message
        const alert = document.createElement('div');
        alert.className = 'alert alert-danger mt-3';
        alert.setAttribute('role', 'alert');
        alert.innerText = error.message;

        const cardBody = document.querySelector('.card-body');
        cardBody.insertBefore(alert, signUpForm);
      });
    })
    .catch((error) => {
      // Display error message
      const alert = document.createElement('div');
      alert.className = 'alert alert-danger mt-3';
      alert.setAttribute('role', 'alert');
      alert.innerText = error.message;

      const cardBody = document.querySelector('.card-body');
      cardBody.insertBefore(alert, signUpForm);
    });
});
