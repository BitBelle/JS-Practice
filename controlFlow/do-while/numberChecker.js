/**
 * Even or Odd Number Checker

Write a program that takes a number as input and checks if it’s even or odd.
Display an appropriate message.
 */

// prompting the user
let num = Number(prompt("Enter a number to know if its Odd or Even:"));

while ( num === "" || isNaN(num)){
    num = Number(prompt("Invalid Input!\nEnter a number to know if its Odd or Even:"));
}

 if (num % 2 === 0){
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is an odd number`)
}