// implementing the every function, which checks if every element in an array satisfies a given predicate function
// predicate functions - functions that return a single TRUE or FALSE


// 1. using a for loop
// iterate over each element in the array, 
// check if predicate function returns true for every element, 
// return false if element doesnt satisfy condition

function everyLoop(array, predicate){
    //iterate over each element
    for (let element of array){
        //test - if predicate returns false for any element, return false
        if(!predicate(element)){
            return false;
        }
    }

    //if no false is found, return true
    return true;
}

//testing the everyloop func
let numbers = [2, 4, 6, 8, 10, 12];
// let numbers2 = [1, 2, 4, 6];

//predicate function - checks if number is even
function isEven(n){
    return n % 2 === 0;
}

console.log(everyLoop(numbers, isEven));

// 2. Using the some method
function everySome(array, predicate){
    //some - to check if there's an element tha fails the predicate
    return !array.some(element => !predicate(element))
}

//testing the function
console.log(everySome(numbers, isEven));
