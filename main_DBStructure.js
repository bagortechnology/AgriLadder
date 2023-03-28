let data = {
    validation: [ //this will be called upon login to compare validation input
        {
            userType: 'Employee', // if emplpyee,employer or admin
            userName: 'Myusername',
            passWord: 'password123',
        }
    ],
    userInfo: [
        {
            fName: 'My Name',
            mName: 'MiddleName',
            lName: 'MyLastName',
            pob: 'baler',
            dob: '1985-12-28', //check data format
            gender: 'male', // see option for bolean
            cStatus: 'single',
        }
    ],
    contactInfo: [
        {
            eMail: 'ronquillo.kris@gmail.com',
            mob1: '09770153300',
            mob2: '09170153311',
        }
    ],
    address: [
        {
            homeStreet: 'Lanzones st ',
            municipal: 'Caloocan City ',
            region: 'Metro Manila',

        }
    ],
    companyDetails: [ // needs restructure if needed - this is only for employer 
        {
            companyName: 'The Golden Grain',
            compProf: 'this is a a company that produce and plan rice for the whole region ',
            compAdd: 'Sarangani region',
        }
    ],
    educBg: [ // default of 2-educBG - see option for additional
        {
            school1: 'college1',
            dateGrad1: '1995-12-28T00:00:00Z',
            degree1: 'High School Graduate',
        },
        {
            school2: 'college2',
            dateGrad2: '2000-12-28',
            degree2: 'Associates degree',
        }
    ],
    workExp: [ // default of 2-Ecp - see option for additional
        {
            compName1: 'Company Name One',
            position1: 'assistant planter',
            dateHire1: '2015-12-28',
            dateEnd1: '2017-12-28',
        }
        ,
        {
            compName2: 'Company Name Two',
            position2: 'assistant miller',
            dateHire2: '2018-12-28',
            dateEnd2: '2020-12-28',
        }
    ]
}
// for Employer Post 

let jobPost = {
    jobPostKey: 'Myusername', // key for posting and search
    jobPostings: [
        {
            JobPostTitle: 'Employee', // if emplpyee,employer or admin
            JobPostBody: 'Myusername',
            criteria: {
                skill1: 'skill1',
                skill2: 'skill2',
                region: 'region',
            }
        },
    ]
}

// let msg = document.getElementById("msg").innerHTML = "hello";

// let records = [];

// let acceptRecords = () => {
//     records.push({
//         firstName: fNmae.value,
//         middleName: mName.value,
//         lastName: lName.value,
//     });
// };




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

//Tab Control
$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})


