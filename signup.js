function signupval() {
    var username = document.getElementById('name').value;
    var useremail = document.getElementById('email').value;
    var usernumber = document.getElementById('number').value;
    var userpassword = document.getElementById('password').value;
    var cpassword = document.getElementById('confirmpassword').value;


    var inputname = /^[A-Za-z ]{4,}$/;
    var inputemail = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var inputnumber = /^[0-9]{10}$/;
    var inputpassword = /^[A-Za-z0-9_!@#$%^&*]{6,16}$/;

    if (inputname.test(username)) {
        document.getElementById('errorname').innerHTML = ""
    } else {
        document.getElementById('errorname').innerHTML = "please use minimum of 4 alphabets";
        return false;
    }
    if (inputemail.test(useremail)) {
        document.getElementById('erroremail').innerHTML = ""
    } else {
        document.getElementById('erroremail').innerHTML = "please give a valid email id";
        return false;
    }
    if (inputnumber.test(usernumber)) {
        document.getElementById('errornumber').innerHTML = ""
    } else {
        document.getElementById('errornumber').innerHTML = "please give a valid mobile number";
        return false;
    }
    if (inputpassword.test(userpassword)) {
        document.getElementById('errorpassword').innerHTML = " ";
    } else {
        document.getElementById('errorpassword').innerHTML = "Please use alphabet, numeric, special character";
        return false;
    }

    if (cpassword.match(userpassword)) {
        document.getElementById('errorcpassword').innerHTML = " ";
    } else {
        document.getElementById('errorcpassword').innerHTML = "Password is not matching";
        return false;
    }

}