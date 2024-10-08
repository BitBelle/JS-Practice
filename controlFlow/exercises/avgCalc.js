let sum = 0;
let count = 0;

while(true){
    // prompt user for numbers
    let input = prompt("Enter numbers and type 'stop' to get their average")

    // if the input is stop, break
    if (input.toLowerCase() === "stop"){
        break;
    }

    // convert input to number
    let number = Number(input);

    // check if the input is a valid number
    if (!isNaN(number)){
        // cal the sum and increment count
        sum += number;
        count++;
    } else {
        alert("Enter a valid number!")
    }

}

if (count > 0){
    let average = sum / count
    alert("The average of your numbers is: " + average)
}