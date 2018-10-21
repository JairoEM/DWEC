// Worksheet 3

function iNameAprobe(){
    var name = document.getElementById("iName").value;
    var regName = new RegExp("/^[a-zA-Z]*$/");
    if(regName.test(name)){
        return true;
    }else{
        return false;
    }
}

function formAprobe(){
    var name = document.getElementById("iName");
    var surname = document.getElementById("iSurname");
    var username = document.getElementById("iUserName");
    var telephone = document.getElementById("iTelephone");
    var dni = document.getElementById("iDNI");
    var email = document.getElementById("iEmail");
    var textArea = document.getElementById("taText");

    if(name.length>0 && surname.length>0 && username.length>0 && telephone.length>0 && dni.length>0 && email.length>0 && textArea.length>0){

    }else{
        alert("Fill the empty areas to validate");
    }
}