/**
 * Define the function min that takes two arguments and returns their
minimum.
 */


// function declaration
function minimum(num1, num2) {

    let minNumber;

    if (num1 < num2) {
        minNumber = num1
    } else {
        minNumber = num2
    }
    return minNumber
}

minimum(40, 24)