# **Objects in JavaScript**

An *Object* is a collection of properties where each property has a key-value pair.

*Objects are passed by reference*, meaning, when assigning an object to a variable we are copying the reference(memory address) to the object, and not the object itself

***Objects can be defined in 3 different ways:***
    a. Using object literalls - the key-value pairs inside curly braces
    b. Using the `new` keyword 
    c. Using the object constructor

***Example using object literalls***

```javascript
let person1 = {
    name: "Mercy Wainaina",
    course: "Software Engineering",
    age: 16
}
```
*Creating an empty object and then adding the properties*

```javascript
let person2 = {}

person2.name = "John Doe"
person2.course = "Graphics Design"
person2.age = 18
```

***Using the `new` keyword***

```javascript
let obj1 = new Object();

obj1.name = "Mary Doe";
obj1.course = "IT";
obj1.age = 20;
```

*Object Properties* - are named values
*Accessing properties* - can be done in 2 ways;
    a. dot notation eg. obj1.name
    b. block-brackets eg obj1["name"]

*Object Methods* - Are actions that can be performed on objects

*Objects are mutable* - The properties can be changed even after the object has been created.

Example:
```javascript
<!-- object is mutable -->
let person = {
    name: "Alice";
    age: 25;
}

<!-- we can change its properties -->
person.name = "Bob";
console.log(person)
```

<!-- Arrays are also mutable -->
```javascript
let numbers = [1, 2, 3]
numbers.push(4) //modifying the array

console.log(numbers)
```

**Immutable**
Primitive values are immutable.
Primitives are passed by value, meaning changes to a copy do not affet the original.

Example:

```javascript
let x = 30;

//making a copy of x
let y = x;

// replacing initial value of y
y = 40;

console.log(x) //value of x doesnt get affected
```


## Arrays in JavaScript

An array is an object used to store multiple values in a single variable.

***Arrays can be created in 3 ways;***

***Using array literalls***

````javascript
let fruits = ["mangoes", "bananas", "apples"];
````

***Using array constructor***

```javascript
let numbers = new Array(1, 2, 3);
//[1,2,3]
```

***Using an empty array - to add things later***

```javascript
let vehicles = []

vehicles.push("lorry")
```


## Accessing and modifying arrays
We can access, modify and add elements to an array using bracket notation

```javascript
let fruits = ["apple", "lemon", "berries"]
console.log(fruits[0])

fruits[1] = "melon" //modifying index 1 
console.log(fruits)
```

## Array Properties and Methods
1. length property - gives total number of elements in the array

```javascript
let fruits = ["apple", "lemon", "berries"]
console.log(fruits.length)
```

## Array Methods

1. push() - adds one or more elements to the end of the array

```javascript
fruits.push("grapes");
console.log(fruits); //["apple", "lemon", "berries", "grapes"]
```

2. pop() - removes and returns the last element of the array

```javascript
let lastFruit = fruits.pop();
console.log(lastFruit); // grapes
console.log(fruits); //["apple", "lemon", "berries"]
```

3. unshift() - adds elements at the beggining of the array

```javascript
fruits.unshift("Kiwi");
console.log(fruits); //["Kiwi", "apple", "lemon", "berries",]
```

4. shift() - removes and returns the first element of the array

```javascript
let firstFruit = fruits.shift()
console.log(firstFruit);
```

5. splice() - adds and removes elements from an array

```javascript
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits) //['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
```

6. slice() - returns selected elements in an array as a new array
             Syntax - array.Slice(start, end) - end is exclusive

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];

let newFruits = fruits.slice(1, 3);

console.log(newFruits);
```

7. concat() - combines two or more arrays into a new array

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let tropicaFruits = ["papaya", "pineapple"]

let allFruits = fruits.concat(tropicalFruits);
console.log(allFruits);
```

8. join() - joins array elements to a string

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitString = fruits.join(", ");

console.log(fruitString);
```

9. reverse() - reverses the order of elements in an array

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();

console.log(fruits);
```

10. sort() - sorts elements in an array in alphabetical and ascending order

```javascript
fruits.sort();
console.log(fruits);
```

12. reduce() - combines all elements in an array into a single value. It works by applying a function to an accumulator and each element in the array, one by one.

eg.
```javascript
let numbers = [1, 2, 3, 4, 5];

// Using reduce to sum the numbers
let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15
```

11. includes() - checks if the array contains a certain element. It returns *true* if element is found and *false* if not. (its case sensitive)

`array.includes(element)`

*array* - array we are checking
*element* - value we are checking for

```javascript
let fruits = ["apple", "banana", "mango"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("orange")); // false
```

## Iterating Over Arrays

1. for loop

```javascript
for (let i =0; i<fruits.length; i++>){
    console.log(fruits[i]);
}
```

2. forEach() - Executes a provided function once for each array element.

```javascript
fruits.forEach(fruit => {
    console.log(fruit);
})
```

3. map() - Creates a new array by applying a function to each element of the original array. The original array remains unchanged.

```javascript
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);
```
*When to use `map()`:*
When transforming each element of an array.
When you need a new array where each element is based on some transformation

4. filter() - Creates a new array by keeping only the elements from the original array that a pass a certain condition(the condition defined in the function provided)

```javascript
let shortFruits = fruits.filter(fruit => fruit.length <= 5);
console.log(shortFruits); 
```

## Destructuring Arrays

This is unpacking/extracting values from arrays into variables.

```javascript
let [first, second] = ["apple", "banana", "mango", "grapes"]
console.log(first);
console.log(second);
```

Unpacking the 1st and 2nd elements into the first and second variables - mango and grapes are ignored since no variable shave been assigned to them.

*Destructuring in function parameters*

```javascript
function printFruits([first, second]) {
    console.log(first);
    console.log(second);
}

printFruits(["apple", "banana", "mango"])
```

## Rest Operator
Gathers multiple values into an array/object

Often used in: 
*Function arguments* - to gather multiple arguments/ handle unknown number of elements
*Array Destructuring* - to gather remaining elements of an array

Example 1: Rest Operator in Functions
```javascript
function sum(...numbers){
    let total = 0;

    for (let number of numbers){
        total += number
    }

    return total
}

console.log(sum(5, 10, 15));
console.log(sum(1,2,3,4,5,6,7,8,9));
```

Example 2: Rest Operator in Array Destructuring
```javascript
let fruits = ["apple", "banana", "mango", "orange", "grape"]

let [first, second, ...rest] = fruits;

console.log(first); //"apple"
console.log(second); //"banana"
console.log(rest); //["mango", "orange", "grape"]
```

Example 3: Rest Operator in Objects
```javascript
let user = {
  name: "Alice",
  age: 25,
  country: "Kenya",
  occupation: "Developer"
};

let { name, ...details } = user;

console.log(name);    // "Alice"
console.log(details); // { age: 25, country: "Kenya", occupation: "Developer" }

```