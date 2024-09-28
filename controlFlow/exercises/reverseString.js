/**
 * Write a program that takes a string as input and prints the string in reverse. 
 * For example, if the input is "hello", the output should be "olleh".
 */

let userInput = prompt("Enter a word to get its reverse")

let splitString = userInput.split("");

let reverseString = splitString.reverse();

let joinedString = reverseString.join("");

console.log("The reverse of " + userInput + " is " + joinedString);