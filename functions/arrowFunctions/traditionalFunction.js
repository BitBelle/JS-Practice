// traditional function - es5

const obj = {
    name: "Traditional Function Example",
    showName: function(){
        console.log(this.name);

        //callback function
        setTimeout(function() {
            console.log(this.name)
        }, 1000);
    }
};

obj.showName();



// arrow function
const obj2 = {
    name: "Arrow Function Example",
    showName: function(){
        console.log(this.name);

        //callback function
        setTimeout(()=> {
            console.log(this.name)
        }, 1000);
    }
};

obj2.showName();



/**
 * In traditional functions the value of this, is determined with were the function is called.
 * Meaning if you call the function as a method to an object, this, refers to that object.
 * Whereas if you call it as a standalone function, this, refers to the global object(or undefined in strict mode).
 * 
 * Standalone function - is a function declared/defined in the global scope or in a local scope but not as part of an object.
 * 
 * In the above example:
 * 
 * The object 'obj' has 2 properties; name and showName -- which is a function
 * 
 * this - in the showName function refers to the obj.name while
 * 
 * this - in the callback funtion refers to the global object (undefined)
 * 
 * 
 * 
 */