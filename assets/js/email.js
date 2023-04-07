function sendEmail() {
    let FName = document.getElementById("inputFName").value;
    let LName = document.getElementById("inputLName").value;
    let subject = document.getElementById("inputSubject").value;
    let email = document.getElementById("inputEmail").value;
    let message = document.getElementById("inputMessage").value;

    let body = "Name: " + FName + " " + LName +"<br/> Message: " + message;

    Email.send({
        SecureToken : "b1764bdb-aab4-4b6c-9097-dced334622f5",
        To : email,
        From : 'agriladder@gmail.com',
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
}