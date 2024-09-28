
function outerFunction() {
    let message = "I'm in the outer scope";

    function innerFunction() {
        let message2 = "I'm in the inner scope";
        console.log(message2)
    }

    // invoking the function
    innerFunction();

    console.log(message)

}

outerFunction();

// the message - variable is accessible due to lexical scoping
/**
 * message is a local variable defined by the parent function - outerFunction
 * the child-function, that is, innerFuction has access to variables declared in the parent scope
 * but the reverse isnt possible due to scoping
 */