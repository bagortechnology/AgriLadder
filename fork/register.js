    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
    import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
  
    const firebaseConfig = {
      apiKey: "AIzaSyC3O2EEuaM2o-pzftNVuBs7m3KvvWI4xFI",
      authDomain: "agriladder-jobs.firebaseapp.com",
      projectId: "agriladder-jobs",
      storageBucket: "agriladder-jobs.appspot.com",
      messagingSenderId: "635800620871",
      appId: "1:635800620871:web:724d28204dd3878f36c662"
    };
  
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
$(document).ready(function() {
    // code for password strength meter
    $('#pwdRegFh').on('input', function() {
        var password = $(this).val();
        var result = zxcvbn(password);
        var score = result.score;
        var colorClass = '';
        var text = '';

        switch(score) {
            case 0:
                colorClass = 'bg-danger';
                text = 'Very Weak';
                break;
            case 1:
                colorClass = 'bg-warning';
                text = 'Weak';
                break;
            case 2:
                colorClass = 'bg-info';
                text = 'Medium';
                break;
            case 3:
                colorClass = 'bg-primary';
                text = 'Strong';
                break;
            case 4:
                colorClass = 'bg-success';
                text = 'Very Strong';
                break;
        }

        $('#password-strength').removeClass().addClass('text-muted small ' + colorClass).text(text);
    });
        //add event listener to reveal password option
    $('.reveal').click(function() {
        var passwordField = $('#pwdRegFh');
        var passwordFieldType = passwordField.attr('type');

        if (passwordFieldType == 'password') {
            passwordField.attr('type', 'text');
            $(this).html('<i class="fa fa-eye-slash"></i>');
        } else {
            passwordField.attr('type', 'password');
            $(this).html('<i class="fa fa-eye"></i>');
        }
    });

    // add event listener to reveal confirm password option
$('.reveal-confirm').click(function() {
    var confirmPasswordField = $('#confirmPwdRegFh');
    var confirmPasswordFieldType = confirmPasswordField.attr('type');

    if (confirmPasswordFieldType == 'password') {
        confirmPasswordField.attr('type', 'text');
        $(this).html('<i class="fa fa-eye-slash"></i>');
    } else {
        confirmPasswordField.attr('type', 'password');
        $(this).html('<i class="fa fa-eye"></i>');
    }
});

        // add event listener to remove custom validity on input change
        const confirmPassword = document.getElementById("confirmPwdRegFh");
        confirmPassword.addEventListener("input", function() {
            confirmPassword.setCustomValidity("");
        });
    });

    // get form element
    const form = document.getElementById("registerForm");

    // add event listener for form submission
    form.addEventListener("submit", function(event) {
        // prevent form submission if there are invalid fields or password is too weak
        var passwordStrengthScore = zxcvbn($('#pwdRegFh').val()).score;
        if (form.checkValidity() === false || passwordStrengthScore < 2) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Create user authentication record
            createUserWithEmailAndPassword(auth, $('#emailRegFh').val(), $('#pwdRegFh').val())
            .then((userCredential) => {
                const user = userCredential.user;
                // send user data to database
                set(ref(database, 'usersData/farmhand/' + user.uid), {
                    email: $('#emailRegFh').val(),
                    password: $('#pwdRegFh').val()
                });
                // Redirect to another page on successful registration
                window.location.href = "/farmhand/";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error creating user: ", error);
                alert(errorMessage);
            });
        }
    });
    