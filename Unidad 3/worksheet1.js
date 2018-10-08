// W1 E2,3,6,7

document.write("<h1>Worksheet 1</h1>");

document.write("<h3>Exercise 1</h3>");

function dice(){
    var result = parseInt(Math.random()*6+1);
    console.log(result);
    return result;
}

document.write("<button onclick='dice()'>DICE</button>");

document.write("<h3>Exercise 2</h3>");

function diceSimulator(){
    // Numbers Variables
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var auxThrow = 0;

    for(let i=1; i<=6000; i++){
        auxThrow = dice();
        if(auxThrow == 1){
            var1++;
        }else{
            if(auxThrow == 2){
                var2++;
            }else{
                if(auxThrow == 3){
                    var3++;
                }else{
                    if(auxThrow == 4){
                        var4++;
                    }else{
                        if(auxThrow == 5){
                            var5++;
                        }else{
                            var6++;
                        }
                    }
                }
            }
        }
    }

    document.write("The number 1 has come out "+var1+" times. <br>");
    document.write("The number 2 has come out "+var2+" times. <br>");
    document.write("The number 3 has come out "+var3+" times. <br>");
    document.write("The number 4 has come out "+var4+" times. <br>");
    document.write("The number 5 has come out "+var5+" times. <br>");
    document.write("The number 6 has come out "+var6+" times. <br>");
}

diceSimulator();


document.write("<h3>Exercise 3</h3>");

function potency(x, y=1){
    auxX = 1;
    if(y == 1){
        auxX = x;
    }else{
        auxX = x * potency(x, y-1);
    }
    return auxX;
    console.log(auxX);
}

potency(4);


document.write("<h3>Exercise 4</h3>");

function factorial(x){
    auxX = 1;
    if(x == 1){
        auxX = x*1
    }else{
        auxX = x * factorial(x-1);
    }
    return auxX;
    console.log(auxX);
}

factorial(4);