// reverse Array Function

function reverseArray(fruits){
    let newArray = [];
    // looping from the last item to last
    for (let i = fruits.length-1; i >= 0; i--){
        newArray.push(fruits[i])
    }

    return newArray

}

console.log(reverseArray(["banana", "mango", "apple"])); 

/**
 *  The second Function - reverseArrayInPlace should do what the reverse method does: 
 * modify the array given as its argument by reversing its elements. Neither may use the 
 * standard reverse method.
 */

function reverseArrayInPlace(fruits) {
    let len = fruits.length;
    
    // We swap elements from the start and the end, moving towards the center
    for (let i = 0; i < Math.floor(len / 2); i++) {
        // Swap elements at position `i` and `len - 1 - i`
        let temp = fruits[i];
        fruits[i] = fruits[len - 1 - i];
        fruits[len - 1 - i] = temp;
    }

    return fruits;  // The original array is modified and returned
}

console.log(reverseArrayInPlace(["orange", "avocado", "banana"])); 
// Output: ["banana", "avocado", "orange"]
