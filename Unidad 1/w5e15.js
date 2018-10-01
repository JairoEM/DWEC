// W5

// Ejercicio 4.15

document.write('<h1>Ejercicio 4.15</h1>');

var numInicial = prompt('Jugador uno, inserte un número:');

var numAdivinado = prompt('Jugador dos, intente acertar el número:');

var numAux = parseInt(numAdivinado);

while (numAux != numInicial){
    if(numAux < numInicial){
        numAux = prompt('El número que ha introducido no es el correcto, vuelva a intentarlo con un número mayor:');
        numAux=parseInt(numAux);
    }else{
        numAux = prompt('El número que ha introducido no es el correcto, vuelva a intentarlo con un número menor:');
        numAux=parseInt(numAux);
    }
}

alert('¡¡ENHORABUENA!! Has acertado el número.');