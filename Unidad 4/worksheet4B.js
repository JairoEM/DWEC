// Worksheet 4 Unit 4

// Exercise 2

function setCookie(cname, cvalue, exminuts){
    var d = new Date();
    d.setTime(d.getTime() + (exminuts*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" +  expires + ";path=/";
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

function checkCookieA() {
    var p = document.getElementById("pCookies");
    var user=getCookie("background-color");
    if (user != "") {
        p.style.backgroundColor = document.getElementById("background-color").value;
    } else {
       if (user != "" && user != null) {
           setCookie('background-color', document.getElementById('background-color').value, 300);
       }
    }
}

function checkCookieB() {
    var p = document.getElementById("pCookies");
    var user=getCookie("font-size");
    if (user != "") {
        p.style.fontSize = document.getElementById("font-size").value + "px";
    } else {
       if (user != "" && user != null) {
           setCookie('font-size', document.getElementById('font-size').value +  + "px", 300);
       }
    }
} 

function deleteCookie(cname){
    document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
}