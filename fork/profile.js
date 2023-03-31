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

    farmHand.push(workExp);
};






//Tab Control
$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
});



