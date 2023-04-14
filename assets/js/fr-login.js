import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
    import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
    import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

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

    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('login');

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginForm.email.value;
      const password = loginForm.pwd.value;

      // Get the current date in mm-dd-yyyy format
      const lastLogin = new Date().toLocaleDateString('en-US');
      // Define user role
      const userRole = 'farmer';
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          const user = userCredential.user;
          // Clear the form inputs
          loginForm.email.value = '';
          loginForm.pwd.value = '';

          // Check if user has the required role
          const userRef = ref(database, `users/${userRole}/${user.uid}`);
          get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
              //send to the database
              update(ref(database, 'users/farmer/' + user.uid), {
                lastLogin: lastLogin
              });
              // Display success message
              const alert = document.createElement('div');
              alert.className = 'alert alert-success mt-3';
              alert.setAttribute('role', 'alert');
              alert.innerText = 'Login successful!';

              const cardBody = document.querySelector('.card-body');
              cardBody.insertBefore(alert, loginForm);

              // User has the required role, // Redirect to farmhand dashboard page
              setTimeout(() => {
                window.location.href = '/farmer/farm-profile.html';
              }, 2000);
            } else {
              // User doesn't have the required role, display error message
              const alert = document.createElement('div');
              alert.className = 'alert alert-danger mt-3';
              alert.setAttribute('role', 'alert');
              alert.innerText = 'You need farmhand account to access this page.';

              const cardBody = document.querySelector('.card-body');
              cardBody.insertBefore(alert, loginForm);
            }
          })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          // Display error message
          const alert = document.createElement('div');
          alert.className = 'alert alert-danger mt-3';
          alert.setAttribute('role', 'alert');
          alert.innerText = error.message;

          const cardBody = document.querySelector('.card-body');
          cardBody.insertBefore(alert, loginForm);
        });
    });
