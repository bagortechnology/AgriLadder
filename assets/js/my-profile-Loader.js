



// Call the function when the page is loaded
window.addEventListener('load', () => {
    displayEducBackInfo();
});


window.addEventListener('load', displayInfos);

let userInfoRef = child(userRef, 'userInfo');

// Listen for changes to the userInfo node
on(userInfoRef, (snapshot) => {
    const userInfo = snapshot.val();

    if (userInfo) {
        // Update HTML elements with data from userInfo node
        document.getElementById("fName").value = userInfo.fName;
        document.getElementById("mName").value = userInfo.mName;
        document.getElementById("lName").value = userInfo.lName;
        document.getElementById("pob").value = userInfo.pob;
        document.getElementById("dob").value = userInfo.dob;
        document.querySelector('input[name="gender"][value="' + userInfo.gender + '"]').checked = true;
        document.querySelector('input[name="cStatus"][value="' + userInfo.cStatus + '"]').checked = true;

        document.getElementById("eMail").value = userInfo.eMail;
        document.getElementById("mob1").value = userInfo.mob1;
        document.getElementById("mob2").value = userInfo.mob2;

        document.getElementById("homeStreet").value = userInfo.homeStreet;
        document.getElementById("municipal").value = userInfo.municipal;
        document.getElementById("region").value = userInfo.region;
    }
});



let displayEducBackInfo = () => {
    let educBgRef = child(userRef, 'educBg');

    onValue(educBgRef, (snapshot) => {
        const educBg = snapshot.val();

        if (educBg) {
            document.getElementById("school1").value = educBg[0].school1;
            document.getElementById("dateGrad1").value = educBg[0].dateGrad1;

            let degree1Select = document.getElementById("degree1");
            let degree1 = educBg[0].degree1;

            switch (degree1) {
                case "Elementary Graduate":
                    degree1Select.value = "1";
                    break;
                case "High School Graduate":
                    degree1Select.value = "2";
                    break;
                case "Associates degree":
                    degree1Select.value = "3";
                    break;
                case "Bachelors Degree":
                    degree1Select.value = "4";
                    break;
                case "Masteral":
                    degree1Select.value = "5";
                    break;
                default:
                    degree1Select.value = "";
            }
        }
    });
};






let displayWorkExp = (e) => {
    document.getElementById("compName1").value = data.workExp[0].compName1;
    document.getElementById("position1").value = data.workExp[0].position1;
    document.getElementById("dateHire1").value = data.workExp[0].dateHire1;
    document.getElementById("dateEnd1").value = data.workExp[0].dateEnd1;

    document.getElementById("compName2").value = data.workExp[1].compName2;
    document.getElementById("position2").value = data.workExp[1].position2;
    document.getElementById("dateHire2").value = data.workExp[1].dateHire2;
    document.getElementById("dateEnd2").value = data.workExp[1].dateEnd2;
};



displayInfos();
displayEducBG();
displayWorkExp();



