// Worksheet 1 --> 4, 5, 9, 10


// Exercise 1

function alert1(){
    alert("Alert on click");
}


// Exercise 2

function alert2(event){
    x=event.clientX;
    y=event.clientY;
    
    console.log(x);
    console.log(y);
}


// Exercise 4

// function alertControlShift(event) {
//     var keyPressed = event.keyCode;
//     var cellC = document.getElementsByClassName("cell");

//     if (keyPressed == 16) {
//         cellC.style.backgroundColor = "green";
//     }
//     if (keyPressed == 17) {
//         cellC.style.backgroundColor = "blue";
//     }
// }

//function createTable(){
    document.write("<h3>Exercise 4</h3>");

    var auxCells = 0;
    document.write("<table align='center' cellspacing='0' border='1px' id='tableMouse'>");
        for(let i=0; i<40; i++){
        document.write("<tr height=20>");
                    
            for(let j=0; j<40; j++){
                document.write("<td align='center' width=20 class='cell'>");
                document.write("</td>");
                auxCells++;       
            }
            document.write("</tr>");
        };
    document.write("</table>");
//}

var tableE4 = document.getElementById("tableMouse");
tableE4.addEventListener("paint", function(){
    var keyPressed = event.keyCode;
    var cellC = document.getElementsByClassName("cell");
    
    if(keyPressed == 16){
        cellC.style.backgroundColor= "green";
    }
    if(keyPressed == 17){
        cellC.style.backgroundColor= "blue";
    }
});