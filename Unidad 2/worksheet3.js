// W3 E1,2,7,9

document.write('<h1>Worksheet 3</h1>');


// Ejercicio 1

document.write('<h3>Cadenas de string por letras</h3>');

function invierteCade(arg){
    var arr=[];
    for(var i=0; i<=arg.length; i++){
        arr[i]=arg.charAt(i);
    }

    for(var j=arr.length; j>=1; j--){
        document.write(arr.pop());
    }
}

invierteCade("Hola");


document.write('<h3>Cadenas de string por palabras</h3>');

function invierteCadeP(arg){
    var arr=[];
    for(var i=0; i<=arg.length-1; i++){
        arr[i]=arg[i];
    }

    for(var j=arr.length; j>=1; j--){
        document.write(arr.pop());
    }
}

invierteCadeP(["Hola","Bonjour","Hello"]);


document.write('<h3>Palabra más larga</h3>');

function palabraMasLarga(arg){
    document.write('La frase es: "'+arg+'" <br>');

    var arr=arg.split(" ");
    console.log(arr);
    var aux=arr[0];
    console.log(arr[0])

    for(let i=1; i<=arr.length-1; i++){
        if(arr[i].length > aux.length){
            aux=arr[i];
            console.log(arr[i]);
        }
    }
    document.write('La palabra más larga es: '+aux);
}

palabraMasLarga("Me gustaría lamer un polo de limon en el lago de liliput");


// Ejercicio 2 NEED FIX

document.write('<h3>Mayúsculas o minúsculas...</h3>');

function esMayuscula(letra){
    if(letra == letra.toUpperCase()){
        return true;
    }else{
        return false;
    }
}

function esMinuscula(letra){
    if(letra == letra.toLowerCase()){
        return true;
    }else{
        return false;
    }
}

function mayusMinus(arg){
    var auxMayus=0;
    var auxMinus=0;

    for(let i=0; i<=arg.length; i++){
        letraAux = arg.charAt(i);

        if(esMayuscula(letraAux)){
            auxMayus++;
        }else{
            auxMinus++;
        }
    }

    console.log(auxMayus);
    console.log(auxMinus);

    if((auxMayus >= 1) && (auxMinus >= 1)){
        document.write('La frase contiene mayúsculas y minúsculas.<br>');
    }else{
        if((auxMayus == 0) && (auxMinus >= 1)){
            document.write('La frase solo contiene minúsculas.<br>');
        }else{
            if((auxMayus >= 1) && (auxMinus == 0)){
                document.write('La frase solo contiene mayúsculas.<br>');
            }
        }
    }
}

mayusMinus("Alberto Chicote");
mayusMinus("pepe viyuela");
mayusMinus("VIYUELA CHICOTE");



// Ejercicio 9

document.write('<h3>Word in a Box</h3>');

function boxWord(arg){
    var arr=[];

    for(var i=0; i<=arg.length-1; i++){
        arr[i]=arg.charAt(i);
    }

    var aux=arg.length;
    console.log(aux);

    console.log(arr);

    document.write('<table border="2" cellspading="2">');
    document.write('<tr height="40">');
    for(let i=0; i<=arr.length-1; i++){
        document.write('<td width="40">');
        document.write(arr[i]);
        document.write('</td>');
    }
    document.write('<tr>');
    
    for(let j=0; j<=arr.length-3; j++){
        document.write('<tr height="40">');

        document.write('<td width="40">');
        document.write(arr[j+1]);
        document.write('</td>');

        for(let k=0; k<=arr.length-3; k++){
            document.write('<td width="40">&nbsp;</td>');
        }

        console.log(aux);
        document.write('<td width="40">');
        document.write(arr[aux-2]);
        document.write('</td>');
        aux--;
        console.log(aux);

        document.write('<tr>');
    }

    document.write('<tr height="40">');
    for(let i=arr.length-1; i>=0; i--){
        document.write('<td width="40">');
        document.write(arr[i]);
        document.write('</td>');
    }
    document.write('<tr>');
    document.write("</table>");
}

boxWord("HELLO");