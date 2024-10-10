/**
 *  function makeCounter that returns another function. The returned function should increment
 *  a counter each time it is called and return the current count. Ensure that the count is preserved between calls using closure.
 */

// function makeCounter returns a function - myFunction
// myFunction increments a counter each time its called and returns current count. 

function makeCounter(){
    let count = 0;

    function myFunction(){
        count++;

        return count;
    }

    return myFunction;
}

let counts = makeCounter()
console.log(counts());
console.log(counts());
console.log(counts());
console.log(counts());