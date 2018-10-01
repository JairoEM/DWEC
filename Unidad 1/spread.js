// Function 1

document.write('<h1>Function 1</h1>');

function f1(...arr){
    let sum;
    for(let i = 0; i <= arr.length; i++){
        suma += f1v[i];
    }
    return sum;
}

f1(1, 2, 3, 4, 5, 6);


document.write('<h1>Function 2</h1>');


function addOnlyNums(...arr){
    let sum;
    for(var i=1; i<=arr.length; i++){
        var aux=f2arr[i];
        parseInt(aux);
        if(typeof aux == "number"){
            sum+=aux;
        }
    }
    return sum;
}

var arr = [1,2,3,"elefante",4,5];

addOnlyNums(arr);


document.write('<h1>Function 3</h1>');

function combineTwoArrays(arr1, arr2){
    return [...arr1, ...arr2];
}

combineTwoArrays([1, 2, 3], [4, 5, 6]);


document.write('<h1>Function 4</h1>');

function onlyUniques(...arr){
    let aux=[];
    for(let i = 0; i < arr.length; i++){
        if(!aux.includes(arr[i])){
            aux.push(arr[i]);
        }
    }
    return aux;
}


document.write('<h1>Function 5</h1>');

function combineAllArrays(...arr){
    let aux=[];
    for(let i = 0; i<=arr.length; i++){
        aux=[...aux, arr[i]];
        // aux.push(...arr[i]);
    }
    return aux;
}