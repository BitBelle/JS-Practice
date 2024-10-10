## **Pure Functions**

This are operations that produce the same output for the same input. Meaning they return the same results when you pass the same arguements.

Pure functions are:
    1. Readable - 

    2. Reusable -  Since they don’t depend on or modify external state, pure functions can be reused more easily in different contexts.

    3. Predictable - Because their output is only determined by their input, they are easier to reason about and debug.

    Testable - They can be tested independently without needing to set up external states.


## **Impure Functions**
Impure Function (with Side Effects): A function that can produce different outputs for the same inputs, or modifies external state (e.g., changing the input array directly).

1. Performance: Sometimes, modifying an array (like with reverseArrayInPlace) can be faster because it avoids the overhead of creating a new array. It saves memory and execution time, especially with large data sets.

2. Memory Efficiency: They can be more memory efficient because they do not require allocating space for a new array.


## **Use Cases:**
*Pure functions* -  are more useful in situations requiring predictability, testing, and reusability.

*Impure functions* - may be more efficient in cases where performance and memory usage are critical because it avoids the overhead of having to create a new array.

Using console.log inside a function makes it impure. This is because logging to the console doesnt return a value; instead it performs an external action/a side-effect -- printing an output that interacts with the outside world.