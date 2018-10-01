// Woorksheet 1

document.write('<h1>Worksheet 1</h1>');


// Ejercicio 1
document.write('<h3>Fecha</h3>');

var d = new Date();

document.write('Year: '+d.getFullYear());
document.write('<br>');
document.write('Month: '+(d.getMonth()+1));
document.write('<br>');
document.write('Day: '+d.getDate());
document.write('<br>');
document.write('Hour: '+d.getHours());
document.write('<br>');
document.write('Minutes: '+d.getMinutes());
document.write('<br>');
document.write('Seconds: '+d.getSeconds());


// Ejercicio 2
document.write('<h3>Cambios de fecha</h3>');

var fechaHoy = new Date();

var fecha85 = new Date();
fecha85.setDate(fechaHoy.getDate()+85);

var fecha187 = new Date();
fecha187.setDate(fechaHoy.getDate()-187);

fecha85.setFullYear(fechaHoy.getFullYear()+2);
fecha187.setHours(fechaHoy.getHours()-24);

document.write(fechaHoy);
document.write('<br>');
document.write(fecha85);
document.write('<br>');
document.write(fecha187);

document.write('<br>');
document.write('<br>');

var fecha85ms = fecha85.getTime();
var fecha187ms = fecha187.getTime();
document.write(fecha85ms-fecha187ms);


// Ejercicio 3
document.write('<h3>Cuenta atras</h3>');

var temporizador = 60;

function cuentaAtras(){
    document.write(temporizador+"<br>");
    temporizador--;
    if(temporizador >= 1){
        setTimeout(cuentaAtras,1000);
    }else{
        window.location.replace("http://google.es");
    }
}

cuentaAtras();

document.write('<br>');
document.write('<br>');


// Ejercicio 5
document.write('<h3>Reloj</h3>');

function relojFuncional(){
    var reloj = new Date();
    var segundos = reloj.getSeconds();
    var minutos = reloj.getMinutes();
    var horas = reloj.getHours();

    document.write(horas+':'+minutos+':'+segundos+'<br>');
}

//setInterval(relojFuncional,1000);


