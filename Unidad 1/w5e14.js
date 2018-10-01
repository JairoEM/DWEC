// W5

// Ejercicio 4.14

document.write('<h1>Ejercicio 4.14</h1>');

var col = prompt('Insert column number:');
var alto = prompt('Insert column height:');
var ancho = prompt('Insert column widht:');

document.write('<table border="0" cellspading="2" bgcolor="black">');
document.write('<tr bgcolor="white" height="'+alto+'">'); 
var j = 1;       
while(j <= col){
    if(j%2 == 0){
        document.write('<td bgcolor="black" width="'+ancho+'">&nbsp;</td>');
    }else{
        document.write('<td width="'+ancho+'">&nbsp;</td>');
    }
    j++;
}
document.write('</tr>');
document.write('</table>');