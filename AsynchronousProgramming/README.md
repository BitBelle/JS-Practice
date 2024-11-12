# Asynchronous Programming

## Processor and Execution flow

The *Processor* is the heart of the computer responsible for executing the indtructions of your programs. The speed at which programs execute depend on:
    * Processor speed - how quickly the CPU can handle operations like instructions and calculations
    * Memory speed - how quickly the CPU can access data from RAM(faster than from hard disks)


## Asynchronocity

### Single-threading vs. Multi-threading 

**Single-threading**

In a single-threaded execution, aprogram runs in a single sequence(line by line), one task at a time. This means that the processor has to wait for one task to finish before starting the next one. 

So, when doing something like a *for loop* that processes a large amount of data, the processor is dedicated to that one task until its complete.

**NB.** In single-threading, the procesor executes tasks in a *sequential manner* using only *one thread*.


**Multi-threading**

In Multi-threading, the program can split into smaller threads. These threads can run in *parallel*(if there are multiple CPU cores) or be scheduled by the operating system on a single core(switching between them quickly). These threads share the same memory space, but each one can work on its own portion of the task.

**NB.** Multi-threading takes advantage of *multiple cores*(or at least the ability to quickly switch between the tasks on a single core) to run multiple threads simultaneously, improving efficiency.


### Synchronous vs. Asynchronous Execution

**Synchronous Execution**

Synchronous execution runs line by line in a sequential manner. Each instruction has to complete before the next one starts.

**For Example:**

```javascript
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

This is synchronous, because *Task 2* cant start until *Task 1* is done, and *Task 3* cant start until *Task 2* is done, and so on.

**NB.** The processor executes each task one after another, meaning it *blocks* until the current task finishes before moving to the next.


**Asynchronous Execution**

In Asynchronous execution, tasks that take time (like waiting for data from a server or reading a file/file I/O) can run *without blocking* the rest of the program. Once the time-consuming task completes, the program is notified and can handle the result.

**For Example:** 

Sending a request to the server. Instead of waiting for the server's response before continuing, your program can do other tasks (like updating the UI or responding to user input) while it waits for the server to send back a response.

**NB.** Asynchronous tasks dont make the processor wait around idly while waiting for a result. Instead, the processor can continue handling other operations or switch to other tasks while waiting.


## Callbacks

A *callback* is simply a function that is passed as an argument to another function and is executed when the asynchronous task completes. *Callbacks* are one of the oldest and simplest methods of handling asynchronous operations in JavaScript.

**Using `setTimeout` as a callback**

The built-in function `setTimeout` in JavaScript is a classic example of using a callback in an asynchronous function. Here's how it works:

**Example 1:**

```javascript
setTimeout(() => console.log("Tick"), 500);

```

* `setTimeout` takes two arguments: *a callback function* and *a time delay* in miliseconds.
* It starts a timer, and when 500ms have passed, it calls the callback function.
* In this example, after 500ms, the `console.log("Tick")` will be executed, printing "Tick" to the console.

This allows other parts of the program to continue running while setTimeout is waiting, making it non-blocking.

**Example 2: Reading a file with a Callback**

Imagine we have a function `readTextFile` that reads the content of a file. Since reading from a file (or making requests to a network) is typically slower than accessing memory, we make this operation asynchronous.

```javascript
readTextFile("Shopping_list.txt", content => {
    console.log(`Shopping List:\n${content}`);
});

```

* `readTextFile` function reads a file asynchronously.
* Once the file is read, it executes the callback function with `content` as an argument.
* When `readTextFile` finishes, it passes the file's content into the callback, which in this case logs it to the console.


### Callback Hell: When Callbacks become complicated

Callbacks work well for simple cases, but they can become hard to manage when we need to perform multiple asynchronous tasks in a sequence. 

Lets say we want to compare two files to check if their contents are identical. Using callbacks, we can structure the code like this:

```javascript
function compareFiles(fileA, fileB, callback){
    readTextFile(fileA, contentA => {
        readTextFile(fileB, contentB => {
            callback(contentA === contentB);
        });
    });
}

```

* `readTextFile(fileA, ...)` starts reading `fileA`
* Once `fileA` is read, the first callback is triggered, starting the reading of `fileB`
* Nesting `readTextFile(fileB, ...)` inside the first callback guarantees that `fileA` is fully loaded and its result (`contentA`) is available before we proceed to read `fileB` and compare the two contents accurately.
* Once `fileB` is read, we call callback(contenta === contentB) to pass the result.

**Issues with Callback style:**

*Indentation levels* - Each asynchronous task inside a callback adds a new level of indentation, often referred to as *"callback hell"* or *"pyramid of doom". This structure quickly becomes hard to read and manage, especially with more complex operations.
*Error Handling* - If an error occurs in one of the nested callbacks, handling it becomes tricky. Each level of the callback may need separate error handling logic, making the code error-prone.
*Contagious Asynchronocity* - Any function that uses asynchronous operations (like `compareFiles`) needs to rely on callbacks as well. This means that if part of your codebase is async, it tends to "infect" other parts with asynchronicity, leading to widespread use of callbacks.

**Why Callbacks are considered error-prone**

Callbacks often make error handling more complex, which can lead to bugs.
Here's an example:

```javascript
function fetchData(callback){
        //simulate an async operation
        setTimeout(()=> {
            let data = "Fetched Data";
            if (!data){
                callback(new Error("Error fetching data"), null)
            } else {
                callback(null, data); //calling callback with data on success
            }
        }, 1000);
}


fetchData((error, data) => {
    if (error){
        console.error("Error fetching data:", error.message);
    } else {
        console.log(data);
    }
});

```

If an error occurs, `fetchedData` attempts to handle it by calling the calllback with an error argument. However:
    * We have to remember to check `error` in every callback
    * Errors may propagate unpredictably, and there's no standard way to handle them across different functions, which can cause issues.


## Promises

A *Promise* is like a receipt for an action that will eventually give you a result. But the result isnt available yet, so the promise represents that future value.

A promise can either:
    * *Resolve* - complete successfully and provide the result, or
    * *Reject* - fail and provide an error

When creating a promise, we are essentially saying: "Here's a placeholder for something I will give you later."


### How Promises work

A promise object has methods, one of the most important is the `then` method. The `then` method allows one to specify what should happen when the promise resolves successfully(or reject if handling errors).

**Example 1:**

```javascript
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success){
        resolve("The operation was successful")
    } else {
        reject("There was an error!")
    }
});

myPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })

```

### Creating a Promise

We can create a promise using `new Promise()` and pass it a function that accepts two arguments: `resolve` and `reject`.
    * `resolve` - When the asynchronous operation finishes successfully
    * `reject` - If there is an error during the operation.

**Example 1:**

```javascript
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = "fetched data"
            let success = true;
            if (success){
                resolve(data);
            } else {
                reject("Failed to fetch data")
            }
        }, 1000);
    });
}

fetchData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

```

So, instead of passing a callback function to handle the result, the fetchData() function returns a promise, so we can call `.then()` and ``.catch()` directly on the returned value.


### Chaining Promises

One of the coolest things about promises is that they can be *chained*. Each `then()` method returns a new promise, which means we can continue adding operations after the first one finishes.

**Example:**

```javascript
function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("user data");
        }, 1000);
    });
}

function fetchUserDetails(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("user details");
        }, 500);
    });
}

fetchData()
    .then((userData) => {
        console.log(userData);
        return fetchUserDetails();
    })
    .then((userDetails) => {
        console.log(userDetails);
    })
    .catch((error) => {
        console.error("Error:", error)
    });
```


* First, the `fetchUserData()` promise resolves, and its result is passed into the next `then()`.
* Then, the `fetchUserDetails()` promise resolves, and its result is passed to the next `then()`.
* If there's an error at any point in the chain, `.catch()` will handle it.


### Promise.resolve()

We can also use `Promise.resolve` to create a promise that resolves immediately with a given value. This is useful when we want to return a promise from a function that already has the value, rather than creating a new asynchronous operation.

**Example:**

```javascript
let resolvedPromise = Promise.resolve(42);
resolvedPromise.then(value => {
    console.log(value)
});

```

In this case, `Promise.resolve(42)` is like a shortcut for a promise that has already been resolved with the value `42`.


### Handling multiple asynchronous operations