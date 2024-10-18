let myMap = new Map();

// String as a key
myMap.set("name", "Alice");

// Number as a key
myMap.set(123, "A number key");

// Object as a key
let person = { name: "John" };
myMap.set(person, "A person object");

// Function as a key
myMap.set(function() {}, "A function key");

// Retrieve values
console.log(myMap.get("name"));        //  "Alice"
console.log(myMap.get(123));           //  "A number key"
console.log(myMap.get(person));        //  "A person object"
console.log(myMap.get(function() {})); //  undefined (Different function object)
