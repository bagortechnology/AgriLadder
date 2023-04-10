import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, get, update} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-storage.js";

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
const storage = getStorage();

// Get a reference to the file upload input element in the HTML code
const fileUploadInput = document.getElementById("file-upload");

// Add an event listener to the file upload input element to listen for changes
fileUploadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const storageLocationRef = storageRef(storage, "profile-photos/");
  const userRole = 'farmhand';

  // Upload the file to the storage location
  uploadBytes(storageLocationRef, file)
    .then((snapshot) => {
      // Get the download URL of the uploaded file
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        // Update the realtime database with the download URL of the uploaded file
        update(ref(database, `users/${userRole}/${auth.currentUser.uid}`), { photoURL: downloadURL })
          .then(() => {
            // Inform the user that the photo has been uploaded successfully
            alert("Photo uploaded successfully!");
          })
          .catch((error) => {
            // Inform the user if there was an error uploading the photo
            alert("Error uploading photo: " + error.message);
          });
      });
    })
    .catch((error) => {
      // Inform the user if there was an error uploading the photo
      alert("Error uploading photo: " + error.message);
    });
});

