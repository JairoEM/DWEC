function loadDoc() {
    var xhttp = new XMLHttpRequest();

    console.log("HELLO");

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var mails = [...xhttp.responseXML.documentElement.getElementsByTagName("mail")];
            var divCount = document.getElementsByTagName("div");
            
            console.log("HOLA");

            if(divCount.length != mails.length){
                for(let i = divCount.length; i < mails.length; i++){
                    var div = document.createElement("div");
                    document.body.appendChild(div);

                    // TO 
                    var to = document.createElement("p"); 
                    var toValue = document.createTextNode("To: "+mails[i].children[0].innerHTML);
                    div.appendChild(to);
                    to.appendChild(toValue);

                    // FROM 
                    var from = document.createElement("p"); 
                    var fromValue = document.createTextNode("From: "+mails[i].children[1].innerHTML);
                    div.appendChild(from);
                    from.appendChild(fromValue);

                    // HEADING 
                    var heading = document.createElement("h3"); 
                    var headingValue = document.createTextNode("Heading: "+mails[i].children[2].innerHTML);
                    div.appendChild(heading);
                    heading.appendChild(headingValue);

                    // MESSAGE 
                    var message = document.createElement("p"); 
                    var messageValue = document.createTextNode("Message: "+mails[i].children[3].innerHTML);
                    div.appendChild(message);
                    message.appendChild(messageValue);
                }
            }
        }
    };

    xhttp.open("GET", "./mail.xml", true);
    xhttp.send();
}

function main(){
    setInterval(loadDoc, 2000);
}

// setInterval(() =>{
// },10);