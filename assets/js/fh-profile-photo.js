import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, get, set, update} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { getStorage, ref as storageRef, uploadBytes } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-storage.js";

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

// Get the file input and image elements
const fileUpload = document.getElementById("file-upload");
const photo = document.getElementById("photo");

// Listen for changes to the file input
fileUpload.addEventListener("change", function(event) {
  // Get the selected file
  const file = event.target.files[0];
  
  // Create a reference to the Firebase storage location
  const storageLocation = storageRef(storage, "profile-photos/" + file.name);
  
  // Upload the file to Firebase storage
  uploadBytes(storageLocation, file).then((snapshot) => {
    console.log("File uploaded successfully!");
    
    // Get the download URL for the uploaded file
    snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log("Download URL:", downloadURL);
      
      // Update the user's profile photo URL in the Firebase database
      const userId = auth.currentUser.uid;
      const userRef = ref(database, "users/" + userId);
      update(userRef, { photoURL: downloadURL }).then(() => {
        console.log("Profile photo URL updated successfully!");
        
        // Update the image source in the frontend
        photo.src = downloadURL;
      }).catch((error) => {
        console.error("Error updating profile photo URL:", error);
      });
    }).catch((error) => {
      console.error("Error getting download URL:", error);
    });
  }).catch((error) => {
    console.error("Error uploading file:", error);
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
