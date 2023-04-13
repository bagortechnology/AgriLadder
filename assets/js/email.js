function sendEmail() {
    // Get input values
    let FName = document.getElementById("inputFName").value.trim();
    let LName = document.getElementById("inputLName").value.trim();
    let subject = document.getElementById("inputSubject").value.trim();
    let email = document.getElementById("inputEmail").value.trim();
    let message = document.getElementById("inputMessage").value.trim();

    // Validate input values
    if (FName === "" || LName === "" || subject === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Validate email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Compose email body
    let body = "Name: " + FName + " " + LName + "<br/> Message: " + message;

    // Send email to recipient
    Email.send({
        SecureToken : "fbbd1a2e-0d38-4ddb-b7a6-ed55c95975dd",
        To : email,
        From : 'agriladder@gmail.com',
        Subject : subject,
        Body : body
    }).then(
      recipientMessage => {
        // Send email to owner
        Email.send({
          SecureToken : "fbbd1a2e-0d38-4ddb-b7a6-ed55c95975dd",
          To : "sidongbagor@gmail.com",
          From : "agriladder@gmail.com",
          Subject : "New message from " + FName + " " + LName,
          Body : "Sender Email: " + email + "<br/> Message:  " + body + "<br/> Email Status: " + recipientMessage 
        }).then(
          ownerMessage => {
            // Clear input fields and display success alert
            document.getElementById("inputFName").value = "";
            document.getElementById("inputLName").value = "";
            document.getElementById("inputSubject").value = "";
            document.getElementById("inputEmail").value = "";
            document.getElementById("inputMessage").value = "";
            alert("Email sent to successfully!");
          },
          ownerError => {
            alert("Error sending email!");
          }
        );
      },
      recipientError => {
        alert("Error sending email!");
      }
    );
}
