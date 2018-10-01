// W5

// Ejercicio 4.18

document.write('<h1>Ejercicio 4.18</h1>');

colum = prompt('Inserte el número de columnas:');
filas = prompt('Inserte el número de filas:');
alto = prompt('Inserte la altura de las celdas:');
ancho = prompt('Inserte el ancho de las celdas:');

document.write('<table border="0" cellspading="2" bgcolor="black">');

for(var i=1; i<=filas; i++){
    document.write('<tr bgcolor="white" height="'+alto+'">');

    for(var j=1; j<=colum; j++){
        document.write('<td width="'+ancho+'">&nbsp;</td>');
    }

    document.write('</tr>');
}

document.write('</table>');