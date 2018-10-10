// W2 & W2.1 E5,7,9

document.write("<h1>Worksheet 1</h1>");

document.write("<h3>Exercise 1</h3>");

function evenOdd(){
    var arr = Array(100);

    for(let i=0; i<arr.length; i++){
        arr[i]=parseInt(Math.random()*1000+1);
    }

    console.warn("ORIGINAL ARRAY");
    console.log(arr);

    var arrEven = Array();
    var arrOdd = Array();

    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            arrEven.push(arr[i]);
        }else{
            arrOdd.push(arr[i]);
        }
    }

    console.warn("EVEN ARRAY");
    console.log(arrEven);
    console.warn("ODD ARRAY");
    console.log(arrOdd);
}

evenOdd();


document.write("<h3>Exercise 2</h3>");

function arrModify(){
    var arr = Array(10);

    for(let i=0; i<10; i++){
        arr[i]=0;
    }

    for(let i=0; i<arr.length; i++){
        arr[i]=arr[i]+1;
    }

    document.write(arr.join(" "));
}


document.write("<h3>Exercise 3</h3>");

function simulationTwoDices(){
    var arr = [];
    var values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for(let i=0; i<36000; i++){
        var diceOne = parseInt(Math.random()*6+1);
        var diceTwo = parseInt(Math.random()*6+1);

        var total = diceOne + diceTwo;

        arr[i] = total; // arr.push(total);

        values[total-2]=(values[total-2]+1);
    }
    
    console.log(values);
}