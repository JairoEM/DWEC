//Import the class
import { TicTacToe } from './tiktaktoe.js';

//Create new tikTakToe object as board
var board = new TicTacToe();

console.log(board.createBoard());

function movement(event){
    board.playerMove(event.target.id[0], event.target.id[2]);
    console.log(board)
    var box = document.getElementById(event.target.id[0]+" "+event.target.id[2]);
    if(board.turn%2 == 0){
        box.style.backgroundImage = "url(./nam.png)";
    }else{
        box.style.backgroundImage = "url(./man.png)";
    }         

}
function play(){
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            document.getElementById(i+" "+j).onclick=movement; 
        }
    }
}
play();


function checkStatus(){
    var check = board.matchVoucher();
    console.log(check);
    if(check == "Cross"){
        alert("MaN Wins!! Congratulations!!");
    }else{
        if(check == "Circle"){
            alert("NaM Wins!! Congratulations!!");
        }
    }
}
document.getElementById("board").onclick=checkStatus;

function restartGame(){
    board.createBoard();
    console.log(board);
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            document.getElementById(i+" "+j).style.backgroundImage = "url(./w.png)"; 
        }
    }
}
document.getElementById("restart").onclick=restartGame;