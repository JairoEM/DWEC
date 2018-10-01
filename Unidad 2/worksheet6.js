//  WS6 E2c,d,e,f

document.write('<h1>Worksheet 4</h1>');

var imgCount = document.images.length;

document.write("<h4>Hay "+imgCount+" imagenes</h4>");

var imgID = document.getElementsByTagName('img'); 

document.write("<h4>La ID de la primera imagen es '"+imgID[0].id+"'</h4>");

var linkCount = document.links.length;

document.write("<h4>Hay "+linkCount+" links</h4>");

function changeTitle(){
    var arg = prompt("Write a new title for your document:")
    document.title = arg;
    console.log(arg);
}