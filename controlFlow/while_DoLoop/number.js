// even numbers 0 to 12

// let number = 0;

// while (number <= 12){
//     console.log(number);
//     number = number + 2;
// }

// calculating 2^10
// let result = 1
// let counter = 0

// while (counter < 10){
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(`2^10 is: ${result}`)


// Do loop - differs from while loop as it executes the body at least once before the condition is checked
let yourName

do {
    yourName = prompt("Who are you?")
} while (!yourName){ // yourName is negated to true of the value is falsy that is "", null or undefined
    console.log(`Hello ${yourName}!`)
} 
