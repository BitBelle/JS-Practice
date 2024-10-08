/**
 * Guess the Number Game

Write a program that generates a random number between 1 and 100.
Ask the user to guess the number and give hints if the guess is too high or too low.
End the game when the correct number is guessed.
*/

//generating random number btwn 1 to 100 - Math.floor((Math.Random()*100)+1)

let randomNumber = Math.floor((Math.random() * 100) + 1)

let guess = Number(prompt("Welcome to Number Guessing game!\nGuess the random number!"))

// validating if a guess is valid before the entering the guessing loop
 while( guess === "" || isNaN(guess)){
    guess = Number(prompt("Invalid input!\nMake another guess!"))
}

while(guess !== randomNumber){

    if (guess > randomNumber){
        guess = Number(prompt("Oops! The number guessed is too high. Try Again!"))
    } else if(guess < randomNumber){
        guess = Number(prompt("Oops! The number guessed is too low. Try Again"))
    }

    // validating each guess within the loop
    while(guess === "" || isNaN(guess)) {
        guess = Number(prompt("Invalid input!\nMake another guess!"))
    }

}

// if the guess is correct
alert("Yayy! You got it right");

