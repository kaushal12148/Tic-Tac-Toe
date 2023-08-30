var val ="X";

let board = [
     [' ',' ',' '],
     [' ',' ',' '],
     [' ',' ',' '],
];
function move(row,col) {
    
    if(board[row][col] ==' '){

        board[row][col] = val;
        document.getElementById("board").children[row*3+col].innerHTML = val;
       if(checkWin() == true) {
         
       setTimeout(()=>{
          alert(val + " wins");
          resetBoard();
       },10)
        return;
       } 
        if(checkTie() == true) {
             console.log("It's a tie");
             setTimeout(()=>{
                alert("It's a tie");
                resetBoard();
             },0)

            return; 
        }
        val = (val == 'X')?'O':'X';
    }

}

function checkWin() {
    //check row
    for(let i=0; i<3; i++) {
        if(board[i][0]  == val && board[i][0] == board[i][1] && board[i][0] == board[i][2]) {
           return true;
        }
    }
    //check col
    for(let i =0; i<3; i++) {
        if(board[0][i]  == val && board[1][i] == val && board[2][i] == val) {
           console.log(val, "is winner");
           return true;
        }
    }

    //diagnal and anti-dia

    if((board[0][0] == val && board[1][1] == val && board[2][2]==val) ||
    (board[0][2] == val && board[1][1] == val && board[2][0] == val)) {
        return true;
    }  
}

function resetBoard() {

    // empty board 
    //inner html

    board = [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' '],
   ];

   let cells = document.getElementsByClassName("cell");

   for(let i = 0; i<cells.length; i++) {
    cells[i].innerHTML = ' ';
   }

   val = 'X';
}

function checkTie() {

    for(let i = 0; i<3; i++) {
        for(let j = 0; j<3; j++) {

            if(board[i][j] == ' ') {
                return false;
            }
        }
    }
    return true;
}