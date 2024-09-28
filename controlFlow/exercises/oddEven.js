/**
 * Write a program that takes a number as input and checks whether it is odd or even. 
 * If the number is even, print "The number is even". If the number is odd, print "The number is odd".
 */

let number = Number(prompt("Enter a number to know if its even or odd"))

if (number % 2 === 0){
    console.log(number + " is an even number")
} else {
    console.log(number + " is an odd number")
}