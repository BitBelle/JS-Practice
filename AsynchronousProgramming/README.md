# Asynchronous Programming

## Processor and Execution flow

The *Processor* is the heart of the computer responsible for executing the instructions of our programs. The speed at which programs execute depend on:

    * Processor speed - how quickly the CPU can handle operations like instructions and calculations

    * Memory speed - how quickly the CPU can access data from RAM(faster than from hard disks)


## Asynchronocity

### Single-threading vs. Multi-threading 

**Single-threading**

In a single-threaded execution, a program runs in a single sequence(line by line), one task at a time. This means that the processor has to wait for one task to finish before starting the next one. 

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

*Callback hell* refers to the situation in JavaScript where multiple nested callbacks create complex, deeply nested code; "pyramid of doom".

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

### How Promises Improve Upon Callbacks

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

    * A *loop* that continuously checks if the main thread is free and then executes the next task from the queue.


### How the Event Loop Works

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


**Example 1: Execution in a callstack**

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

   `console.log("Three")`
   
   `logThree()`
    
   `logThreeAndFour()`

So, eventually 3 is logged, `logThree()` execution context is popped off the call stack.

`console.log("Four!")` execution context which is in the body of `logThreeAndFour` is created, evalauated and logs Four then logThreeAndFour() gets popped off the call stack.


**Example 2: Single-threaded problem**

```javascript
function longRunningTask(){
    let count = 0;
    for (let i = 0; i < 100; i++){
        count++
    }
    console.log("Long running task completed!")
}

function importantTask(){
    console.log("Important")
}

longRunningTask();
importantTask();

```

Since JavaScript is single threaded, meaning it can handle a single task at a time on the main thread.

In the above example, `longRunningTask` is invoked, its a heavy computation that takes a while to complete execution. Thus, the other parts of the program are frozen...they have to wait till for the longRunningTask to be completed for them to be executed. 

Long running tasks include; network requests, or anything based on userInput, timers. So, we kind of would want to avoid this long running tasks, since we dont want our entire call stack to be blocked till we get data back. 

So to take care of this long running tasks is where Web APIs come in. *Web APIs* provide a set of interfaces that help us interact with browser features. 

We have different types of Web APIs. Below are some of them grouped according to their functionality:

**1. Browser APIs**

* Document Object Model (DOM) APIs - Allows manipulation of HTML   and CSS
`document.querySelector('h1').textContent = 'Hello World!';`

* Console API - For debugging purposes. 
`console.log('Debug message');`

* Storage APIs - For storing data locally.
`localStorage.setItem('key', 'value');`
`sessionStorage.setItem('key', 'value');`

* Fetch API - For making HTTP requests.

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

```

**2. Server APIs**

They enable communication between a client(browser) and a server

* REST APIs - Use HTTP methods (GET, POST, PUT, DELETE) to interact with a server.

* WebSocket API - For real-time, two-way communication with a server.

```javascript
const socket = new WebSocket('ws://example.com/socket');
socket.onmessage = event => console.log(event.data);

```

**3. Device APIs**

Allow web applications to interact with hardware/device-specific features

* Geolocation API - For retrieving user's location

```javascript
navigator.geolocation.getCurrentPosition(
    position => console.log(position)
    error => console.error(error)
)

```

* Camera and Microphone (MediaDevices API) - For accessing the user's camera or microphone.


#### Callback-based API

```javascript

navigator.geolocation.getCurrentPosition(
    position => console.log(position) //success callback
    error => console.error(error) //error callback
)

```

* First, the `getCurrentPosition` invokation gets added to the call stack. The success and error callbacks get registered on the Web API/browser to initiate the async task.
So after the callbacks are registered, `getCurrentPosition` gets popped off the call stack without waiting for any data.
Once the API receives data from the browser, it uses the success callback to handle the result. However, the callback doesnt immediately get pushed onto the call stack as it could disrupt an already running task.
So instead, the callback gets pushed to the *task queue* which is also called the *callback queue*.

`position => console.log("Position")`

**The Task Queue:** It holds Web API callbacks and event handlers to be able to get executed some place in the future
The event loop then checks if the call stack is empty, once it is, tasks in the task queue get pushed to the callstack for evaluation and execution.


#### Promise-based API

Whenever we are working with promises we are dealing with the *Microtask Queue*.
The *Microtask queue* is a special queue dedicated to handle the following callbacks; 
        
    * `.then(() => {...})`
    
    * `.catch(() => {...})`
    
    * `.finally(() => {...})`

    * ```javascript
    async function asyncFunction() {
        await ...
        //function body execution after await
    }
    ```
    * queueMicrotask(() => {...})

    * new MutationObserver(() => {...})

* The event loop prioritizes the *Microtask queue*, so whenever the call stack is empty, the event loop first ensures that the microtask queue is entirely empty.

* So, the event loop gets the tasks from the Microtask queue, and moves them to the call stack where they get executed.

* After the Microtask queue is entirely empty, only then does the event loop move to the task queue 

**Example**

```javascript
fetch("http://url.com")
    .then(res => console.log(res))

    console.log("End of Script");

```

* So, once we call `fetch()`, its added to the callstack.
`fetch()` is responsible for creating a promise object, which by default the *state is pending*, *result is undefined*
`fetch()` also initializes a background network request thats handled by the browser.

* In the next line `.then()`, creates a promise reaction ie. `res => console.log(res)`

* As we wait for the server to respond, we move onto the next line, `console.log("End of Script");` which is moved onto the call stack and *End of Script* gets logged.

* Once our promise is fulfiled, the promise result becomes the Response and the promise reaction handler ie. `res => console.log(res)` goes to the Microtask Queue.
The event loop confirms the callstack is empty, then checks the microtask queue, and pushes the task to the callstack where it eventually logs the response from the server.


#### Promisifying a callback API

Callbacks can lead to messy, nested code; *callback hell*
Promises, on the other hand, allow the use of `.then()` chains and `aync/await` syntax, which are cleaner and more readable.

**Example 1: A callback-based function**

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback(null, "Data retrieved!")
    }, 1000)
}

fetchData((err, result) => {
    if (err) {
        console.error("Error:", err)
    } else {
        console.log(result)
    }  
});
    
```

**Promisifying the callback function**

```javascript
funtion fetchDataPromisified() {
    return new Promise((resolve, reject) => {
        fetchData((err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

fetchDataPromisified()
    .then(result => console.log(result))
    .catch(err => console.error("Error:", err))

```

**With `async/await`**

```javascript
async function getData() {
    try {
        const result = await fetchDataPromisified();
        console.log(result); // Output: Data retrieved!
    } catch (err) {
        console.error("Error:", err);
    }
}

getData();

```


## Asynchronous bugs

When a program runs asynchronously, each line of code runs one after the other without interruptions. In an asynchronous program, certain parts of the code may pause (ie. while waiting for a file to load), allowing other code to execute in the meantime.

This can lead to unexpecetd behavior if we are not careful about managing these "pauses" and how variables are updated.

**Example 1: A Buggy Version**

```javascript
async function fileSizes(files) {
    let list = "";
    await Promise.all(files.map(async fileName => {
        list += fileName + ": " + await textFile(fileName).length + "\n"
    }));

    return list;
}
```

* The code goes through an array of file names `(files)`
* Reads the content of each file asynchronously `(await textFile(fileName))`
* Adds a line to the `list` for each file showing its name and size.

The program doesnt work because:

* *The asynchronous gap* - The `+=` operator modifies `list`. But since each `+=` happens asynchronously (due to `await`), the updates dont occur in a controlled sequence.
* *Race condition* - Each part of the code accessing `list` is running independently. By the time one file finishes reading and updates `list`, another operation might have overwritten it, resulting in only the last update sticking.


**Example 2: Solution to the buggy code**

```javascript
async function fileSizes(files) {
    let list = files.map(async fileName => {
        return fileName + ": " + (await textFile(fileName)).length;
    });

    return (await Promise.all(list)).join("\n")
}
```

**The solution works because:**

* Instead of modifying `list` directly during each asynchronous operation, we return the results as an array (`lines`)
* `Promise.all(lines)` ensures all operations complete before we combine the results.
* Each async function computes its result without depending on or modifying external variables, avoiding conflicts.

**An Analogy of Asynchronous Bugs**

We can think of it as multiple chefs preparing different dishes for a menu:

* Buggy Version: All chefs write their dishes on the same menu sheet. If chef A starts writing, but chef B finishes first and overwrites the sheet, you only see chef B's dish on the final menu.

* Fixed Version: Each chef writes their dish on separate cards. Once all the chefs finish, you collect the cards and compile them into a single menu. This way, no one overwrites anyone else's work.

**Key Takeaways:**

* Avoid modifying shared variables during asynchronous operations. Use separate data structures like arrays to hold results.

* Understanding gaps in asynchromous code. When using `await`, remember that other code might run while waiting for the operation to finish.

* Using tools like `Promise.all`, helps coordinate multiple async tasks and ensures they all complete before proceeding.

