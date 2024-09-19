/**
 * Guess the Number Game

Write a program that generates a random number between 1 and 100.
Ask the user to guess the number and give hints if the guess is too high or too low.
End the game when the correct number is guessed.
*/

//generating random number btwn 1 to 100 - Math.floor((Math.Random()*100)+1)

let randomNumber = Math.floor((Math.random() * 100) + 1)

let guess = Number(prompt("Welcome to Number Guessing game!\nGuess the random number!"))


if (guess > randomNumber){
    alert("Oops! The number guessed id too high. Try Again!")
} else if(guess < randomNumber){
    alert("Oops! The number guessed is too low")
} else if (guess === randomNumber){
    alert("Yayy! You got it right")
} else {
    alert("Please enter a valid number!")
}
