/**
 * Simple Calculator --
    Create a simple calculator that asks the user for two numbers and an operator (+, -, *, /).
    Perform the operation and display the result.
 */

let number1 = Number(prompt("Calculator!\nEnter your first number:"));
let number2 = Number(prompt("Enter your second number:"));

let operator = prompt("Choose operator: '+' , '-', '/', '*'");

if (operator === '+'){
    let sum = number1 + number2;
    console.log(sum)

} else if (operator === '-'){
    let diff = number2 - number1
    console.log(diff)

} else if (operator === '/'){
    let div = number2 / number1
    console.log(div)

} else {
    let multiply = number1 * number2
    console.log(multiply)
}
