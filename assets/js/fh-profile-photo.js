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
const fileUpload = document.getElementById("file-upload");

// Add an event listener to the file upload input element to listen for changes
fileUpload.addEventListener("change", (event) => {
  // Get the file object from the file upload input element
  const file = event.target.files[0];

  // Get a reference to the storage location where the file should be uploaded
  const storageLocation = storageRef(storage, "profile-photos/");
  const userRole = 'farmhand';
  // Upload the file to the storage location
uploadBytes(storageLocation, file).then((snapshot) => {
  // Get the download URL of the uploaded file
  getDownloadURL(snapshot.ref).then((downloadURL) => {
    // Update the realtime database with the download URL of the uploaded file
    update(ref(database, `users/${userRole}/${user.uid}`), { photoURL: downloadURL }).then(() => {
      // Inform the user that the photo has been uploaded successfully
      alert("Photo uploaded successfully!");
    }).catch((error) => {
      // Inform the user if there was an error uploading the photo
      alert("Error uploading photo: " + error.message);
    });
  });
}).catch((error) => {
  // Inform the user if there was an error uploading the photo
  alert("Error uploading photo: " + error.message);
});
});

// Get the current user's profile photo
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, check their role
    const userRole = 'farmhand';
    const userRef = ref(database, `users/${userRole}/${user.uid}`);
    get(userRef).then((snapshot) => {
      const userData = snapshot.val();
      const photoUrl = userData.photoURL;
      if (photoUrl) {
        const photo = document.getElementById('photo');
        photo.src = photoUrl;
      }
    }).catch((error) => {
      console.error('Error getting profile photo data:', error);
    });
  }
});
