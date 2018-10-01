// W4

document.write('<h1>Worksheet #4</h1>');

// What's numbers bigger?

document.write("<h2>What's numbers bigger?</h2>");

function greaterNum(num1, num2){
    if(num1>num2){
        document.write('The number ' + num1 + ' is greater than ' + num2 + '.');
    }else if(num2>num1){
        document.write('The number ' + num2 + ' is greater than ' + num1 + '.');
    }else{
        document.write('Both numbers are the same, ' + num1 + '.');
    }
    document.write('<br>');
}

greaterNum(10, 50);
greaterNum(40, 20);
greaterNum(30, 30);


// The World Translator

document.write("<h2>The World Translator</h2>");

var idioma = prompt("Insert the language: 'es', 'de' or 'en'.");

function helloWorld(idioma){
    if(idioma == 'es'){
        document.write('Hola mundo.');
    }else if(idioma == 'de'){
        document.write('Hallo welt.');
    }else if(idioma == 'en'){
        document.write('Hello world.');
    }else{
        document.write('The language is not avaible.')
    }
    document.write('<br>');
}

helloWorld(idioma);