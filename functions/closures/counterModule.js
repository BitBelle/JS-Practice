/**
 * createCounter returns an object
 * 
 */

function createCounter(){
    let count = 0;
    let myObject = {
        increment: function add(){
            count++;
            return count;
        },
        decrement: function deduct(){
            count -= 1;
            return count;
        },
        getValue: function myCount(){
            return count;
        },
        reset: function myReset(){
            count = 0;
            return count;
        }
    }

    return myObject
}

const counter = createCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());
counter.reset();


