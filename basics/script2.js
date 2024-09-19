/**
 * Variables - containers that store values
 * 
 * Data Types:
 * Primitives Datatypes -
 * 
 * Non-primitive DataTypes - 
 * 
 * 
 * String - a sequence of text placed in between the ""
 * 
 * Number - This is the usual number; 1, 2 3 etc
 * 
 * Boolean - True/False
 * 
 * Array - a structure that allows us to store multiple values
 * 
 * Object - 
 * 
*/




// if statements

// let age = 10;

// if (age == 18){
//     document.write("You are an Adult")
//     console.log("You are an Adult")

// } else {
//     document.write("You are a child")
//     console.log("You are a child")
// }


/**
 * Scoping - Difference between let and var is the scope in which the variables are declared
 * 
 * let - variables declared using let are only available in the scope in which they are defined eg.
 */

// function letScoping(){
//     let a = 10;

//     if(true){
//         let a = 20;
//         console.log("letScoping: " + a)
//     }

//     console.log("letScoping: " + a)
// }

// letScoping()



/**
 * var - variables declared using var are available throughout the function eg
 */

// function varScoping(){
//     var a = 10;

//     if (true){
//         var a = 20;
//         console.log("varScoping: " + a)
//     }

//     console.log("varScoping: " + a)
// }

// varScoping()




/**
 * Hoisting - This is JavaScript's behaviour through which classes, fuctions and variables 
            are moved to the top of their scope.
 **/

    // function hoisting --only normal functions arre hoisted --arrow functions arent
    console.log(addNum(1,2)) 

    function addNum(a, b){
        return a + b
    }


    // var hoisting
    // var a = 2
    // console.log(a)

    console.log(a) //getting undefined due to hoisting
    var a = 3 


    // let hoisting
    
    // console.log(b) //we get -- Uncaught ReferenceError: Cannot access 'b' before initialization
    // let b = 10



    let b = 
    console.log(b)


// ELSE IF

// let myAge = 27;

// if (myAge >= 50){
//     console.log("You are above 50yrs")
// } else if( myAge >= 40){
//     console.log("You are above 40yrs")
// } else if( myAge >= 30) {
//     console.log("You are above 30yrs")
// } else if(myAge >= 20){
//     console.log("You are above 20")
// } else {
//     console.log("You are still a child")
// }

