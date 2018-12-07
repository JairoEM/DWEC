function checkName() {
    var xhttp = new XMLHttpRequest();
    var name = document.getElementById("name").value;
    console.log("asd");
    xhttp.onreadystatechange = function() {    
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("span").innerHTML = this.responseText;
            console.log(this.responseText);
        }
    }
    xhttp.open("GET", "nameDataBase.php?q=" + name, true);
    xhttp.send();
};