
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

  if (farmHand.length > 0) {
    for (let i = 0; i < farmHand.length; i++) {
      if (farmHand[i].hasOwnProperty('fName') && farmHand[i].fName === userInfo.fName) {
        // update existing object
        farmHand[i] = userInfo;
        return;
      }
    }
  }
  farmHand.push(userInfo); // push object into array
};

// getEducBack Function

let getEducBackInfo = () => {
  let educBackInfo = {
    school1: school1.value,
    dateGrad1: dateGrad1.value,
    degree1: degree1.value,

    school2: school2.value,
    dateGrad2: dateGrad2.value,
    degree2: degree2.value
  };

  farmHand.push(educBackInfo);
};
// getWorkExp Function
let getWorkExpInfo = () => {
  let workExpInfo = {
    compName1: compName1.value,
    position1: position1.value,
    dateHire1: dateHire1.value,
    dateEnd1: dateEnd1.value,

    compName2: compName2.value,
    position2: position2.value,
    dateHire2: dateHire2.value,
    dateEnd2: dateEnd2.value,
  };

  farmHand.push(workExpInfo);
};

// //Tab Control
// $('#myTab a').on('click', function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// });

// //Upload  profile image

const uploadBtn = document.getElementById("uploadImg-btn");
const imgInput = document.getElementById("imgInput");
const imgPreview = document.getElementById("imgPreview");
const imgPreviewIco = document.getElementById("imgIco");


uploadBtn.addEventListener("click", function () {
  imgInput.click();
});

imgInput.addEventListener("change", function () {
  const file = imgInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    imgPreview.src = reader.result;
    imgPreviewIco.src = reader.result;

    let getuserPhoto = () => {
      let userPhoto = {
        userPhoto: reader.result,
      };
      farmHand.push(userPhoto);
    };
    getuserPhoto();
    console.log(farmHand);
  });
  if (file) {
    reader.readAsDataURL(file);
  }
});


