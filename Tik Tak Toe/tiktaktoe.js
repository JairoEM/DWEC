/**TIK TAK TOE GAME
 * 
 * First of all, that game is prepared for 2 players, one will be the cross, the second will be the 
 * circles.
 * 
 * It depends on who starts, the first will be the cross every single game, so feel free to change 
 * the turn order after every game.
 */

export class tikTakToe{

    /**
     * Constructor:
     * The tikTakToe constructor makes an empty array, called 'board', which are going to use as a logical 
     * board, and initialize the variable 'turn', that variable is the one that are going to tell to the 
     * game in what turn we are playing, so the game will know if the next piece in the board is going to
     * be a cross or a circle.
     */
    constructor(){
        this.board = new Array();
        this.turn = 0;
    }

    /**
     * Create Board:
     * The createBoard() function fill the empty array (this.board) with two arrays, so our board is going 
     * to be a two-dimensional array. That two arrays are filled with "Empty" strings at every single point.
     * @returns {Array} board
     */
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

    /**
     * Player Move:
     * The playerMove(x, y) function check if the position, that we give to the function with the variables 
     * x and y, of the array, have an "Empty" string inside. If that is true and it is an even turn, the 
     * position of the array will be a "Cross" string, if that is true and it is an odd turn, the position 
     * of the array will be a "Circle" string, in the opposite hand, if that is false, neither if the turn 
     * is even or odd, the function will do nothing, because one of the players fill that position before.
     * @param {Number} x 
     * @param {Number} y 
     */
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

    /**
     * Match Voucher:
     * The matchVoucher() function check all the posibilities of a winable game, which means that the 
     * function need to find three identical strings in a row, column or diagonal.
     * @returns {alert} winner
     */
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