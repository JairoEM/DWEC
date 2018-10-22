// Worksheet 4 Unit 4

//Exercise 1

function setCookie(cname){
    document.cookie = cname + "=" + document.getElementById("username").value + ";expires=300000;path=/";
}

function getCookie(cname) {
    var name = cname +"=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user +"!");
    } else {
        alert("Please enter your name in the text field:");
       if (user != "" && user != null) {
           setCookie("username");
       }
    }
}

function deleteCookie(cname){
    document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
}