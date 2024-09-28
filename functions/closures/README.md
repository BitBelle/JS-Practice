**Closure in JavaScript**

This is actually a simple concept as long as you take your time to wrap your head around it.
So what's this closure?

A closure is a feature in JavaScript where the inner function has access to the outer function's variables - a scope chain

A closure has access to the following:
    It can access the variables of its outerscope; meaning it can access the variables of its parent outer function.
    It has access to its own scope; meaning the variables defined in its body
    It has access to global variables

To digest the above context lets look at an example;

```javascript
function outer(){
    let a = 10

    function inner(){
        let b = 20
        console.log(a + b)
    }

    return inner
}
```

Lets break it down:
*outer function* -  this is the parent function, it has a variable declared within its scope and 
                    the variable is assigned with 10. Still the same outer function has another
                    function, inner(). Finally the return statement which gives back inner.

*inner function* -  this is the child function. Within its scope, that is, within the curly braces 
                    {}, variable b is declared and and assigned with 20.
                    In the next line, we have console.log(a + b), here we are accessing both variables a and b which belong to different scopes. 
                    Variable a is limited to its outer function while b is limited to its inner function.

So now lets invoke the outer function, and have the results stored in a variable

```javascript
let result = outer();
console.log(result);
```

So here we are making a call to the outer function, so this is what goes down;

*variable a gets created and is initialized with 10, 
the next line is a function declaration, so no execution
now the return statement, which returns inner. 
**NB.** return statement dosent execute a function without the () braces, so in our case when JS looks for inner and finds its a function so it doesnt execute it..rather it returns the whole function body.
*

So once the function body is returned, the outer function is out of the call stack, inner's function body gets stored in our result variable and then gets printed to the console.

So now in other words our result variable automatically becomes a function since it now contains this:
```javascript
function inner(){
        let b = 20
        console.log(a + b)
    }
```

In executing this we can call the result function:
 ```javascript
 result()
 ```

This is now what happens, a new variable b is created, then in the next line we have variable a which we are also accessing. So here is where closure comes in. Since we are trying to access a variable thats not in our current scope. What closure does once our outer function was being executed closure preserved that chain scope so now what it does is simply remembering that there was a variable *a* that was created and initialized with 20. So now the addition exection gets done and the result is logged to the console.





