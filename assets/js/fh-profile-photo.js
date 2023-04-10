import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
    import { getDatabase, ref, get, set,update} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
    import { getAuth,} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

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

  // Listen for the file input change event
  const fileUpload = document.getElementById('file-upload');
  fileUpload.addEventListener('change', function() {
    // Get the selected file
    const file = fileUpload.files[0];

    // Check if a file was selected
    if (file) {
      // Check the file type
      const fileType = file.type;
      if (fileType != 'image/png' && fileType != 'image/jpeg') {
        alert('Please upload a PNG or JPEG image.');
        return;
      }

      // Check the file size
      const fileSize = file.size;
      const maxSize = 1024 * 1024; // 1 MB
      if (fileSize > maxSize) {
        alert('Please upload an image that is smaller than 1 MB.');
        return;
      }

      // Create a new FileReader object
      const reader = new FileReader();

      // Set the image source once the file has been loaded
      reader.onload = function(e) {
        const image = document.querySelector('.image-upload img');
        image.src = e.target.result;
      }

      // Read the selected file as a data URL
      reader.readAsDataURL(file);

      // Check the image dimensions once the file has been loaded
      reader.onloadend = function() {
        const image = new Image();
        image.src = reader.result;
        image.onload = function() {
          const minWidth = 512;
          const minHeight = 512;
          const width = this.width;
          const height = this.height;
          if (width < minWidth || height < minHeight || width != height) {
            alert('Please upload an image that is at least 512x512 pixels and square.');
            const image = document.querySelector('.image-upload img');
            image.src = '/assets/images/Chat Profile.png'; // Reset to default image
          }
        };
      }
    }
  });