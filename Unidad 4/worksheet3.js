// Worksheet 3

function iNameAprobe(){
    var value = document.getElementById("iName").value;
    var regExp = new RegExp("^[a-z A-Z]*$");
    if(regExp.test(value)){
        document.getElementById("iName").style.borderColor = "green";
    }else{
        document.getElementById("iName").style.borderColor = "red";
    }
}

function iSurnameAprobe(){
    var value = document.getElementById("iSurname").value;
    var regExp = new RegExp("^[a-z A-Z]*$");
    if(regExp.test(value)){
        document.getElementById("iSurname").style.borderColor = "green";
    }else{
        document.getElementById("iSurname").style.borderColor = "red";
    }
}

function iUserNameAprobe(){
    var value = document.getElementById("iUserName").value;
    var regExp = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$");
    if(regExp.test(value)){
        document.getElementById("iUserName").style.borderColor = "green";
    }else{
        document.getElementById("iUserName").style.borderColor = "red";
    }
}

function iTelephoneAprobe(){
    var value = document.getElementById("iTelephone").value;
    var regExp = new RegExp("^[0-9]{9}$");
    if(regExp.test(value)){
        document.getElementById("iTelephone").style.borderColor = "green";
    }else{
        document.getElementById("iTelephone").style.borderColor = "red";
    }
}

function iDNIAprobe(){
    var value = document.getElementById("iDNI").value;
    var regExp = new RegExp("^[0-9]{8}[A-Z]{1}$");
    if(regExp.test(value)){
        document.getElementById("iDNI").style.borderColor = "green";
    }else{
        document.getElementById("iDNI").style.borderColor = "red";
    }
}

function iEmailAprobe(){
    var value = document.getElementById("iEmail").value;
    var regExp = new RegExp("^[a-zA-Z0-9/*-_.]{1,}[@][a-z]{1,}.com$");
    if(regExp.test(value)){
        document.getElementById("iEmail").style.borderColor = "green";
    }else{
        document.getElementById("iEmail").style.borderColor = "red";
    }
}

function formAprobe(){
    var name = document.getElementById("iName").value;
    var surname = document.getElementById("iSurname").value;
    var username = document.getElementById("iUserName").value;
    var telephone = document.getElementById("iTelephone").value;
    var dni = document.getElementById("iDNI").value;
    var email = document.getElementById("iEmail").value;

    if(name.length>0 && surname.length>0 && username.length>0 && telephone.length>0 && dni.length>0 && email.length>0){
        iNameAprobe();
        iSurnameAprobe();
        iUserNameAprobe();
        iTelephoneAprobe();
        iDNIAprobe();
        iEmailAprobe();
        alert("Send correctly!")
    }else{
        alert("Fill the empty areas to validate");
    }
}