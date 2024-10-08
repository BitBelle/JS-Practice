/**
 * Average Calculator with an Unknown Number of Inputs:
 * Write a program that prompts the user to enter numbers. 
 * The program should calculate the average of all numbers entered, 
 * but the user can stop entering numbers by typing "stop". After stopping, 
 * the program should display the average of all valid numbers entered.
 */



let sum = 0;
let count = 0;

while(true){
    //prompting user for a number
    let input = prompt("Enter numbers to get average(or type 'stop' to finish):")

    // checking if user typed stop
    if (input.toLowerCase() === "stop"){
        break;
    }

    // convert the input to number
    let number = Number(input);

    // check if the input is a valid number
    if (!isNaN(input)){
        // calc the sum and count
        sum += number;
        count++

    } else {
        // prompting the user again if input isnt a valid number
        alert("Thats not a valid number. Please enter a valid number.")
    }

}

// if valid numbers were entered
if (count > 0){
    // calc the average
    let average = sum / count

    alert(`The average of the numbers is: ${average}`)
}