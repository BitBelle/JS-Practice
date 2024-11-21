## **JSON (JavaScript Object Notation)**

JSON is a text-based format to represent data. It serializes(converts) JS objects and arrays into a format that can be saved or sent over a network. Its used to send data between servers and web applications, or to store data in a file. 

JSON is similar to how we write objects and arrays in JS, but with some rules:

1. Propert names in JSON must be surrounded by double quotes.
2. Only simple data types are allowed, numbers, strings, 3. booleans, arrays and objects.
3. No comments are allowed in JSON

Example:
```json
{
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}

```

### JSON in Javascript: JSON.stringify and JSON.parse

JSON.stringify() - This function takes in a JavaScript object and converts it into a JSON string.

JSON.parse() - This function takes in a JSON string and converts it back into the original JavaScript object.

Example:
```javascript
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

```

### Importance of JSON
1. Data Storage - used to store data in a simple text file
2. Data Communication - JSON is widely used to send and receive data between a web browser and a server
3. Cross-Language Compatability - JSON can be read by many programming languages, which makes it useful for communication between different systems
