function validation(){
    var username=document.getElementById('name').value;
    var  useremail=document.getElementById('email').value;
    var usernumber=document.getElementById('mobilenumber').value;
    var  userpincode=document.getElementById('pincode').value;
    var  userdistrict=document.getElementById('district').value;
    var userstate=document.getElementById('state').value;


    var inputname=/^[A-Za-z ]{4,}$/;
    var inputemail = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var inputnumber=/^[0-9]{10}$/;
    var inputpincode=/^[0-9]{6}$/;
    var inputdistrict=/^[A-Za-z ]{3,}$/;
    var inputstate=/^[A-Za-z ]{3,}$/;

    if(inputname.test(username)){
        document.getElementById('errorname').innerHTML=""
    }
    else{
        document.getElementById('errorname').innerHTML="please use minimum of 4 alphabets";
        return false;
    }
    if(inputemail.test(useremail)){
        document.getElementById('erroremail').innerHTML=""
    }
    else{
        document.getElementById('erroremail').innerHTML="please give a valid email id";
        return false;
    }
    if(inputnumber.test(usernumber)){
        document.getElementById('errornumber').innerHTML=""
    }
    else{
        document.getElementById('errornumber').innerHTML="please give a valid mobile number";
        return false;
    }
    if(inputpincode.test(userpincode)){
        document.getElementById('errorpincode').innerHTML=""
    }
    else{
        document.getElementById('errorpincode').innerHTML="please give a valid 6 digit pincode";
        return false;
    }
    if(inputdistrict.test(userdistrict)){
        document.getElementById('errordistrict').innerHTML=""
    }
    else{
        document.getElementById('errordistrict').innerHTML="please give a valid district name minimum of 3 characters";
        return false;
    }
    if(inputstate.test(userstate)){
        document.getElementById('errorstate').innerHTML=""
    }
    else{
        document.getElementById('errorstate').innerHTML="please give a valid state name minimum of 3 characters";
        return false;
    }
}
