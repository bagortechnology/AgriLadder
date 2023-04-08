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

// // check authentication
// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     // User is signed in, get their UID
//     const uid = user.uid;

//     // TODO: Use the UID to save data to the database
//   } else {
//     // User is signed out
//   }
// });

// const dbRef = firebase.database().ref("users/farmhand/" + uid);













//----------------------------------------------------------------------

// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// Value Delaration
let formPersonalInfo = document.getElementById("formPersonalInfo");
let formEducBacklInfo = document.getElementById("formEducBacklInfo");
let formWorkExpInfo = document.getElementById("formWorkExpInfo ");
const farmHand = [];  // array


// dont forget on load event to load all element 
// Event Lisener for submitform
formPersonalInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  getUserInfo();

  console.log(farmHand);
  alert('Record Saved')
});

formEducBacklInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  getEducBackInfo();

  console.log(farmHand);
  alert('Record Saved')
});

formWorkExpInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  getWorkExpInfo();

  console.log(farmHand);
  alert('Record Saved')
});

formPortfolioInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  getPortfolioInfo();

  console.log(farmHand);
  alert('Record Saved')
});



// --------------------------------------------------------

//let user = firebase.auth().currentUser;  // this cause the error, make sure you are login


let getUserInfo = () => { // getUserInfo Function
  let userInfo = {    // put properties into object
    fName: fName.value,
    mName: mName.value,
    lName: lName.value,
    pob: pob.value,
    dob: dob.value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    cStatus: document.querySelector('input[name="cStatus"]:checked').value,
    eMail: eMail.value,
    mob1: mob1.value,
    mob2: mob2.value,
    homeStreet: homeStreet.value,
    municipal: municipal.value,
    region: region.value,
  };

  farmHand.push(userInfo); // push object into array

};


// getEducBack Function

let getEducBackInfo = () => {
  let educBackInfo = {
    school1: school1.value,
    dateGrad1: dateGrad1.value,
    degree1: degree1.value,

    // school2: school2.value,
    // dateGrad2: dateGrad2.value,
    // degree2: degree2.value
  };

  farmHand.push(educBackInfo);

  // dbRef.child("educBackInfo").set(educBackInfo)
  //   .then(function () {
  //     console.log("Data saved successfully");
  //   })
  //   .catch(function (error) {
  //     console.error("Error saving data:", error);
  //   });


};


// getWorkExp Function
let getWorkExpInfo = () => {
  let workExpInfo = {
    compName1: compName1.value,
    position1: position1.value,
    dateHire1: dateHire1.value,
    dateEnd1: dateEnd1.value,

    // compName2: compName2.value,
    // position2: position2.value,
    // dateHire2: dateHire2.value,
    // dateEnd2: dateEnd2.value,
  };

  farmHand.push(workExpInfo);
  // set(ref(database, "FarmHand\workExpInfo"), workExpInfo);
};

// getWorkExp Function
let getPortfolioInfo = () => {

  let PortfolioInfo = {
    videoUrl: videoUrl.value,
    url: url.value,

  };

  farmHand.push(PortfolioInfo);

};


// //Upload  profile image

const uploadBtn = document.getElementById("uploadImg-btn");
const imgInput = document.getElementById("imgInput");
const imgPreview = document.getElementById("imgPreview");
const imgPreviewIco = document.getElementById("imgIco");
const imgPreviewModal = document.getElementById("imgPreviewModal");

uploadBtn.addEventListener("click", function () {
  imgInput.click();
});

imgInput.addEventListener("change", function () {
  const file = imgInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // Check if a new image has been selected
    if (file) {
      imgPreview.src = reader.result;
      imgPreviewModal.src = reader.result;
      imgPreviewIco.src = reader.result;

      let getuserPhoto = () => {
        let userPhoto = {
          userPhoto: reader.result,
        };

        // Check if an image already exists in the array
        const existingImageIndex = farmHand.findIndex(
          (item) => item.userPhoto !== undefined
        );
        if (existingImageIndex !== -1) {
          farmHand[existingImageIndex] = userPhoto;
        } else {
          farmHand.push(userPhoto);
        }

        // set(ref(database, "FarmHand"), userPhoto);
      };

      getuserPhoto();
      console.log(farmHand);
      alert('Record Saved')
    }
  });

  if (file) {
    reader.readAsDataURL(file);
  }
});
