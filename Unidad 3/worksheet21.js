document.write("<h1>Worksheet 2.1</h1>");

document.write("<h3>Everything is on the console</h3>");


console.warn("A");

var arrNaM  = [10,85,1,87,987,5,0,14,20];
var arrNaM2  = ["Hello","World","And","github","viewers","good","morning","for","all","is","fisionomy"];


function findLargestNumber(arr){
    return arr.sort().slice(-1);
}

console.log(findLargestNumber(arrNaM));


console.warn("B");

function findLongestString(arr){
    return arr.sort(function(a,b){
        if(a.length > b.length){
            return 1;
        }else if(a.length < b.length){
            return -1;
        }else{
            return 0;
        }
    }).slice(-1);
}

console.log(findLongestString(arrNaM2));


console.warn("C");

function findEvenNumber(arr){
    var even = [];

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] % 2 == 0){
            even.push(arr[i]);
        }
    }
    return even;
}

console.log(findEvenNumber(arrNaM));


console.warn("D");

function findOodNumber(arr){
    var odd = [];

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] % 2 != 0){
            odd.push(arr[i]);
        }
    }
    return odd;
}

console.log(findOodNumber(arrNaM));


console.warn("E");

function wordsContainIs(arr){
    return arr.includes("is");
}

console.log(wordsContainIs(arrNaM2));


console.warn("F");

function numbersDivisibleThree(arr){
    var divisible = [];

    for(let i = 0; i <= arr.length; i++){
        if(arr[i] % 3 == 0){
            divisible.push(arr[i]);
        }
    }
    return divisible;
}

console.log(numbersDivisibleThree(arrNaM));


console.warn("G");

function zipTwoArrays(arr1,arr2){
    //obsolete
    var result = arr1.concat(arr2);
    return result;
}

console.log(zipTwoArrays(arrNaM,arrNaM2));


console.warn("H");

function sortUnitedArray(arr1,arr2){
    var newArray = zipTwoArrays(arr1,arr2);
    return newArray.sort();
}

console.log(sortUnitedArray([5,6,8.7,20],arrNaM2));