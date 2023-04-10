import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, get, set, update} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { getAuth,} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
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

const fileUpload = document.getElementById('file-upload');
fileUpload.addEventListener('change', function() {
const file = fileUpload.files[0];

  if (file) {
    const fileType = file.type;
    if (fileType != 'image/png' && fileType != 'image/jpeg') {
      alert('Please upload a PNG or JPEG image.');
      return;
    }

    const fileSize = file.size;
    const maxSize = 1024 * 1024; // 1 MB
    if (fileSize > maxSize) {
      alert('Please upload an image that is smaller than 1 MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      const image = document.querySelector('.image-upload img');
      image.src = e.target.result;

      const storageRef = storageRef(storage, 'profile-photos/' + file.name);
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a file:', snapshot.metadata.fullPath);
        
        const userUid = auth.currentUser.uid;
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
          
          update(ref(database, `users/${userRole}/${user.uid}`), {
            photoURL: downloadURL
          }).then(() => {
            console.log('Image URL updated in the database.');
          }).catch((error) => {
            console.error('Error updating image URL in the database:', error);
          });
        }).catch((error) => {
          console.error('Error getting download URL:', error);
        });
      }).catch((error) => {
        console.error('Error uploading file:', error);
      });
    }
    reader.readAsDataURL(file);
  }
});