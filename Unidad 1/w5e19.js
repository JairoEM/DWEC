// W5

// Ejercicio 4.19

document.write('<h1>Ejercicio 4.19</h1>');

celda = prompt('Inserte el tamaño (alto y ancho) de las celdas del tablero:');

document.write('<table border="0" cellspading="2" bgcolor="black">');

for(var i=1; i<=8; i++){
    document.write('<tr bgcolor="white" height="'+celda+'">');

    if(i%2!=0){
        for(var j=1; j<=8; j++){
            if(j%2!=0){
                document.write('<td width="'+celda+'" bgcolor="black">&nbsp;</td>');

            }else{
                document.write('<td width="'+celda+'" bgcolor="white">&nbsp;</td>');
            }
        }

    }else{
        for(var z=1; z<=8; z++){
            if(z%2==0){
                document.write('<td width="'+celda+'" bgcolor="black">&nbsp;</td>');

            }else{
                document.write('<td width="'+celda+'" bgcolor="white">&nbsp;</td>');
            }
        }
    }

    document.write('</tr>');
}

document.write('</table>');