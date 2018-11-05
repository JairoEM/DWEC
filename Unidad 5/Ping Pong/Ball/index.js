

function main(){
    var ball = document.getElementById("ball");
    var table = document.getElementById("table");
    var speedX = 1;
    var speedY = 1;
    var x;
    var y;

    function moveX(){
        if(x >= table.getAttribute("width")-10){
            speedX = speedX * (-1);
        }
        if(x <= 10){
            speedX = Math.abs(speedX);
        } 
        ball.setAttribute("cx", (x + speedX));
    }
    
    function moveY(){
        if(y >= table.getAttribute("height")-10){
            speedY = speedY * (-1);
        }
        if(y <= 10){
            speedY = Math.abs(speedY);
        }
        ball.setAttribute("cy", (y + speedY));
    }

    setInterval( () => {
        x = parseInt(ball.getAttribute("cx"));
        y = parseInt(ball.getAttribute("cy"));
        moveY();
        moveX();
    }, 5);
}


