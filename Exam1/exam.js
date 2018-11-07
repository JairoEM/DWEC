//Ejercicio 1

function ejercicio2(){
    var totalLinks = document.getElementsByTagName("a");

    document.getElementById("totalLinks").innerHTML = "El número total de enlaces es " + totalLinks.length;
    
    var arrayAux = [...totalLinks];
    
    var urlsLinks = " ";

    for(let i = 0; i <= arrayAux.length-1; i++){
        urlsLinks = urlsLinks + " " + document.getElementsByTagName("a")[i].getAttribute("href");
    }
    document.getElementById("urlsLinks").innerHTML = "Los enlaces son "+ urlsLinks.toString();
}

ejercicio2();


//Ejercicio 2

function ejercicio3(url, num){
    var reloj = new Date();
    var segundos = reloj.getSeconds();
    document.write("Segundo actual del sistema " + segundos + "<br>");

    if(segundos <= 60){
        setTimeout(ejercicio3, 2000);
    }else{
        window.location.replace(url);
    }
}

//ejercicio3("www.google.es", 2);


//Ejercicio 3

class Bola{
    constructor(cx, cy, r){
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }

    caracteristicas(){
        document.write("La bola se encuentra en la posición "+this.cx+","+this.cy+" y tiene radio "+r+". <br>");
    }
}

class Bolitas{
    constructor(){
        this.arrayBolas = new Array();
    }

    anadirBola(bola){
        if(typeof(bola) == 'Bola'){
            this.arrayBolas.push(bola);
        }
    }

    buscarBolaporRadio(radio){
        var auxBolasCount;
        var arrayBolasCount = new Array();

        for(let i = 0; i<= this.arrayBolas.length-1; i++){
            if(this.arrayBolas[i].r == radio){
                auxBolasCount++;
                arrayBolasCount.push("La bola "+i+" coincide con el radio "+radio+".");
            }
        }
        if(auxBolasCount == 0){
            return null;
        }else{
            return arrayBolasCount;
        }
    }

    mostrarBolas(){
        var radio;
        var posicionX;
        var posicionY;
        var arrayMostrarBolas = new Array();

        for(let j = 0; j<= this.arrayBolas.length-1; j++){
            radio = this.arrayBolas[i].r;
            posicionX = this.arrayBolas[i].cx;
            posicionY = this.arrayBolas[i].cy;

            arrayMostrarBolas.push("Bola numero "+j+" de radio "+radio+" y posicion "+posicionX+","+posicionY+".");
        }

        var arrayAux = arrayMostrarBolas.toString();

        return arrayAux;
    }
}


// Ejercicio 4

function ejercicio5(ID){
    var tabla = document.getElementById(ID);
    if(tabla == null){
        return false;
    }else{
        var filas = tabla.getElementsByTagName("tr").length;
    
        for(let k = 0; k < filas; k++){
            if(k == 0){
                tabla.rows[k].style.color = "red";
            }else{
                if(k%2 == 0){
                    tabla.rows[k].style.backgroundColor = "green";
                }else{
                    tabla.rows[k].style.backgroundColor = "orange";
                }
            }
        }
    }
}

ejercicio5("try");


// Ejercicio 5

function ejercicio6(event){
    var key = event.keyCode;
    var wapp;

    if(key == 13){
        document.getElementById("ejercicio6Rellena").innerHTML = " ";
        document.getElementById("ejercicio6Text").innerHTML = " ";
    }else{  
        document.getElementById("ejercicio6Rellena").innerHTML = "Está escribiendo...";
        clearTimeout(wapp);        
        wapp = setInterval( () => {
            document.getElementById("ejercicio6Rellena").innerHTML = " ";
        }, 3000);
    }
}