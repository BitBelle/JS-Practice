# **Objects in JavaScript**

An *Object* is a collection of properties where each property has a key-value pair.

*Objects are passed by reference*, meaning, when assigning an object to a variable we copying the reference(memory address) to the object, and not the object itself

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

Object Properties - are named values
Accessing properties - can be done in 2 ways;
    a. dot notation eg. obj1.name
    b. block-brackets eg obj1["name"]

Object Methods - Are actions that can be performed on objects

Objects are mutable - The properties can be changed even after the object has been created.

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


##**Arrays in JavaScript**
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


**## Accessing and modifying arrays**
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

## Iterating Over Arrays
