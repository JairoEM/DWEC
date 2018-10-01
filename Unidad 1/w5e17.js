// W5

// Ejercicio 4.17

document.write('<h1>Ejercicio 4.17</h1>');

for(var i=1; i<=10; i++){
    document.write('<h2>Tabla del '+i+'</h2>');
    for(var j=1; j<=10; j++){
        document.write(i+'x'+j+'='+(i*j));
        document.write('<br>');
    }
}