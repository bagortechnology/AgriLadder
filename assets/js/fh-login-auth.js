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
    const usernameDisplay = document.getElementById('username');

    // Listen for changes in the authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, check their role
      const userRole = 'farmhand';
      const userRef = ref(database, `users/${userRole}/${user.uid}`);
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const username = userData.username;
          usernameDisplay.innerText = username;
        } else {
          // User doesn't have the required role, sign them out
          auth.signOut();
        }
      })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // User is not signed in, redirect to login page
      window.location.href = '/farmhand/login.html';
    }
  });

const signOutLink = document.getElementById('logout');

signOutLink.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    // Display success message
    const alert = document.createElement('div');
    alert.className = 'alert alert-success mt-3';
    alert.setAttribute('role', 'alert');
    alert.innerText = 'You have been signed out successfully.';

    const cardBody = document.querySelector('.card-body');
    cardBody.insertBefore(alert, loginForm);

    // Redirect to the landing page
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  }).catch((error) => {
    console.error(error);
  });
});
