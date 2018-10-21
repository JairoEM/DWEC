// Worksheet 1 --> 4, 5, 9, 10


// Exercise 1

function alert1(){
    alert("Alert on click");
}


// Exercise 2

function alert2(event){
    x=event.clientX;
    y=event.clientY;
    
    document.getElementById("x").textContent=x;
    document.getElementById("y").textContent=y;
}


// Exercise 4

function changeColor(cell){
    cell.target.style.backgroundColor = "black";
    if(cell.shiftKey){
        cell.target.style.backgroundColor = "red";
    }
    if(cell.ctrlKey){
        cell.target.style.backgroundColor = "yellow";
    }
    if(cell.altKey){
        cell.target.style.backgroundColor = "white";
    }
}

function allWhite(){
    var cells = [...document.getElementsByTagName("td")];
    cells.map(element => {
        element.style.backgroundColor = "white";
    });
}

function createTable(){
    document.write("<h3>Exercise 4</h3>");

    document.write("<table align='center' cellspacing='0' border='1px'>");
        for(let i=0; i<20; i++){
        document.write("<tr height='20px'>");
            for(let j=0; j<20; j++){
                document.write("<td align='center' width='20px' onmousemove='changeColor(event)'>");
                document.write("</td>");   
            }
            document.write("</tr>");
        };
    document.write("</table>");

    document.write("<br>");

    document.write("<button onclick='allWhite()'>Clear the table</button>");
}

createTable();