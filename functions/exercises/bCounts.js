
function bCount(word){
    let splitWord = word.split(""); //splitting the word into an array of characters
    let count = 0; //initializing the counter

    for (let i = 0; i <= splitWord.length; i++ ){
        if(splitWord[i] === "B") {
            count++
        }
    }

    return count //returning count of Bs after checking all the characters
}

bCount("BBC")