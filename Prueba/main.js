// var count = 0;
// var count2 = 0;

// function clickImage(){
//     count++;
//     document.getElementById("clicks").innerHTML = "Has hecho click " + count + " veces en la imagen."
// }

// function clickImage2(){
//     count2++;
//     document.getElementById("clicks2").innerHTML = "Has hecho click " + count2 + " veces en la imagen."
// }


class Click{
    constructor(imgID, labelID){
        this.img = document.getElementById(imgID);
        this.label = document.getElementById(labelID);
        this.count = 0;
        var imagen = document.createElement("img"); 
        imagen.setAttribute("src", "./forsen.jpg");
        
        
        var div = document.getElementById("capa"); 
        div.appendChild(imagen); 
    }

    clickar(){
        this.count++;
        this.label.innerHTML = "Has hecho click " + this.count + " veces en la imagen."
    }
}

var imgCount1 = new Click("img1", "label1");
var imgCount2 = new Click("img2", "label2");

for(let i = 0; i<=10; i++){
    new Click ("img"+1, );
}