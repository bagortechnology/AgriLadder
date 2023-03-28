
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


    // get form element
    const form = document.getElementById("registerForm");

    // add event listener for form submission
    form.addEventListener("submit", function(event) {
        // prevent form submission if there are invalid fields or password is too weak
        var passwordStrengthScore = zxcvbn($('#pwdRegFh').val()).score;
        if (form.checkValidity() === false || passwordStrengthScore < 2) {
            event.preventDefault();
            event.stopPropagation();

            // add 'was-validated' class to show validation feedback
            form.classList.add("was-validated");

            // show error message for password strength
            if (passwordStrengthScore < 2) {
                $('#password-strength').removeClass().addClass('text-danger small').text('Password must be at least medium strength.');
            }
        } else {
            // clear any error messages
            $('#password-strength').removeClass().addClass('text-muted small').text('');
            form.classList.add("was-validated");

            // check if password and confirm password match
            const password = document.getElementById("pwdRegFh");
            const confirmPassword = document.getElementById("confirmPwdRegFh");

            if (password.value !== confirmPassword.value) {
                // prevent form submission if passwords don't match
                event.preventDefault();
                event.stopPropagation();

                // add 'was-validated' class to show validation feedback
                form.classList.add("was-validated");

                // show error message for confirm password
                confirmPassword.setCustomValidity("Passwords must match");
            } else {
                confirmPassword.setCustomValidity("");
            }
        }
    });

    // add event listener to remove custom validity on input change
    const confirmPassword = document.getElementById("confirmPwdRegFh");
    confirmPassword.addEventListener("input", function() {
        confirmPassword.setCustomValidity("");
    });
});