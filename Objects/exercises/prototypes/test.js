// Inheriting properties
let obj = {
  a: 1,
  b: 2,

  // setting the [[Prototype]]
  __proto__: {
    b: 3,
    c: 4,

    // chaining 
    __proto__: {
      d: 5,
    }
  }

};

console.log(obj.a); //1

console.log(obj.b); // 2 --because of property shadowing-hiding of the prototype's value


// Inheriting methods
const parent = {
    value: 2,
    method(){
        return this.value + 1;
    }
};

console.log(parent.method()) //3

const child = {
    __proto__: parent
}

console.log(child.method()) // 3

//specify the value of the child
child.value = 4;
console.log(child.method()) // 3


// Constructors
// Example: a series of boxes, where each box is an object that contains a value which can be accessed through a getValue function. 

//constructor function
function Box(value){
    this.value = value;
}

// Properties all boxes created from the Box() constructor will have
Box.prototype.getValue = function(){
    return this.value;
}

const boxes = [
    new Box(1),
    new Box(2),
    new Box(3)
]

console.log(boxes)