/**
 * Write a function delay(ms) that returns a Promise that 
 * resolves after ms milliseconds.
 */

function delay(ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Delay successful!")
        }, ms)
    })
}

//using the value
delay(1000)
    .then(message => {
        console.log(message)
    })