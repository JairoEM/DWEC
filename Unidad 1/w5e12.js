// W5

// Ejercicio 4.12

document.write('<h1>Ejercicio 4.12</h1>');

var col = prompt('Insert column number:');
var alto = prompt('Insert column height:');
var ancho = prompt('Insert column widht:');

document.write('<table border="0" cellspading="2" bgcolor="black">');
document.write('<tr bgcolor="white" height="'+alto+'">');         
for(let j = 1; j <= col; j++){
    if(j%2 == 0){
        document.write('<td bgcolor="black" width="'+ancho+'">&nbsp;</td>');
    }else{
        document.write('<td width="'+ancho+'">&nbsp;</td>');
    }
}
document.write('</tr>');
document.write('</table>');