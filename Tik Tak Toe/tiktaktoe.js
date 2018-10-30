/**TIK TAK TOE GAME
 * 
 * First of all, that game is prepared for 2 players, one will be the cross, the second will be the circles.
 * 
 * It depends on who starts, the first will be the cross every single game, so feel free to change the order after every game.
 * 
 * 
 */

export class tikTakToe{
    constructor(){
        this.board = new Array();
        this.turn = 0;
    }

    createBoard(){
        this.turn=0;
        for(let i=0; i<3; i++){
            this.board[i]=[];
            for(let j=0; j<3; j++){
                this.board[i][j]=["Empty"];
            }
        }
        return this.board;
    }

    playerMove(x, y){
        if(this.board[x][y] == "Empty"){
            if(turn%2 == 0){
                this.board[x][y]="Cross";
                turn++;
            }else{
                this.board[x][y]="Circle";
                turn++;
            }
        }else{
            return null;
        }
    }

    matchVoucher(){
        var cross = "Cross";
        var circle = "Circle";
        //WIN CONDITIONS
            //ALL CROSS'S WIN CONDITIONS
            if((this.board[0][0] == cross) && (this.board[1][0] == cross) && (this.board[2][0] == cross)){
                alert("Cross wins!! Congratulations!!");
            }
            if((this.board[0][1] == cross) && (this.board[1][1] == cross) && (this.board[2][1] == cross)){
                alert("Cross wins!! Congratulations!!");
            }
            if((this.board[0][2] == cross) && (this.board[1][2] == cross) && (this.board[2][2] == cross)){
                alert("Cross wins!! Congratulations!!");
            }
            if((this.board[0][0] == cross) && (this.board[0][1] == cross) && (this.board[0][2] == cross)){
                alert("Cross wins!! Congratulations!!");
            }
            if((this.board[1][0] == cross) && (this.board[1][1] == cross) && (this.board[1][2] == cross)){
                alert("Cross wins!! Congratulations!!");
            }
            if((this.board[2][0] == cross) && (this.board[2][1] == cross) && (this.board[2][2] == cross)){
                alert("Cross wins!! Congratulations!!");
            }
            if((this.board[0][0] == cross) && (this.board[1][1] == cross) && (this.board[2][2] == cross)){
                alert("Cross wins!! Congratulations!!");
            }
            if((this.board[0][2] == cross) && (this.board[1][1] == cross) && (this.board[2][0] == cross)){
                alert("Cross wins!! Congratulations!!");
            }

            //ALL CIRCLE'S WIN CONDITIONS
            if((this.board[0][0] == circle) && (this.board[1][0] == circle) && (this.board[2][0] == circle)){
                alert("Circle wins!! Congratulations!!");
            }
            if((this.board[0][1] == circle) && (this.board[1][1] == circle) && (this.board[2][1] == circle)){
                alert("Circle wins!! Congratulations!!");
            }
            if((this.board[0][2] == circle) && (this.board[1][2] == circle) && (this.board[2][2] == circle)){
                alert("Circle wins!! Congratulations!!");
            }
            if((this.board[0][0] == circle) && (this.board[0][1] == circle) && (this.board[0][2] == circle)){
                alert("Circle wins!! Congratulations!!");
            }
            if((this.board[1][0] == circle) && (this.board[1][1] == circle) && (this.board[1][2] == circle)){
                alert("Circle wins!! Congratulations!!");
            }
            if((this.board[2][0] == circle) && (this.board[2][1] == circle) && (this.board[2][2] == circle)){
                alert("Circle wins!! Congratulations!!");
            }
            if((this.board[0][0] == circle) && (this.board[1][1] == circle) && (this.board[2][2] == circle)){
                alert("Circle wins!! Congratulations!!");
            }
            if((this.board[0][2] == circle) && (this.board[1][1] == circle) && (this.board[2][0] == circle)){
                alert("Circle wins!! Congratulations!!");
            }
        //WIN CONDITIONS
    }
}