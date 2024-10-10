# High-Order Functions

### Abstraction

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

### Abstracting Repetition

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

1. Abstraction (in general) helps you simplify complex operations into reusable, high-level functions.

2. Abstracting repetition allows you to handle repeated tasks (like loops) more flexibly by passing the repeated action as a function.

3. Both concepts are about reducing redundancy and increasing flexibility in code, making it easier to maintain and extend.


## High Order Functions

This is a function that either:
*    1. Takes another function as an arguement(like passing a value)*
*    2. Returns a new function*

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

Example: Filtering out even numbers

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

Example: Rewriting the function using high-order abstraction

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
Example: Creating new functions using HoF

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
Example: Modifying a function by adding extra behavior

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




