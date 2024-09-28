/**
 * Write a program that outputs the following pattern of numbers:
 *  1
    22
    333
    4444
    55555
 */

let number = 1;
for (let row = 1; row <= 4; row++) {
    let output = ''
    for (let col = 1; col <= row; col++) {
        output += number
    }

    console.log(output);
    number++
}
