class tikTakToe{
    constructor(){
        this.board = new Array();
        this.turn = 0;
    }

    createBoard(){
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
            }else{
                this.board[x][y]="Circle";
            }
        }else{
            return null;
        }
    }

    matchVoucher(){
        
    }
}