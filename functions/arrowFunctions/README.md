## **Arrow Functions**

Arrow Function - clear and more concise way of writing functions. An alternative to the traditional way of writing functions as in ES5. It came about with ES6 with the aim of solving lexical binding of `this` keyword.

With ES5 one of the major issues with traditional function expression is that the this keyword behaves differently depending on how the function is called.

Example:

```javascript
const obj = {
    name: "Traditional Function Example",
    showName: function() {
        console.log(this.name); // (1) `this` here refers to `obj` and logs: "Traditional Function Example"

        //callback function
        setTimeout(function() { 
            console.log(this.name); // (2) `this` here refers to the global object (or undefined in strict mode)
        }, 1000);
    }
};

obj.showName();

```
The `this` keyword inside the callback function within setTimeout behaves differently from the `this` keyword in the outer showName function because of how traditional functions treat `this`.


When we call `obj.showName()`, the function is called as a method of `obj`, thus this.name refers to the `obj.name` - "Traditional Function Example"

For the *setTimeout*, its executing a traditional function expression (not an arrow function), so the behavior of this is different. 

The *setTimeout* callback function is a standalone function not a method of obj, so this no longer refers to obj. Instead, 

In non-strict mode - this refers to the global object ie. window in browsers.

In strict mode - this is undefined.

Thus getting `undefined` when we `console.log(this.name)` inside *setTimeout*.


### Wondering how we get this behaviour?

Well, traditional function expressions define their own this depending on how they are called. In our case, `setTimeout` is called in the context of the global object, not the object `obj`.


### To Fix this kind of behavior - arrow functions got introduced

Since in JS, the this keyword refers to different things depending on how a function is called, it often becomes confusing especially when working with callback functions. 

***So arrow functions were introduced to;***

1. Fix the confusion
With arrow functions, this stays consistent. If you call a method on an object, this correctly refers to the object. Making code more predictable and less confusing

2. Simpler syntax
Arrow functions have a shorter, cleaner syntax, making code more readable

3. Implicit Return
With arrow functions you get to return the values without using the return keyword
