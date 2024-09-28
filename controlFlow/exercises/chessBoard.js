/**
 * Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a "#" character. The characters should form a
chessboard.
 */


let size = 8;
let pattern = "";

for(let row = 0; row < size; row++){
    for(let col = 0; col < size; col++ ){
        if ((row + col) % 2 === 0){
            pattern = pattern + "#"
        } else {
            pattern = pattern + " "
        }
    }

    pattern = pattern + "\n"
}

console.log(pattern)