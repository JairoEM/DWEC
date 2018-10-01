// W5

// Ejercicio 4.16

document.write('<h1>Ejercicio 4.16</h1>');

var numInicial = prompt('Jugador uno, inserte un número:');

var numAdivinado = prompt('Jugador dos, intente acertar el número:');

var numAux = numAdivinado;

do{
    if(numAux < numInicial){
        numAux = prompt('El número que ha introducido no es el correcto, vuelva a intentarlo con un número mayor:');
    }else{
        numAux = prompt('El número que ha introducido no es el correcto, vuelva a intentarlo con un número menor:');
    }
}while(numAux != numInicial)

alert('¡¡ENHORABUENA!! Has acertado el número.');