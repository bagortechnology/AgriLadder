function sendEmail() {
    let FName = document.getElementById("inputFName").value;
    let LName = document.getElementById("inputLName").value;
    let subject = document.getElementById("inputSubject").value;
    let email = document.getElementById("inputEmail").value;
    let message = document.getElementById("inputMessage").value;

    let body = "Name: " + FName + " " + LName +"<br/> Message: " + message;

    Email.send({
        SecureToken : "324dbbf6-80a6-48b0-bbc0-8b9e54ba427f",
        To : email,
        From : 'info@agriladder.com',
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
}