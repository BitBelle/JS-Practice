// prompt user for 2 numbers
let start = Number(prompt("Enter a number range. Starts with: "));
let end = Number(prompt("Ends with: "));


// list all numbers within the range of the user
while(start >= end){
    start = Number(prompt("The start number should be less than the end number. Please try again.\nStarts with:"))
    end = Number(prompt("Ends with:"))
    
}
for (let i = start; i <= end; i++) {
    // console.log(i);
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}





