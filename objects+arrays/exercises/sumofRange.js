// range function
function range(start, end){
    let result = [];

    // check if step is +ve or -ve to decide the loop's decision
    if(step > 0){
        for (let i = start; i <= end; i++){
            // adding numbers to the array
            result.push(i)
        }
    } else if (step < 0){
        for (let i = start; i >= end; i++){
            // adding numbers to the array
            result.push(i)
        }
    }
    

    // return the array of numbers
    return result;
}

// sum function
function sum(numbers){
    let total = 0;
    for (let number of numbers){
        total += number; 
    }

    return total
}

console.log(sum(range(1, 10)));