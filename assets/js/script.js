//CRUD - Create, Read, Update, Delete

//Global Variables
var row = null;

function submitName() {
    var nameInput = retrieveData();
    var readData = readingDataFromLocalStorage(nameInput);
    if (row == null) {
        insert(readData);
        msg.innerHTML = "Data Inserted"
    } else {
        update();
        msg.innerHTML = "Data Updated"
    }
}

//Retrieve data froma form
function retrieveData() {
    var fName = document.getElementById("fName").value;
    var mName = document.getElementById("mName").value;
    var lName = document.getElementById("lName").value;

    var nameArr = [fName, mName, lName];
    return nameArr;
}

//Read
//Data in local storage
function readingDataFromLocalStorage(nameInput) {
    //Storing data in local storage
    var f = localStorage.setItem("fName", nameInput[0]);
    var m = localStorage.setItem("mName", nameInput[1]);
    var l = localStorage.setItem("lName", nameInput[2]);

    //Get values from Local to Table
    var f1 = localStorage.getItem("fName", f);
    var m1 = localStorage.getItem("mName", m);
    var l1 = localStorage.getItem("lName", l);

    var nameArr = [f1, m1, l1];
    return nameArr;

}

//Insert
function insert(readData) {
    var row = nameTable.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button onClick = edit(this) >Edit</button> 
    <button onClick = delete(this)>Delete</button>`;

}
//Edit
function edit(td) {
    row = td.parentElement.parentElement;
    document.getElementById("fName").value = row.cells[0].innerHTML;
    document.getElementById("mName").value = row.cells[1].innerHTML;
    document.getElementById("lName").value = row.cells[2].innerHTML;
}
//Update
function Update() {
    row.cells[0].innerHTML = document.getElementById("fName").value;
    row.cells[1].innerHTML = document.getElementById("mName").value;
    row.cells[2].innerHTML = document.getElementById("lName").value;
    row = null;
}

//delete
