import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

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

// Get elements from the change password form
const changePasswordForm = document.querySelector('#change-password-form');
const emailInput = changePasswordForm['email'];
const currentPasswordInput = changePasswordForm['current-password'];
const newPasswordInput = changePasswordForm['new-password'];
const confirmPasswordInput = changePasswordForm['confirm-password'];

// Change password function
function changePassword() {
  const email = emailInput.value;
  const currentPassword = currentPasswordInput.value;
  const newPassword = newPasswordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  
  if (newPassword !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }
  
  // Reauthenticate the user with their current password
  const credential = firebase.auth.EmailAuthProvider.credential(email, currentPassword);
  firebase.auth().currentUser.reauthenticateWithCredential(credential)
  .then(() => {
    // Change the user's password
    firebase.auth().currentUser.updatePassword(newPassword)
    .then(() => {
      alert('Password changed successfully');
      changePasswordForm.reset();
    })
    .catch((error) => {
      alert(error.message);
    });
  })
  .catch((error) => {
    alert(error.message);
  });
}

// Submit event listener for the change password form
changePasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  changePassword();
});