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
            fName: 'MyName',
            mName: 'MiddleName',
            lName: 'MyLastName',
            pob: 'baler',
            dob: '1990.12.28', //check data format
            sex: 'male', // see option for bolean
            civilStatus: 'maried',
        }
    ],
    contactInfo: [
        {
            eMail: 'ronquillo.kris@gmail.com',
            mob1: '09770153300',
            mob2: '09170153311',
            pob: 'baler',
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
            school: 'college1',
            dateGrad: '1995.12.28',
            degree: 'associate',
        },
        {
            school: 'college2',
            dateGrad: '2000.12.28',
            degree: 'associate',
        }
    ],
    workExp: [ // default of 2-Ecp - see option for additional
        {
            compName: 'Company Name One',
            position: 'assistant planter',
            dateHire: '2015.12.28',
            dateEnd: '2017.12.28',
        }
        ,
        {
            compName: 'Company Name Two',
            position: 'assistant miller',
            dateHire: '2018.12.28',
            dateEnd: '2020.12.28',
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
                region: 'region'
            }
        }
    ]
}
