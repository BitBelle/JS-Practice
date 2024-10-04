
function printFarmInventory(cows, chickens){
    let cowString = String(cows)
    while (cowString.length < 3){
        cowString = "0" + cowString
    }
    console.log(`${cowString} Cows`)

    let chickenString = String(chickens)
    while (chickenString.length < 3){
        chickenString = "0" + chickenString
    }
    console.log(`${chickenString} Chickens`)

}

printFarmInventory(7, 10)

// instead of repeating the lines of code, here is another way to do it;

// function that deals with adding zeros
function zeroPad(number){
    let string = String(number)
    while (string.length < 3){
        string = "0" + string
    }

    return string;
}

// function that deals with the animal labels
function printFarmInventory2(cows, chickens, pigs){
    console.log(`${zeroPad(cows)} Cows`)
    console.log(`${zeroPad(chickens)} Chickens`)
    console.log(`${zeroPad(pigs)} Pigs`)
}

printFarmInventory2(10, 20, 30);