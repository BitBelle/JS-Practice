/** 
 * Write a function createCounter that returns a function that increments an 
 * internal counter and returns the current count. 
 * Each call to the function should return a number that increases by 1.
*/

function createCounter(){
    let counts = 1;

    return () => counts++; //counts++ - a post increment operator so it returns the current value then increments it
}

const counter = createCounter();

console.log(counter())
console.log(counter())
console.log(counter())
