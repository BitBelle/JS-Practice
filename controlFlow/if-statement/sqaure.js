let theNumber = Number(prompt("Enter a number to get its squareroot:"));

if (!Number.isNaN(theNumber)){
    console.log(`The square root of ${theNumber} is: ` + theNumber * theNumber)
} else{
    console.log("Enter a valid input!")
}