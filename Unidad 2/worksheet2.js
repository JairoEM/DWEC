// Woorksheet 2

document.write('<h1>Worksheet 2</h1>');


// Ejercicio 1
document.write('<h3>Randoms</h3>');

var num1 = Math.random();

document.write(num1);

document.write('<br>');

var num2 = Math.random()*(200-100)+100;

document.write(num2);

document.write('<br>');

function numRandom(min, max){
    var min = prompt('Inserte el primer valor, o valor mínimo:');
    var max = prompt('Inserte el segundo valor, o valor máximo:');
    
    var aux = Math.random()*(max-min)+min;
    return aux;
}



// Ejercicio 5

document.write('<h3>Resolutor de Ecuaciones de Segundo Grado</h3>');

function ecuacionSegundoGrado(coeA, coeB, coeC){

    var sol1 = ((-coeB + (Math.sqrt((coeB*coeB) - (4*coeA*coeC)))) /(2*coeA));
    var sol2 = ((-coeB - (Math.sqrt((coeB*coeB) - (4*coeA*coeC)))) /(2*coeA));

    document.write('Las posibles soluciones son: <br>');
    document.write(sol1+'<br>');
    document.write(sol2+'<br>');
}

coeAaux = parseInt(prompt('Inserte el valor de coeficiente A:'));
coeBaux = parseInt(prompt('Inserte el valor de coeficiente B:'));
coeCaux = parseInt(prompt('Inserte el valor de coeficiente C:'));

ecuacionSegundoGrado(coeAaux, coeBaux, coeCaux);
ecuacionSegundoGrado(1, -5, 3);



// Ejercicio 7

document.write('<h3>Valor del Seno</h3>');

document.write("<table border='4px'>");
document.write("<tr>");
document.write("<td>Número</td><td>Seno()</td>");
document.write("</tr>");
for(let i = 0; i <= 10; i++){
    document.write("<tr>");
        document.write("<td>"+ i +"</td><td>"+ Math.sin(i) +"</td>");
    document.write("</tr>");    
}
document.write("</table>");


// Ejercicio 8

document.write('<h3>Imagen Random</h3>');

var valorImg = Math.random()*3;

if(valorImg <= 1){
    document.write('<img src="https://static.fnac-static.com/multimedia/Images/ES/NR/9d/f8/0d/915613/1540-6.jpg">');
}else{
    if(valorImg = 2){
        document.write('<img src="https://78.media.tumblr.com/2a386dc889fb9f799c45e5c1c18b1e0c/tumblr_oa81b338yR1vx5y06o1_500.jpg">');
    }else{
        document.write('<img src="https://rockpeperina.com/wp-content/uploads/2017/01/SOAD-678x381.jpg">');
    }
}