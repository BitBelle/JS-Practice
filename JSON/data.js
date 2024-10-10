let data = {
    squirrel: false,
    events: ["work", "weekend"]
};

// convert the JS object to JSON string
let jsonString = JSON.stringify(data);
console.log(jsonString); 
// Output: {"squirrel":false,"events":["work","weekend"]}

//convert it back to JS object
let parsedData = JSON.parse(jsonString);
console.log(parsedData)
