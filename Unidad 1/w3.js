// 1 The Fortune Teller

document.write('<h1>The Fortune Teller</h1>');

function tellFortune (numChildren, name, locat, title) {
    document.write('You will be a '+ title +' in '+ locat +', and married to '+ name +' with '+ numChildren +' kids.');
    document.write('<br>');
}

tellFortune(1, 'Andres Montes', 'Sesame Street', 'charcutera');
tellFortune(3, 'Francisca Montenegro', 'México', 'rata de dos patas');
tellFortune(2, 'Manolo el del Bombo', 'Murcia', 'vendedor de tierra');


// 2 The Age Calculator

document.write('<h1>The Age Calculator</h1>');

function calculateAge (birth, year) {
    document.write('If you born in ' + birth + ', you are either ' + ((year-birth)-1) + ' or '+ (year-birth) +'.');
    document.write('<br>');
}

calculateAge(1992, 2018);
calculateAge(1994, 2018);
calculateAge(1996, 2018);


// 3 The Lifetime Supply Calculator

document.write('<h1>The Lifetime Supply Calculator</h1>');

var maxAge = 90;

function calculateSupply(age, amount){
    document.write('Teniendo una edad de ' + age + ' y llegando a una edad de ' + maxAge + ' y consumiendo ' + amount + ' kilos al año, necesitarás ' + Math.round((maxAge-age)*amount) + ' kilos.');
    document.write('<br>');
}

calculateSupply(10, 2);
calculateSupply(20, 4);
calculateSupply(30, 2.5);


// 4 The Geometrizer

document.write('<h1>The Geometrizer</h1>');

    // Circumfrence

document.write('<h2>Radios</h2>');

function calcCircumfrence (radio){
    document.write('El radio de la circunferencia es ' + radio + '.');
    document.write(' Su perimetro es ' + (2*radio*Math.PI) + '.');
    document.write('<br>');
}

calcCircumfrence(4);
calcCircumfrence(5);
calcCircumfrence(6);

    // Area

document.write('<h2>Areas</h2>');

function calcArea (radio){
    document.write('El radio de la circunferencia es ' + radio + '.');
    document.write(' Su area es ' + (Math.PI*radio*radio) + '.');
    document.write('<br>');
}

calcArea(4);
calcArea(5);
calcArea(6);


// 5 The Temperature Convert

document.write('<h1>The Temperature Convert</h1>');

    // Celsius To Farenheit

document.write("<h2>Celsius a Farenheit</h2>");

function celsiusToFahrenheit(celsius){
    document.write('Celsius=' + celsius);
    document.write('<br>');
    document.write('Farenheit=' + ((celsius*1.8)+32));
    document.write('<br>');
    document.write('<br>');
}

celsiusToFahrenheit(20);
celsiusToFahrenheit(10);
celsiusToFahrenheit(30);

    // Farenheit To Celsius

document.write("<h2>Farenheit a Celsius</h2>");

function fahrenheitToCelsius(farenheit){
    document.write('Farenheit=' + farenheit);
    document.write('<br>');
    document.write('Celsius=' + ((farenheit-32)/1.8));
    document.write('<br>');
    document.write('<br>');
}

fahrenheitToCelsius(20);
fahrenheitToCelsius(10);
fahrenheitToCelsius(30);