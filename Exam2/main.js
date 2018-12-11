// Ejercicio 1

function ejercicio1(){
    var response = new XMLHttpRequest();
    response.onreadystatechange = function() {    
        if (this.readyState == 4 && this.status == 200) {
            var tablaE1 = document.getElementById("tablaRestaurantes");
            var imagenesE1 = document.getElementById("imagenesE1");
            var restaurantes = JSON.parse("./restaurantes.json");
            
            for(let i = 0; i < restaurantes.length; i++){
                var tr = document.createElement("tr");
                
                // Nombre
                var nombre = document.createElement("td");
                nombre.textContent = restaurantes[i].nombre;
                tr.appendChild(nombre);

                // Dirección
                var direccion = document.createElement("td");
                direccion.textContent = restaurantes[i].direccion;
                tr.appendChild(direccion);

                // URL
                var url = document.createElement("td");
                var restauranteURL = document.createElement("a");
                restauranteURL.setAttribute("href", restaurantes[i].web);
                restauranteURL.setAttribute("target", "_blank");
                url.textContent = restauranteURL;
                tr.appendChild(url);

                // Imágenes
                var imagen = document.createElement("td");
                var imagenURL = document.createElement("a");
                imagenURL.setAttribute("href", restaurantes[i].imagenes);
                imagenURL.setAttribute("target", "imagenesE1");
                imagen.textContent = imagenURL;
                tr.appendChild(imagen);

                tablaE1.appendChild(tr);
            }
        }
    }
    response.open("GET", "restaurantes.json", true);
    response.responseType = 'json';
    response.send();
}


// Ejercicio 2

function ejercicio2(nombre, direccion, web, ID){

}


// Ejercicio 4

function ejercicio4(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {    
        if (this.readyState == 4 && this.status == 200) {
            var books = [...xhttp.responseXML.documentElement.getElementsByTagName("Book")];
            var divCount = document.getElementsByTagName("div");
        
            if(divCount.length  != books.length){
                for(let i = divCount.length; i < books.length; i++){
                    var div = document.createElement("div");
                    document.getElementById("book-box").appendChild(div);

                    var a = Math.floor((Math.random() * 255) + 1);
                    var b = Math.floor((Math.random() * 255) + 1);
                    var c = Math.floor((Math.random() * 255) + 1);

                    div.style.backgroundColor = "rgb("+a+", "+b+", "+c+")";

                    var X = document.createElement("h3");
                    X.innerHTML = "X";
                    X.style.cssFloat = "right";
                    div.appendChild(X);

                    // Author 
                    var author = document.createElement("p"); 
                    var authorValue = document.createTextNode("Author: "+books[i].children[0].innerHTML);
                    div.appendChild(author);
                    author.appendChild(authorValue);

                    // Title
                    var title = document.createElement("p"); 
                    var titleValue = document.createTextNode("Title: "+books[i].children[1].innerHTML);
                    div.appendChild(title);
                    title.appendChild(titleValue);

                    // Genre 
                    var genre = document.createElement("h3"); 
                    var genreValue = document.createTextNode("Genre: "+books[i].children[2].innerHTML);
                    div.appendChild(genre);
                    genre.appendChild(genreValue);

                    // Price 
                    var price = document.createElement("p"); 
                    var priceValue = document.createTextNode("Price: "+books[i].children[3].innerHTML);
                    div.appendChild(price);
                    price.appendChild(priceValue);

                    // PublishDate
                    var publishDate = document.createElement("p"); 
                    var pulishDateValue = document.createTextNode("Publish Date: "+books[i].children[4].innerHTML);
                    div.appendChild(publishDate);
                    publishDate.appendChild(pulishDateValue);

                    // Description
                    var description = document.createElement("p"); 
                    var descriptionValue = document.createTextNode("Description: "+books[i].children[5].innerHTML);
                    div.appendChild(description);
                    description.appendChild(descriptionValue);
                }
            }
        }
    }
    xhttp.open("GET", "examenDiciembre.xml", true);
    xhttp.send();
};


// Ejercicio 5

function ejercicio5(figura, numBolas){
    var box = document.createElementNS("http://www.w3.org/2000/svg",'rect');
    box.setAttribute('width', 400);
    box.setAttribute('height', 400);
    box.setAttribute('stroke', 'black');
    var boxSection = document.getElementById("svgBolas");
    boxSection.appendChild(box);

    var x = 10;
    var y = 10;

    if(figura == 1){
        for(let i = 0; i < numBolas; i++){
            var bola = document.createElementNS("http://www.w3.org/2000/svg",'circle');
            bola.setAttribute('r', 4);
            bola.setAttribute('cx', 200);
            bola.setAttribute('cy', y);
            bola.setAttribute('fill', 'blue');
            y = y + 10;
            box.appendChild(bola);
        }
    }

    if(figura == 2){
        for(let i = 0; i < numBolas; i++){
            var bola = document.createElementNS("http://www.w3.org/2000/svg",'circle');
            bola.setAttribute('r', 4);
            bola.setAttribute('cx', x);
            bola.setAttribute('cy', y);
            bola.setAttribute('fill', 'blue');
            x = x + 10;
            y = y + 10;
            box.appendChild(bola);
        }
    }

    x=0;
    y=0;
}




function main(){
    setInterval(ejercicio1, 2000);
    setInterval(ejercicio4, 2000);
}
