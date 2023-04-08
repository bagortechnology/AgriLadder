

// Data Loader



let displayInfos = (e) => {
    document.getElementById("fName").value = data.userInfo[0].fName;
    document.getElementById("mName").value = data.userInfo[0].mName;
    document.getElementById("lName").value = data.userInfo[0].lName;
    document.getElementById("pob").value = data.userInfo[0].pob;
    document.getElementById("dob").value = data.userInfo[0].dob;
    document.querySelector('input[name="gender"][value="' + data.userInfo[0].gender + '"]').checked = true;
    document.querySelector('input[name="cStatus"][value="' + data.userInfo[0].cStatus + '"]').checked = true;
    document.getElementById("eMail").value = data.contactInfo[0].eMail;
    document.getElementById("mob1").value = data.contactInfo[0].mob1;
    document.getElementById("mob2").value = data.contactInfo[0].mob2;
    document.getElementById("homeStreet").value = data.address[0].homeStreet;
    document.getElementById("municipal").value = data.address[0].municipal;
    document.getElementById("region").value = data.address[0].region;
};

let displayEducBG = (e) => {
    document.getElementById("school1").value = data.educBg[0].school1;
    document.getElementById("dateGrad1").value = data.educBg[0].dateGrad1;
    let degree1Select = document.getElementById("degree1");
    let degree1 = data.educBg[0].degree1;
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
    document.getElementById("school2").value = data.educBg[1].school2;
    document.getElementById("dateGrad2").value = data.educBg[1].dateGrad2;
    let degree2Select = document.getElementById("degree2");
    let degree2 = data.educBg[1].degree2;
    switch (degree2) {
        case "Elementary Graduate":
            degree2Select.value = "1";
            break;
        case "High School Graduate":
            degree2Select.value = "2";
            break;
        case "Associates degree":
            degree2Select.value = "3";
            break;
        case "Bachelors Degree":
            degree2Select.value = "4";
            break;
        case "Masteral":
            degree2Select.value = "5";
            break;
        default:
            degree2Select.value = "";
    }
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



