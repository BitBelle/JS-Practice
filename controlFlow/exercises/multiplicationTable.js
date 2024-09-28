/**
 * Write a program that outputs the multiplication table for a number provided by the user. 
 * For example, if the user inputs 5, the program should output:
 *  5 x 1 = 5
    5 x 2 = 10
    5 x 3 = 15
    5 x 10 = 50
 */

let userInput = Number(prompt("Input any number to get its multiplication table"))
// console.log(userInput)

for (let i = 0; i <= 10; i++){
    let product = userInput * i 
    console.log(`${userInput} * ${i} = ` + product)

}

