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

*Indentation levels* - Each asynchronous task inside a callback adds a new level of indentation, often referred to as *"callback hell"* or *"pyramid of doom"*. This structure quickly becomes hard to read and manage, especially with more complex operations.

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

**Example 2:**

```javascript
function fetchData(callback){
    setTimeout(() => {
        let data = "Some data";
        callback(null, data); //call the callback with data when its ready
    }, 1000);
}

fetchData((error, data) => {
    if(error) {
        console.log("Error:", error)
    } else {
        fetchMoreData((error, moreData) => {
            if(error){
                console.log("Error:", error);
            } else {
                processData(moreData, (error, result) => {
                    if (error) {
                        console.log("Error:", error);
                    } else {
                        console.log("Final result:", result)
                    }
                });
            }
        });
    }
});

```

In this callback hell, the deeper we go, the harder it becomes to maintain and understand.
Also: * Error handling becomes complicated and we need to handle errors at each level
      * Sequential operations becomes messy and difficult to track


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

A promise object has the following internal properties:

1. state: This property can have the following values,

    * *pending* - When the execution starts.

    * *fulfilled* - When the promise resolves successfully.

    * *rejected* - When the promise rejects.

2. result: This property can have the following values,
    
    * *undefined* - Initially, when the state value is `pending`.

    * *value* - When the promise is resolved(value).

    * *error* - When the promise is rejected.

A promise that has resolved or rejected is called *settled*

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

Each `.then()` returns a promise to keep the chain going. It ensures that: 
    * Any returned value in a `.then()` handler gets wrapped in a promise so it can be passed along the chain.
    * If an error occurs or its thrown in any handler, it can be caught by the next `.catch()` or handler in subsequent `.then()` calls.

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


### Promise.all()

`Promise.all` is a method that takes an array of promises and returns a single promise.

The returned promise:

    1. Resolves when all input promises resolve, with an array of their resolved values.

    2. Rejects immediately if any input promise rejects, with the rejection reason
    

### Handling multiple asynchronous operations

We can chain promises to perform multiple asynchronous actions in a specific sequence, just like a pipeline.

```javascript
function textFile(filename){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let content = "File content of " + filename;
            resolve(content); //resolve with file content after 1sec
        }, 1000);
    });
}

textFile("file1.txt")
    .then(content => {
        console.log(content);// log content of file1.txt
        return textFile("file2.txt")
    })
    .then(content => {
        console.log(content) //logs content of file2
    })
    .catch(error => {
        console.log(error); //catch any error that occurs in the chain
    });

```
Here, each `then()` wauts for the previous promise to resolve before moving to the next one.

## How Promises Improve Upon Callbacks

1. Cleaner syntax - Promises provide a more readable syntax for handling asynchronous code. Instead of passing callback functions, we can chain `.then()` calls that represent different stages of an operation.

2. Avoiding Callback Hell - Since promises return an object that represents the result of an asynchronous operation, we can use `then()` to attach handlers for success (resolved) or failure (rejected) at each stage, and they form a clean sequence of operations.

3. Error handling - With promsies, all errors are handled in one place using `.catch()` at the end of the chain. Eliminating the need for multiple error handlers in the nested callbacks.

4. Consistency - A promise will always either resolve with a value(success) or reject with an error(failure). We know wha to expect from it: a result or an error. A callback, on the other hand, is more flexible and can be prone to msitakes(like missing an error argument or not handling it properly) 


## async/await

While promises significantly improved the readability and manageability of asynchronous code compared to callbacks, promise chains still become hard to read and write, especially for complex workflows with multiple asynchronous steps.

* `async` - returns a promise
* `await` - Makes the JS function execution wait until a promise is settled.
            Its syntactic sugar(feature that makes code easier to read or write but doesnt add new functionality - simplifies or hides underlying complexities without changing what the code can do) for waiting for a promise to be resolved.

`aync/await` still uses promises under the hood. Its just a more user-friendly way to work with them


**Reason for introducing async/await**

1. *Improved readability* - `async/await` allows asynchronous code to look more like synchronous code making it easier to understand at a glance, compared to promise chaining.

2. *Error handling* - `async/await` we can use `try...catch` blocks to handle errors.

3. *Simplifies logic* - async/await simplifies writing and managing workflows.

**Example: Using Promises**

```javascript
function fetchData(){

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded")
        }, 1000)
    }); 
}

fetchData()
    .then(data => {
        console.log(data);
        return "Processing data...";
    })
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })

```

**Example: Using Async/Await**

```javascript
async function processData() {
    try{
        const data = await fetchData();
        console.log(data);
    
        const result = "Processing data...";
        console.log(result);
    } catch (error) {
        console.error(error)
    }
}

processData();

```

Here, `async/await` is syntactic sugar:

    *  `await fetchData()` - is shorthand for waiting until the promise returned by `fetchData()` resolves
    
    *  It eliminates the need for `.then()` chaining and makes the flow of the program more intuitive.



## The Event Loop

The *event loop* is a crucial concept in JavaScript that enables asynchronous programming. It ensures that operations like fetching data, waiting for a timer, or responding to user input do not block the main program flow.

JavaScript is *single-threaded*, meaning it can only execute one thing at a time on the main thread.

The *event loop* allows JavaScript to perform non-blocking operations by delegating tasks to the browser (or Node.js environment) and queuing their callbacks to be executed later.

We can think of it as:

    * A *queue* where tasks (callbacks) are waiting to be executed.

    * A *loop* that continuously checks if the main thread is feree and then executes the next task from the queue.


**How it Works**

1. **Main Script Execution**

The main program (synchronous code) runs first, line by line, on the call stack
The call stack manages the execution of programs.

2. **Asynchronous Operations**

Functions like `setTimeout`, `fetch`, `event listeners` are registered. Their actual work (like timimg or fetching data) is offloaded to the browser or runtime environment.

3. **Callback Queue**

Once an asynchronous operation is complete, its callback is added to the *callback queue*

4. **Event Loop**

The event loop constantly checks:

    * Is the *call stack* empty?
    If yes, it dequeues a callback from the *Task queue/callback queue* or from the *Microtask queue/Promise Queue* and pushes it onto the callstack for execution.


**Example: Execution in a callstack**

```javascript
console.log("One!")

console.log("Two!")

function logThree(){
    console.log("Three!")
}

function logThreeAndFour(){
    logThree()
    console.log("Four!")
}

logThreeAndFour();

```

So, in the callstack this is what goes on:

* `console.log("One!")` - So a new excecution context is created, pushed onto the call stack which is then evaluated and logs `one`.

* `console.log("Two!")` - A new execution context is also created, pushed onto the callstack, then evaluated and logs `two`. 

* `logThreeAndFour();` - Here, we invoke the `logThreeAndFour();` function, within this body function, we invoke yet another function `logThree` and in the body of `logThree` we `console.log("Three!")`

So in the call stack we have something like:
    
    `![callstack](image.png)`

So, eventually 3 is logged, `logThree()` execution context is popped off the call stack.

`console.log("Four!")` execution context which is in the body of `logThreeAndFour` is created, evalauated and logs Three then logThreeAndFour() gets popped off the call stack.


