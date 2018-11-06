function main(){
    //Declare variables, such as ball, board or players.
    var ball = document.getElementById("ball");
    var table = document.getElementById("table");
    var speedX = 1;
    var speedY = 1;
    var x;
    var y;
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var move = 6;
    var positionBlueX;
    var positionBlueY;
    var positionRedX;
    var positionRedY;
    var key;

    document.addEventListener('keydown', function playerMoves(event){
        //Capture the key event
        key = event.keyCode;

        //Player blue moves
        positionBlue = parseInt(player1.getAttribute("y"));
        if(key == 87){
            if(positionBlue >= 0){
                player1.setAttribute("y", (positionBlue - move));
            }
        }
        if(key == 83){
            if(positionBlue <= 170){
                player1.setAttribute("y", (positionBlue + move));
            } 
        }

        //Player red moves
        positionRed = parseInt(player2.getAttribute("y"));
        if(key == 38){
            if(positionRed >= 0){
                player2.setAttribute("y", (positionRed - move));
            }
        }
        if(key == 40){
            if(positionRed <= 170){
                player2.setAttribute("y", (positionRed + move));
            } 
        }
    });

    //Ball hit the players
    function playersHit(){
        if((x - 10) == (positionBlueX + 10)){
            if((y >= positionBlueY) && (y <= (positionBlueY + 80))){
                speedX = Math.abs(speedX);
            }
        }

        if((x + 10) == (positionRedX)){
            if((y >= positionRedY) && (y <= (positionRedY + 80))){
                speedX = speedX * (-1);
            }
        }
        ball.setAttribute("cx", x + speedX);
    }

    //Ball hit the right or left walls
    function moveX(){
        if(x >= table.getAttribute("width")-10){
            speedX = speedX * (-1);
        }
        if(x <= 10){
            speedX = Math.abs(speedX);
        } 
        ball.setAttribute("cx", (x + speedX));
    }

    //Ball hit the top or bottom walls
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
        positionBlueX = parseInt(player1.getAttribute("x"));
        positionBlueY = parseInt(player1.getAttribute("y"));
        console.log(positionBlueY);

        positionRedX = parseInt(player2.getAttribute("x"));
        positionRedY = parseInt(player2.getAttribute("y"));
        console.log(positionRedY);

        x = parseInt(ball.getAttribute("cx"));
        y = parseInt(ball.getAttribute("cy"));

        moveY();
        moveX();
        playersHit();
    }, 5);
}