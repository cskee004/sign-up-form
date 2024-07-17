var password = document.getElementById("pwd")
, confirmPassword = document.getElementById("cpwd");

password.value = "abc!1";
confirmPassword.value = "abc!1";

function validatePassword() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match")
        console.log("passwords dont match");
    }
    else {
        confirmPassword.setCustomValidity('');
        console.log("passwords match")
    }
}

validatePassword();
/* 
password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
*/

var fName = document.getElementById("fname")
, lName = document.getElementById("lname");
