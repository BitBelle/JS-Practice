
function loop(value, test, update, body){
    // standard loop that continues as long as the test is true
    while (test(value)) {
        // calling the body function with the current value
        body(value);
        // updating the value using update function
        value = update(value);
    }
}

// starting value
let start = 0;

//defining the test function
function testFunc(value){
    return value < 10;
}

// defining update function
function update(value){
    return value + 1;
}

// body function
function bodyFunc(value){
    // printing current value
    console.log("Current value:", value);
}


// calling the loop function
loop(start, testFunc, update, bodyFunc);