# High-Order Functions

## Abstraction

Process of simplifying complex operations by focusing on the essential features and hiding unnecessary details.

Abstraction - is like condensing a lengthy, detailed explanation into a simpler one, where unnecessary steps are abstracted away(hidden behind the scenes), allowing us to focus on the higher-level concept(the bigger picture)/what the program is supposed to do.

In code, this is done by grouping detailed operations into functions that represent higher-level actions. Once a function is defined, it can be refered to by calling its name without worrying about the inner workings.

**Example 1:**

```javascript
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}
const multiplyByTwo = multiplyBy(2);
multiplyByTwo(5); // 10
```

Abstraction here: The process of multiplying by 2 is simplified into a reusable function.

Abstraction allows us to express higher-level ideas by wrapping detailed operations in functions, reducing repetitive code and making it more understandable and maintainable.

## Abstracting Repetition

Its the process of generalizing repeated actions (like loops) by creating reusable functions that can handle different tasks.

A higher-order function (like repeat) abstracts away the repeated process (e.g., looping) and allows us to pass in the specific action we want to repeat as a function argument.

**Example 2:**

```javascript
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log); // Logs 0, 1, 2
```

_Abstraction here:_ The process of repeating something n times is generalized into the repeat function, and the specific action (e.g., logging or adding to an array) is passed as a function.

**Example 3: calling the function repeat with an action**

```javascript
let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});

console.log(labels); //["Unit 1", "Unit 2",...."Unit 5"]
```

Abstracting repetition makes code more flexible by allowing us to define the repetitive logic once (like a loop) and then use it with different actions.

It promotes reusability and clarity by separating the "what needs to be done" from "how many times it needs to be done."

### Key take-aways in both Abstraction and Abstracting repetition:

1. Abstraction (in general) helps simplify complex operations into reusable, high-level functions.

2. Abstracting repetition allows you to handle repeated tasks (like loops) more flexibly by passing the repeated action as a function.

3. Both concepts are about reducing redundancy and increasing flexibility in code, making it easier to maintain and extend.


## High Order Functions

This is a function that either:
*  Takes another function as an arguement(like passing a value)
*  Returns a new function

High-order functions let us abstract over actions, not just values. Thus, we can write code that is flexible, reusable, and more powerful because we can pass in custom behaviors or return new ones.

***What it means by abstracting over values:***

In general functions we often abstract(generalize) over values. 
In the below example, `x` and `y` are values passed to the function and the function's job is simple: takes the values and returns the sum.

```javascript
function add(x, y) {
  return x + y;  // Abstracts over the values 'x' and 'y'
}

console.log(add(2, 3));  // Outputs: 5
```

***What it means abstracting over actions:***

With high-order functions we can also abstract over actions. Meaning that the function can now deal with values like numbers or strings and actions (functions) that desxribe what to do.

**Example: Filtering out even numbers**

```javascript
function filterEvenNumbers(numbers){
    let result = []
    for (let number of numbers){
        if (number % 2 === 0){
            result.push(number)
        }
    }

    return result
}

console.log(filterEvenNumbers([1,2,3,4,5,6,7,8,9,10]));
```
Here, the *action* checks if the number is even.

But now what if we want to filter out numbers that are greater than 3? 

Well, instead of writing a new function for every different action(like filtering even numbers or filtering greater than 3), we can create a high order function that abstracts over the action we want to perform on the array.

**Example: Rewriting the function using high-order abstraction**

```javascript
function filterArray(numbers, action){
    let result = []
    for (let number of numbers){
        if (action(number)) { //action is abstracted/generalized, we get to decide what function to pass
            result.push(number)
        }
    }

    return result;
}

// now we can pass any function that we want 
console.log(filterArray([1,2,3,4,5], number => {number % 2 === 0}));
console.log(filterArray([1,2,3,4,5], number => {number > 3}));

```
Instead of hardcoding the condition (like `number % 2 === 0`), we abstract the action by passing in a function (`action`) that describes what to do with each number.


### Importance of High-order functions

They are useful for:
    1. Creating new functions dynamically
    2. Changing or modifying the behavior of existing functions
    3. Implementing custom control flows or decision-making process
    4. Providing functional iterations like `forEach`, `map` and `filter`


#### 1. Creating new Functions

**Example: Creating new functions using HoF**

```javascript
function greaterThan(n){
    
    // returning a new function that checks if m > n
    return m => m > n
}
// creating a new function that checks if a number is > 10
let greaterThan10 = greaterThan(10)

console.log(greaterThan10(11)); //outputs true
```

#### 2. Modifying other functions

**Example: Modifying a function by adding extra behavior**

```javascript
function noisy(f) {

    // returning a new function that takes any number of arguements
    return (...args) => {
        // logging the arguments received
        console.log("Calling with", args);

        // calling the original function with those arguments
        let result = f(...args)
        console.log("Called with", args, ", returned", result);

        return result;
    }

}
noisy(Math.min)(3, 2, 1)
```
**So, the function has been modified by:**

1. *Passing a Function as an Argument* - By passing `Math.min` to `noisy`, we allow noisy to take control over how `Math.min` is called

2. *Returning a New Function* - `noisy` creates and returns a new function that wraps around the original function (`Math.min`). This new function can perform additional actions before and after calling the original function.

3. *Adding Extra Behavior* - Extra behavior added by noisy includes:
    *Logging the Input* - logs the arguments that were passed to it. Helping in debugging and understanding what inputs the function is working with.
    *Logging the Output* - logs what the function returned. This provides insight into the function's behavior and results without modifying the original function's implementation.


#### 3. Providing new Control Flow

HOFs can be used to implement control structures, which is like defining new ways for how code should be executed based on certain conditions. It makes it easier to manage complex logic without hardcoding if-else statements everywhere.

**Example:**
```javascript
function unless(test, then){
    if (!test) then()

}

repeat(3, n => {
    unless(n % 2 === 1, () => {
        console.log(n, "is even");
    })
})

```
In the above example: 
   * `unless(test, then)` - runs the then action only if the test condition is false.
   * `repeat(n, action)` - A function that executes a given action n times. It repeats a check for even numbers 3 times (for 0, 1, and 2).


#### 4. Built-in `forEach` and Similar iteration Functions

JS comes with built-in high-order functions like `forEach`, `map`, `filter` and `reduce`, which allows 
one to work with arrays in a more functional way. These functions abstract the logic for looping and applying actions to each element.

**Example:**

```javascript
["A", "B", "C"].forEach(letter => console.log(letter));
```

## Filtering Arrays

*Filtering* means going through an array and keeping only the items that match a certain condition or test.

**Example: Finding red fruits in a list of various fruits**

```javascript
let fruits = [
  { name: "Apple", color: "red" },
  { name: "Banana", color: "yellow" },
  { name: "Cherry", color: "red" },
  { name: "Grapes", color: "purple" },
  { name: "Lemon", color: "yellow" }
];

// filter function
function filter(array, test){
    let passed = [];

    for (let element of array){
        // check if fruit passes the test(is red)
        if (test(element)){
            // if yes add it to passed[]
            passed.push(element)
        }
    }

    //returning the red fruits
    return passed;
}

const redFruits = filter(fruits, fruit => fruit.color === "red" );
console.log(redFruits);

// using the built-in filter method
const redFruits2 = fruits.filter(fruit => fruit.color === "red")
console.log(redFruits2);

```

## Transforming with `map`

`map` method in JavaScript, transforms an array by applying a function to each of its elements. 
The function takes in an element, changes it in some way, and then returns a new array with these changed elements.

**Example: Creating an array that contains only student names**
```javascript
let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 90 }
];

// writing the map function
function map(array, transform){
    // array to hold transformed students
    let mapped = [];

    // looping through each student in the array
    for (let element of array){
        // applying the transformation and adding the student to the new array
        mapped.push(transform(element));
    }

    // returnin the transformed elements
    return mapped;
}

let studentNames = map(students, student => student.name)
console.log(studentNames);

// using the built-in map method
let studentNames2 = students.map(student2 => student2.name)
console.log(studentNames2);

```

## Summarizing with `reduce`

`reduce` method in JavaScript helps to combine all the elements of an array into a single value. 
Its like taking a bunch of values and "summarize" them into one.

Its super useful when getting, sum of numbers, finding the maximum, calculating a total, or doing anything 
that involves combining values in some way.

**How reduce works:**

1. Start with a value (like 0 for summing).
2. Go through each element in the array.
3. Combine the current value with the next element of the array using a combining function.
4. Return the final result after all elements are combined.

**Example 1: Summing Sales of a Store**
```javascript
let sales = [100, 250, 75, 200, 150];

//reduce function to sum-up
function reduce(array, combine, start){
    // starting with an initial value
    let current = start;

    // lopping through each element
    for (let element of array) {
        // combine current value with element
        current = combine(current, element);
    }

    //return the final value
    return current;

}

let totalSales = reduce(sales, (a, b) => a + b, 0);
console.log(totalSales)

// using the built-in reduce method
let totalSales2 = sales.reduce((a, b) => a + b, 0);
console.log(totalSales2);

```

**Example 2: Finding the Maximum Sale**
```javascript
let maxSale = sales.reduce((max, sale) => (sale > max ? sale : max), 0) 

```

## Composability

Composability is the idea of comining simple, reusable functions to perform more complex tasks. 
Instead of writing long, complex code in one go, we can break it down into smaller steps and compose these steps together.

In JS, we can use high-order functions like `filter`, `map` and `reduce` to achieve composability. 
These functions make code cleaner and easier to understand by breaking down complex tasks into smaller, manageable operations.

**Example 1: Finding the average price of available products**

```javascript
const products = [
  { name: "Laptop", price: 1200, available: true },
  { name: "Phone", price: 800, available: false },
  { name: "Tablet", price: 600, available: true },
  { name: "Monitor", price: 300, available: true },
  { name: "Headphones", price: 150, available: false }
];

// filtering available products
const availableProducts = products.filter(product => product.available);
console.log(availableProducts);

// using map to create an array of only prices of the available product
const availablePrices = availableProducts.map(product => product.price);
console.log(availablePrices);

//using reduce to sum up the prices and divide by no. of available products to get average price
const averagePrice = availablePrices.reduce((total, price) => total + price, 0) /
products.filter(product => product.available).length;

console.log(averagePrice);
// Output: 700

```

**Combining all three steps using composability:**

```javascript
const averagePriceOfAvailableProducts = products
  .filter(product => product.available)  // Step 1: Filter
  .map(product => product.price)         // Step 2: Map prices
  .reduce((total, price) => total + price, 0) / 
  products.filter(product => product.available).length; // Step 3: Reduce to average

console.log(averagePriceOfAvailableProducts);
// Output: 700

```

**Example 2: Loop alternative**

Using the traditional loop (without using `filter`, `map` and `reduce`)

```javascript
let totalPrice = 0;
let count = 0;

for (let product of products){
    if (product.available){
        totalPrice += product.price;
        count++
    }
}

const averagePriceLoop = totalPrice / count;
console.log(averagePriceLoop);

```

**Importance of using Composability**

1. Readable - With `filter`, `map`, and `reduce`, the intent of the code is very clear—you filter the products, map the prices, and reduce them to an average.
2. Reusable - Each function (`filter`, `map`, and `reduce`) is doing one thing, making it easy to reuse parts of the logic.
3. Scalable -  If you want to add more logic (e.g., finding the most expensive product), you can do it easily by adding another composed function.
