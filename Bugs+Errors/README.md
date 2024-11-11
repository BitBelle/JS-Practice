# BUGS AND ERRORS

Bugs are flaws in a program that prevent it from working as expected.

## Language Flexibility (Javascript Looseness)

Javascript is forgiving it doesnt catch mistakes right away. It allows "flexiblity" but can lead to unexpected behavior. 
For example:

```javascript
let result = true * "monkey"; // results in Nan
```

Instead of warning about a nonsensical calculation, JavaScript lets it happen. The result, Nan, may then pass through the program and only cause problems later.

However, some errors in JavaScript are immediately caught, such as:
    * Syntax errors - eg. missing parentheses or incorrect punctuation.
    * Type errors - Trying to call something as a function when its not, or accessing a property on an undefined variable.


## Strict mode

JavaScript has a stricter mode, which we can enable by adding "use strict"; at the start of a file or function. In strict mode, JavaScript enforces stricter rules and throws errors for potentially problematic code.

```javascript
function canYouSpotTheProblem(){
    "use strict";
    for(counter = 0; counter < 10; counter++){
        console.log("Happy happy");
    }
}

canYouSpotTheProblem(); //throws ReferenceError: counter is not defined

```

In strict mode, if you forget to declare a variable with let, const or var, it throws an error. Without strict mode, JavaScript assumes you want to create a global variable, which can be risky.

Another strict mode feature is that if you call a functon as a regular function (`sayHello();`) instead of a method(`myObject.sayHello();`), this will be undefined. Without strict mode, this would refer to the global object (which could lead to errors if properties are unintentionally modified on this global object).


## Types

A type refers to the kind of data a variable holds, such as a string, number or array.
Different programming languages handle types differently:

* **Statically Typed Langauges**(like Java or C#) - checks types before the program runs. They require that each variable has a specific type (like int for numbers and string for text). This way the computer can catch mistakes early.

* **Dynamically Typed Language**(like JavaScript) - only check types when the program runs. JavaScript doesnt need you to declare types for your variables, its flexible but can lead to unexpected behavior if a variable is not the type you assumed.


### How JavaScript Manages Types

JavaScript often converts values automatically to the type it expects. This is called type coercion or implicit type coercion.

**Example of Implicit Type Coercion**

```javascript
console.log("The result is: " + 5 + 3); // The result is: 53

```

to avoid the above, we can use parentheses:

```javascript
console.log("The result is: " + 5 + 3);

```
### Why Type Matters in Functions

When writing functions, its helpful to know what kind of values go in and come out. For example:

```javascript
function add(a, b){
    return a + b;
}

```

If a and b are numbers, this function works fine. But if we accidentally pass a string, we get unexpected results:

```javascript
add(5, "3"); //returns "53" instead of 8

```

### How Type Annotations Help

Types in functions help prevent confusion about the values going in or out. Adding a comment with a "type annotation" can clarify things. Example:

```javascript
// (a:number, b:number) => number
function add(a, b) {
    return a + b;
}

```
The comment `(a: number, b: number) => number` means:
* The function takes two arguments, both numbers.
* The result is also a number.

By knowing the type requirements, we are less likely to accidentally pass the wrong kind of data.


### Types with Type Variables

Sometimes, we want a function to handle any type, like one that picks a random item from an array. Type variables let us do this. A type variable (often called `T`) can represent any type. Here's an example with comments:

```javascript
// (array: T[] => T)
function randomPick(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

```

* `T[]` means an array of any type `T` (like an array of numbers or strings)
* `=> T` means the function returns an item of type `T`


### Using TypeScript for Type Safety

JavaScript alone doesn’t enforce types, but TypeScript, a "superset" of JavaScript, adds this feature. TypeScript allows you to specify types explicitly, and it checks them before the code runs. Here’s how the `add` function might look in TypeScript:

```javascript
function add(a: number, b: number): number {
  return a + b;
}

```

With TypeScript, if we try to call add(5, "3"), it will throw an error before running the program because 3 is not a number. TypeScript adds rigor to code, helping catch type-related mistakes early.


## Testing

Testing is a crucial part of programming because it helps find mistakes and ensures code behaves as expected. Since JavaScript doesn’t inherently check for errors before running, it’s up to us to catch any issues.

### Why Automated Testing?

Manually testing your code every time you make a change is slow, tedious, and easy to miss something important. Automated testing solves this problem by using programs that test other programs, allowing you to verify your code quickly and reliably. The benefits of automated testing include:

* Speed - Tests run almost instantly.
* Consistency - Tests catch errors immediately when something breaks.
* Confidence - You can add features or make changes knowing that your tests will help prevent any accidental breakages.

**Example of a simple test**

```javascript
function test(label, body) {
    if (!body()){
        console.log(`Failed: ${label}`);
    } else {
        console.log(`Passed: ${label}`)
    }
}

test("Convert Latin text to uppercase", () => {
    return "hello".toUpperCase() === "HELLO";
});

test("convert Latin text to uppercase", () => {
  return "rrr".toUpperCase() === "HELLO";
});

```

This `test` function takes two arguments:

* label: a string describing what the test is doing.
* body: a function that returns `true` if the test passes and `false` if it fails.

Each test runs and checks if toUpperCase behaves as expected. If one of these tests fails, we get a message, like `Failed: convert Greek text to uppercase`.

### Test Runners

While writing manual tests like this works, it can become repetetive and harder to manage as a project grows. Test runners (like Jest, Mcha and Jasmine) help by:
    * Providing fuctions for defining and organizing tests.
    * Running our entire suite of tests automatically.
    * Giving detailed feedback when tests fail, making it easier to identify and fix issues.

**Example of test using Jest, a popular test runner:**

```javascript
test("convert Latin text to uppercase", () => {
  expect("hello".toUpperCase()).toBe("HELLO");
});

```
With Jest, if this test fails, you get a detailed message showing what went wrong, which helps speed up debugging.

### Testing Challenges

Some code is easier to test than others. For example:

* **Pure Functions** (which don't rely on external data and always return the same result for the same input) are easy to test.

* **Functions that interact with external objects** (like databases, web APIs, or files) are trickier because they rely on outside factors.

To handle these cases, we might use mocks or stubs to simulate external dependencies during testing. This allows us to test the function itself without actually connecting to a database or making an HTTP request.


## Debugging

Debugging is about methodically finding and fixing the source of a problem in the code.

**Example:**

Here is a function thats trying to convert a number to a string in a specific base:

```javascript
function numberToString(n, base = 10){
    let result = "";
    let sign = "";

    if (n < 0>){
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        n /= base
    } while (n > 0) {
        return sign + result;
    }
}

console.log(numberToString(13, 10))

```

**Step 1: Analyzing the code**

The goal is to repeatedly take the last digit of n and add it to result, then remove this last digit from n by dividing by base.
But the problem is here:

```javascript
n /= base;

```

This divides n but doesn’t make it an integer. In other words, it’s leaving n as a decimal, which then messes up the rest of the loop.

**Step 2: Adding Observations with console.log**

Let’s add some console.log statements to see what values n takes during each loop:

```javascript
function numberToString(n, base = 10) {
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    console.log("Current result:", result);
    console.log("n before division:", n);
    n /= base;
    console.log("n after division:", n);
  } while (n > 0);
  return sign + result;
}
console.log(numberToString(13, 10));

```

**Step 3: Finding the Solution**

From our `console.log`, we'll see that `n` becomes a fraction after dividing, such as 1.3 or 0.13. To fix this, we need n to stay a whole number so that we can remove one "digit" at a time.

To do this, we'll replace n /= base with `n = Math.floor(n / base)`, which will divide n by base and then round it down to the nearest whole number.

**Fixed Solution:**

```javascript
function numberToString(n, base = 10) {
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n = Math.floor(n / base);  // Corrected line
  } while (n > 0);
  return sign + result;
}
console.log(numberToString(13, 10));  // Expected output: "13"

```

### Debugging with Breakpoints

For more complex cases, using breakpoints is useful:

* Open your browser’s developer tools (usually accessible with F12).

* Go to the "Sources" tab, find the code file, and click the line number to set a breakpoint.

* Run the code, and it will pause at the breakpoint, allowing you to inspect variables and understand the program flow.

Or, you can insert `debugger`; directly in the code to pause execution:

```javascript
do {
  result = String(n % base) + result;
  debugger;  // Pauses here if developer tools are open
  n = Math.floor(n / base);
} while (n > 0);

```

## Error Propagation

Error propagation is ensuring errors are managed in a way that prevents a program from crashing, confusing the user or silently failing.

**Here are a few approaches to managing errors.**

**1. Returning Special Values**

Sometimes, if an operation fails, you can return a specific value to signal an error. For example, when asking a user to input a number, a function could return null or `undefined` if the input isn't a valid number. This way, the caller of the function can check if the value is valid and decide what to do if it's not.

**Example: Returning null for Invalid Input**

```javascript
function promptNumber(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null; // Return null if the input is not a number
  return result; // Otherwise, return the number
}

console.log(promptNumber("How many trees do you see?"));

```
**2. Returning Objects with Status Information**

If a function's result could include every possible return value, an alternative approach is to wrap the result in an object, marking success or failure explicitly. This way, the caller can check if the function succeeded without mistaking a valid return value for an error.

**Example: Using an Object to Indicate Success or Failure**

```javascript
function lastElement(array) {
  if (array.length === 0) {
    return { failed: true }; // Indicate failure
  } else {
    return { value: array[array.length - 1] }; // Return the last element with a success flag
  }
}

let result = lastElement([]);
if (result.failed) {
  console.log("Array was empty.");
} else {
  console.log("Last element:", result.value);
}

```

Here, if lastElement is called on an empty array, it returns { failed: true }, so we can tell that it didn’t succeed. This makes error-checking more structured, especially when dealing with complex return types.

**Drawbacks of Special Values and Wrapping in Objects**

Returning special values (like null) or wrapping results in objects works but can become cumbersome, especially if errors are common.


## Exceptions

Exceptions are special events in a program that occur when something unexpected happens.
Instead of the program continuing and causing errors elsewhere, an exception 
stops the normal flow of execution and "jumps" to the nearest error handler, 
which knows how to deal with the problem.

Think of exceptions like an emergency exit in a building. 
If a fire breaks out (an error), people use the emergency exit 
(exception handling) to get out safely instead of continuing
their usual path.

**How to use Exceptions**

Exceptions are handled using `throw` and `try...catch` keywords.

`throw` - used to raise or trigger an exception
`try` - block of code where you expect things might go wrong
`catch` - block of code that handles the exception if one is 
thrown in the try block

Example: Simple Exception handling

```javascript
function divide(a, b){
  if (b === 0){
    throw new Error("Cannot divide by zero"); // raising an exception
}
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0)); //throws an exception
} catch (error) {
  console.log("An error occured: " + error.message); //catches the exception
}

```

**Example 2: Handling user input**

```javascript
function promptDirection(question){
  let result = prompt(question); 
  if (result.toLowerCase() === "left"){
    return "L"
  } else if (result.toUpperCase() === "right") {
    return "R"
  } throw new Error("Invalid direction: " + result); //raising an exception for invalid input
}

```

* `promptDirection` asks the user to type "left" or "right". If the input is invalid, it throws an exception.
* The `look` function calls `promptDirection` without worrying about handling errors itself. If `promptDirection` throws an error, the `look` function stops running, and control jumps to the `catch` block in the `try...catch` statement.
* The `catch` block logs an error message without crashing the program.

**Why use Exceptions?**

* Simplified Error Handling - You only need to write error-handling code where the error might be raised (throw) and where it's caught (catch). Functions in between don’t need to worry about error handling.
* Readable Code - Code stays clean and readable because the handling of errors is separated from the main logic.


## Cleaning up after Exceptions

When an exception occurs, the program's control flow is disrupted,
which may lead to incomplete operations or "side effects" that 
were only partially carried out.
To avoid such issues, is where the finally block becomes valuable.

The finally block is executed after the try block, no matter what 
happens. This makes it useful for cleanup tasks that should run 
regardless of whether an error occured or not.

**Example: Basic cleanup with `finally`**

```javascript
function openFile(file){
  console.log(`Opening file: ${file}`);
  return {
    write: (content) => {
      console.log(`Writing content: ${content}`);

      //simulating an error 
      if (content === "error"){
        throw new Error("Simulated write error");
      },

      close: () => console.log("File closed")
    }
  }
}

function writeToFile(file, content) {
  let fileHandle;
  try{
    fileHandle = openFile(file); //assuming openFile opens the file
    fileHandle.write(content); //could throw an exceptin
  } catch (error) {
    console.log("An error occured: " + error.message);
  } finally {
    if (fileHandle) {
      fileHandle.close(); //ensures the file is closed no matter what
    }
  }
}

//testing with normal content
writeToFile("Example1.txt", "Ola Mexico");

//testing with content that triggers error
writeToFile("Example2.txt", "error");

```

Example: Banking

```javascript
const accounts = {
  a: 100,
  b: 0,
  c: 20
};

function getAccount() {
  let accountName = prompt("Enter an account name");
  if (!Object.hasOwn(accounts, accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }
  return accountName;
}

function transfer(from, amount) {
  if (accounts[from] < amount) return; // Check if there are enough funds
  let progress = 0; // Track progress to handle partial changes

  try {
    accounts[from] -= amount; // Step 1: Deduct money from the source account
    progress = 1;
    accounts[getAccount()] += amount; // Step 2: Add money to the target account
    progress = 2;
  } finally {
    if (progress === 1) {
      // If the code reached step 1 but not step 2, revert the change
      accounts[from] += amount;
      console.log("Transaction rolled back due to an error.");
    }
  }
}

try {
  transfer('a', 50);
  console.log(accounts);
} catch (error) {
  console.log("Transaction failed: " + error.message);
}

```

**Why use the `finally` Block?**

* Resource Management: Ensures resources (e.g.files, connections) are released properly.
* State Consistency: Keeps the program's data in a valid state even when exceptions disrupt the flow.
* Reliability: Adds reliability to code by making sure critical cleanup code runs no matter what


## Selective Catching

Selective catching allows one to handle specific, expected 
errors while letting unexpected or programming errors propagate up 
the stack.

When handling exceptions, it's important to ensure that you're
only catching and managing specific exceptions that you anticipate. 
Blanket-catching all exceptions without filtering them can lead to 
problems like infinite loops or masking important error messages

**Why Be Selective with Exceptions?**

If you catch every type of exception without checking what kind 
of error it is, you might mistakenly treat programming errors 
(like typos) as if they were expected problems (like invalid user 
input). This can cause issues such as infinite loops or hiding 
useful error information, making debugging difficult.

**Example:**

```javascript
for (;;) {
  try {
    let dir = promtDirection("Where?"); // typo!
    console.log("You chose ", dir);
    break;
  } catch (e) {
    console.log("Not a valid direction. Try again.");
  }
}

```

**Defining a Custom Error Class**

To handle specific types of exceptions, we can create a custom error class:

```javascript
class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

```

* `class InputError extends Error {}` - This defines a new type of 
error that behaves like a regular Error object but can be 
recognized separately. It uses extends to inherit from the 
built-in Error class.

* `throw new InputError("Invalid direction: " + result);` - If the input is neither "left" nor "right", an `InputError` is thrown with a message.

**Using instanceof to Selectively Catch Errors**

We can now update our loop to only catch `InputError` instances:

```javascript
for (;;) {
  try {
    let dir = promptDirection("Where?");
    console.log("You chose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again.");
    } else {
      throw e; // Re-throws other unexpected errors
    }
  }
}

```

* `if (e instanceof InputError) {}` - This checks if the caught 
exception (e) is an instance of InputError. If it is, we handle 
it by logging an appropriate message and prompting the user again.

* `else { throw e; }` - If the exception is not an InputError, 
it is re-thrown so that it can be caught by a higher-level handler 
or reported as a genuine programming mistake.


## Assertions

Assertions are statements in code that check whether a 
condition is true. If the condition is not true, an assertion 
will throw an error. They are a tool used to catch programmer 
mistakes early by verifying assumptions made in the code.

Assertions are not inended to handle typical user input errors 
or runtime errors.
Instead, they are used to identify bugs during development by 
ensuring the code behaves as expected.


**Example of an assertion**

A function that returns the first element of an array

```javascript
function firstElement(array) {
  if (array.length === 0) {
    throw new Error("firstElement called with an empty array");
  }
  return array[0];
}

```

* `if (array.length == 0)` - This checks if the array is empty.
* `throw new Error("firstElement called with an empty array");` - 
If the array is empty, an Error is thrown with a message explaining the issue.

**Why Use Assertions?**

* Immediate Feedback - By "blowing up" the program when an unexpected state is detected, assertions provide immediate feedback during development.
* Debugging Aid - They help pinpoint where an assumption in the code has been violated, making debugging faster and easier.
* Avoid Silent Errors - Without an assertion, calling firstElement([]) would return undefined, which could propagate silently through the code and cause subtle bugs.

**When to Use Assertions**

* Critical Assumptions - Use assertions when there are assumptions in the code that must always be true.
* Common Mistakes - If there's a part of the code where you or your team often make mistakes, adding an assertion there can catch those errors early.
* Development and Testing - Assertions are most valuable during development and testing. They should be removed or disabled in production code to avoid unnecessary overhead.

**Example: Function that caluculates the average of an array of numbers**

```javascript
function calculateAverage(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Expected an array as input");
  }
  if (numbers.length === 0) {
    throw new Error("Cannot calculate average of an empty array");
  }
  
  let sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

```

`if (!Array.isArray(numbers))` - Checks if the input is actually an array. If not, an error is thrown.
`if (numbers.length === 0)` - Ensures the array is not empty, as calculating the average of an empty array is undefined.

**Benefits of Using Assertions**

* Catch Mistakes Early - Assertions help developers catch mistakes as soon as they occur.
* Improved Code Clarity - When reading the code, assertions can indicate what assumptions the code makes.
* Prevents Silent Failures - Without assertions, certain issues might go unnoticed until they cause more complex errors.

**When Not to Use Assertions**

* Input Validation - Assertions should not be used for regular input validation. For example, user inputs that are expected to vary should be handled with proper validation and error handling, not assertions.
* Overuse - Adding too many assertions can make code noisy and harder to read. Reserve them for critical parts of the code.
