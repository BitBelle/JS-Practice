# Secret life of Objects

Objects are like containers that store different kinds of data.

## Object-Oriented Programming(OOP)

OOP is a way of organizing code using objects by grouping related things together in objects, to make it easier to understand and work with.

## Abstract Data Types(ADT)

ADT is hiding all the complex details and only providing the essential features(methods) to use.
Its like when we buy a blender, we dont need to know how the inside motor works, 
we just need to know which buttons to press to make it blend. This means we can use an object without 
needing to understand everything inside it.

**Example:**

```javascript
let car = {
    //properties
    color: "red",
    speed: 120,

    //method - action the car can do
    drive: function(){
        console.log("The car is driving at " + this.speed + " km/h");
    },

    stop: function(){
        console.log("The car has stopped.");
    }


}

//using the object
car.drive();
car.stop();

```
Just like the 'blender', we dont need to know how the car drives internally, we just need to call
`car.drive()` and it works!

## Methods

Methods are functions attached to objects as properties. Its an action an object can perform.

**Example: Rabbit Speaking**

```javascript
function speak(line){
    console.log(`The ${this.type} rabbit says: ${line}`)
}

let whiteRabbit = {
    type: "white",
    speak
}

let hungryRabbit = {
    type: "hungry",
    speak
}

whiteRabbit.speak("Oh my fur and whiskers!");
hungryRabbit.speak("Got any carrots?");

```
**The `this` Keyword**

this is like a reference to the object that called the method. When a method is called, JavaScript
automatically sets `this` to refer to the object that is calling the method.

**The call() method**

To manually control what this refers to, we can use the call() method.

```javascript
speak.call(whiteRabbit, "Hurry");
```
Here, we are telling JavaScript to call the `speak` function but set `this` to refer to `whiteRabbit`. 
Even though we are calling the function directly, `speak.call()` ,it behaves like we called `whiteRabbit.speak()`.

**Arrow Functions and `this`**

In regular functions(those defined by `function` keyword), this changes depending on how the function is called.

But arrow functions dont behave like this. They keep the `this` from the surrounding context(code around them). In other words arrow functions dont have their own `this`.


## Prototypes

Prototypes are like a blueprint for objects. Instead of giving every object its own set of properties and methods, objects can share common functionality by linking to a prototype.

When creating an object, it can inherit methods and properties from another object (called the prototype). 
This helps save memory because we dont want to have a copy methods to each object individually, they can all share them.

**Example 1: Rabbits and Prototypes**

We want to create many rabbits, and they should all speak. So, 
instead of giving each rabit its own `speak` method, we create 
one shared method in the **prototype**. Then all rabbits will be 
linked to this prototype and use the same method.

```javascript
let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says: '${line}'`);
    }
}

let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";
blackRabbit.speak("I fear darkness!");

```

* `protoRabbit` - is the prototype object that contains speak method. Its like a template for all rabbits.

* `blackRabbit` - is an individual rabbit. Instead of creating a separate `speak` method for blackRabbit, 
we link it to `protoRabbit` using `Object.create(protoRabbit)`.

* When `blackRabbit.speak()` is called - even though speak isnt directly 
on blackRabbit, JavaScript automatically looks at its prototype(protoRabbit) to find the `speak` method.

**How Prototypes Work**

In JavaScript, every object has a hidden property called `[[Prototype]]`. 
When we try to access a property or method on an object, and it doesnt 
exist on that object, JavaScript will look up the prototype chain to find it.

**Example 2:**
```javascript
let empty = {}
console.log(empty.toString); //logs function toString()

```
Even though `empty` doesnt have a `toString` method, JavaScript finds 
`toString` in `Object.prototype`, which is the prototype of all objects.

This process continues up the chain:

* If an object doesnt have a method, it checks its prototype.

* If the prototype doesnt have the method, it checks the prototype's prototype, and so on.

* It stops when it reaches `Object.prototype`, which is the root prototype (the end of the chain).


**Checking Prototypes**

We can check the prototype of an object using `Object.getPrototypeOf`

```javascript
console.log(Object.getPrototypeOf({}) === Object.prototype);
//true

console.log(Object.getPrototypeOf(Object.prototype));
//null

```
* `Object.getPrototypeOf({}) === Object.prototype` - checks if the prototype of an empty object `{}` is `Object.prototype`, which it is.
* `Object.getPrototypeOf(Object.prototype)` - returns null because `Object.prototype` is the topmost object and has no prototype above it.


**Prototypes for Arrays and Functions**

```javascript
console.log(Object.getPrototypeOf(Math.max) === Function.prototype);
//true

console.log(Object.getPrototypeOf([]) === Array.prototype);
//true
```
* Math.max - is a function, so its prototype is Function.prototype
* [] - (an empty array) is an array, so its prototype is Array.prototype
* Both Function.prototype and Array.prototype indirectly inherit from Object.prototype, 
so they still have methods like toString.

**Example 3: Using Object.create**

Using prototype, to create a base object for a car and then creating 
specific types of cars that inherit the shared methods from the base car.

```javascript
// prototype object that contains the shared methods
let baseCar = {
    start(){
        console.log(`${this.model} is starting!`)
    },
    drive(){
        console.log(`${this.model} is driving!`)
    }
}

// individual cars that inherit methods from the baseCar 
// but have theirown specic model property
let sportsCar = Object.create(baseCar);
sportsCar.model = "Porsche 911";
sportsCar.start();
sportsCar.drive();


let truck = Object.create(baseCar);
truck.model = "Ford F-150"
truck.start();
truck.drive();

```

## Classes in JavaScript

In JavaScript, **classes** provide a way to define and group methods and properties for a specific type of object.
A class is like a blueprint or template for creating objects that share similar characteristics.

A class allows us to:
    * Define a **constructor** to initialize an object when its created.
    * Define **methods** that each object will have.
    * Define **properties** that will be unique to each object.

**Example 1: Rabbit and Classes**

```javascript
class Rabbit {
    constructor(type){
        this.type = type;
    }

    speak(line){
        console.log(`The ${this.type} rabbit says: '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
killerRabbit.speak("I'm going to get you!");
//The killer rabbit says: 'I'm going to get you!'

```

* `class Rabit { ... }` - defines a class called Rabbit
* `constructor(type)` - the constructor is a special method used to initialize 
a new object. It runs when we create a new instance of the class. In this 
case it takes the `type` of the rabbit.
* `this.type = type` - `this` refers to the current object being created. 
We are setting the `type` property of the object to whatever value is 
passed to the constructor.
* `speak(line)` - is a method that every Rabbit instance will have. 
Each rabbit can "speak", and what it says depends on the `line` passed in.
* `let killerRabbit = new Rabbit("killer");`- the `new` keyword creates 
a new instance of the `Rabbit` class. Here, `killerRabbit` is an object 
of type `Rabbit` with `type` set to `"killer"`.


**Importance of using classes:**

* Classes make code cleaner and easier to understand, 
especially when dealing with objects that have the same structure.
* Instead of manually creating prototypes and setting properties, 
we can just define everything inside a class. This makes it easier 
to organize code and add new features.

**Constructor Functions(Before Classes)**

Before classes were introduced in 2015, JavaScript used constructor 
functions to achieve the same thing. However, it was more complex, 
but it worked similarly.

**Example: Creating Rabbit type using a constructor function.**

```javascript
function ArchaicRabbit(type){
    this.type = type;
}

ArchaicRabbit.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit says: '${line}'`);
}

let oldSchoolRabbit = new ArchaicRabbit("old school");
oldSchoolRabbit.speak("I remember the old days...");
// The old school rabbit says: 'I remember the old days...'

```
* `function ArchaicRabbit(type)` - is the old way of defining a 
constructor. It initializes a new rabbit with a `type`.
* `ArchaicRabbit.prototype.speak = function(line)` - adds the `speak` 
method to the **prototype** of `ArchaicRabbit`, so all rabbits of this type will share this method.
* `new ArchaicRabbit("old school")` - just like with classes, 
the `new` keyword creates a new instance of `ArchaicRabbit` with 
the type set to `"old school"`.


**Modern Classes are better**

Using classes simplifies the whole process. We dont have to worry 
about manually dealing with prototypes and setting properties, 
everything is neatly wrapped inside the class.

**Adding Properties Classes**

```javascript
class Particle {
  speed = 0;  // Property defined directly in the class
  
  constructor(position) {
    this.position = position;  // Property defined in the constructor
  }
}

let particle1 = new Particle([10, 20]);
console.log(particle1.position);  //  [10, 20]
console.log(particle1.speed);     //  0

```

**Anonymous Classes**

We can also create a class without giving it a name, its called **anonymous class**.
Its useful when we only need a class once and dont want to reuse it.

```javascript
let object = new class {
    getWord(){
        return "hello";
    }
}

console.log(object.getWord());
// hello

```
Here, we are using an anonymous class to create an object that 
has just one method, `getword`, which returns `"hello"`.


## Private Properties in JavaScript Classes

In JavaScript, **private properties** are used to hide some information 
inside a class, so that it can't be accessed directly from outside the class.

To create private properties or methods in a class, we use the `#` 
symbol before the property or method name. Only the class itself can 
access these private members.

**Example: A Secret Object**

A simple class whose method is private

```javascript
class SecretiveObject {
    //private method
    #getSecret(){
        return "I know the secret!";
    }

    //public method - can be accessed from outside the class
    revealSecret(){
        return this.#getSecret(); //accessing the private method from inside the class
    }
}

let secretObj = new SecretiveObject();
console.log(secretObj.revealSecret()) //I know the secret!
console.log(secretObj.#getSecret()) // throws an error, because we are trying to access it from outside the class

```

**Why Use Private Properties?**

Private properties are important because they help:
    * **Protect sensitive data** - If a class has data that shouldnt be accessed by external code, we can hide it with private properties.
    * **Encapsulate complexity** - Sometimes, we dont want other parts of our program to know how our class works internally, just what it does. Private properties keep that complexity hidden.
    * **Prevent accidental changes** - It helps avoid bus where someone accidentally modifies a property that should not be touched.

**Example: Random Number Generator**

```javascript
class RandomSource {
    //private property
    #max;

    constructor(max){
        // initialize the private property
        this.#max = max;
    }

    // public method
    getNumber(){
        return Math.floor(Math.random() * this.#max);
    }
}

let randomGen = new RandomSource(100);
console.log(randomGen.getNumber()); // random number between 0 and 99
console.log(randomGen.#max); //throws an error

```

## Overriding Derived Properties

In JavaScript, objects can inherit properties from their prototypes. However, if we add or change a property directly on an object, it will "override" or "hide" the inherited property with the same name. The prototype's property will still exist but wont be accessed unless the overiding property is removed from the object.

**Example: Rabbit's Teeth**

```javascript
class Rabbit {
    constructor(type){
        this.type = type
    }
}

//defining a property on the prototype
Rabbit.prototype.teeth = "small";

let killerRabbit = new Rabbit("killer");
// accessing the prototype's property
console.log(killerRabbit.teeth) //small

// now, overriding the 'teeth' property for this particular instance(killerRabbit)
killerRabbit.teeth = "long, sharp, and bloody";
// Accessing the overriden property
console.log(killerRabbit.teeth);

let basicRabbit = new Rabbit("basic");
console.log(basicRabbit.teeth) // other instances still use the prototype's property - small

console.log(Rabbit.prototype.teeth); // the prototype property remains unchanged 

```

### Use Cases for Overriding

**Exception Handling** - Overriding allows an object to have specialized behavior while still benefiting from shared properties of its prototype.
    Example: The `killerRabbit` is a special kind of rabbit with different teeth, but normal rabbits have the default small teeth from the prototype.


### Overriding Built-in Methods

JavaScript allows us to override properties of built-in prototypes such as `Array`, `Object`, and `Function`.

**Example: Overriding toString in Arrays**

The default `toString` method for arrays returns a string with the array's elements separated by commas, but the default `toString` method for objects gives a more generic result.

```javascript
console.log([1, 2, 3].toString());
// "1, 2, 3" (Array-specific toString)

console.log(Object.prototype.toString.call([1, 2, 3]));
// "[object Array]" (Generic Object toString)

```
Array's toString() - joins array elements into a string, separated by commas.
    * `[1, 2, 3].toString()` gives `"1, 2, 3"`
Object's toString() - identifies the type of the object as `"[object Array]"`.
    * In `Object.prototype.toString.call([1, 2, 3])` we are forcing 
      JavaScript to use the generic `toString()` method from the `Object` 
      prototype, not the one defined in the array. 
      Object's toString() method produces the format "[object Type]", 
      since the input is an array, `Object.prototype.toString.call([1, 2, 3])` 
      gives `"[object Array]"`.



## Maps

In JavaScript, a Map is a special type of data structure that allows 
us to store key-value pairs. Its useful when we are associating keys 
with values.

Before Maps were introduced, objects were used to store key-value pairs.

**Example: Using an object to store names and ages**

```javascript
let ages = {
    Boris: 39,
    Liang: 22,
    Mercy: 22
}

console.log(`Mercy is ${ages["Mercy"]}`);

```
The *keys* are `"Boris"`, `"Liang"`, and `"Mercy"`.
The *values* are their ages (39, 22, 22).

**Problem with using Objects as Maps**

Objects in JavaScript inherit from `Object.prototype`, 
which contains properties and methods (like `toString`). 
This means that your "map" might unintentionally contain inherited 
properties.

**Example:** 

```javascript
console.log("Is toString's age known?", "toString" in ages); 
//  true (because 'toString' exists in the object's prototype)
```

Since in JavaScript, all objects automatically inherit methods from 
`Object.prototype`, the `in` operator checks if the `"toString"` property 
exists in the `ages` object or any object it inherits from 
(like Object.prototype).

The `"toString"` key isn't something we added, but because of 
inheritance, it's showing up in our map.


**Solution: Using `Map`**

JavaScript provides a better solution: the `Map` object. A `Map` allows 
us to use *any data type* (strings, numbers, objects) as keys and 
doesnt have issues with unwanted inherited properties.

**Example: Creating and Using a `Map`**

```javascript
let age = new Map();

// adding key-value pairs to the map
age.set("Boris", 39);
age.set("Liang", 22);
age.set("Mercy", 22);

// accessing the values from the map
console.log(`Mercy is ${age.get("Mercy")}`);

// checking if a key exists
console.log("Is Jack's age known?", age.has("Jack"));

// maps dont inherit unwanted properties like toSrring
console.log(age.has("toString"));

```

**Why use a `Map` instead of an Object**

1. *Any type of key* - With a `Map`, we can use any type of key, not just strings.

**Example: Using objects as keys in a `Map`**

```javascript
let map = new Map();

// create an object to use as a key
let objKey = {name: "John"};

// set the object as a key, with the value 27
map.set(objKey, 27);

// retrieve the value associated with the key objKey in the map
console.log(map.get(objKey));

```

* `objKey` - is an *object*(not a string), and we use it as the key in the `map`.
* value 27 is associated with the `objKey`

2. *No inherited properties* - Unlike objects, `Map` doesnt inherit unwanted properties from Object.prototype. Thus no getting unexpected keys like `"toString"`.

3. *Ordered Entries* - The entries in a `Map` are ordered in the order they were added. Objects, on the other hand dont guarantee this.

**Using Object.create(null) to Avoid Inheritance.**

If you still want to use a plain object but avoid inheriting the unwanted properties, you can create an object with no prototype.

**Example:**

```javascript
let safeMap = Object.create(null);
safeMap["Boris"] = 39;
console.log("Boris" in safeMap); //true

console.log("toString" in safeMap); //false - no unwanted property

```

**Map Methods.**

`set(key, value)` - adds a new key-value pair to the map.
`get(key)` - retrieves the value associated with a key.
`has(key)` - checks if a key exists in the map.
`delete(key)` - removes a key-value pair in the map.
`size` - returns the number of key-value pairs in the map.
`clear()` - removes all key-value pairs from the map.


## Polymorphism

Polymorphism is a concept that allows objects of different types to be used in the same way, as long as they follow a common interface.

**Example 1: toString Method**

toString is a method that every object in JavaScript has. Its a method that converts an object to a string. Different objects can have different versions of toString(), depending on what kind of information they want to provide.

```javascript
class Rabbit {
    constructor(type){
        this.type = type;
    }

    //custom toString method
    toString() {
        return `a ${this.type} rabbit`
    }
}

let killerRabbit = new Rabbit("killer");
console.log(String(killerRabbit));

```

* Normally, if we didnt define our own `toString()` method, `String(killerRabbit)` would return `"[object object]"`. But since we defined a custom `toString()` method, it returns `"a killer rabbit"`.


**Example 2: Polymorphic Behaviour in Arrays**

Another example is working with array-like objects. Arrays have built-in `forEach` method to loop over elements. *Polymorphism* allows us to use this method on any object that behaves like an array(ie. it has a length property and indexed elements).


// array-like object
```javascript
let arrayLikeObject = {
    length: 2,
    0: "A",
    1: "B"
}

// using array's forEach on an array-like object
Array.prototype.forEach.call(arrayLikeObject, element => console.log(element));

```
The above example demonstrates *polymorphism* because we can use the `forEach()` function on both regular arrays and objects that behave like arrays.


## Getters, Setters and Statics

***Getter***

Is like a method that allows us to "get" a property value, but we dont call it like a function. It behaves like a regular property access. They are useful when fetching a property value dyamically, without storing it.

**Example:**

```javascript
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);  // Random size each time it's accessed
  }
};

console.log(varyingSize.size); // Random value (e.g. 73)
console.log(varyingSize.size); // Another random value (e.g. 49)

```

***Setter***

Allows us to control what happens when a value is assigned to a property. Its useful for data validation, modifying data before storing it or transforming values.

**Example:**

```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius; 
  }

  get fahrenheit() {
    // Convert Celsius to Fahrenheit when accessed
    return this.celsius * 1.8 + 32;  
  }

  set fahrenheit(value) {
    // Convert Fahrenheit to Celsius when set
    this.celsius = (value - 32) / 1.8;  
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);  // 71.6 (Celsius to Fahrenheit)

temp.fahrenheit = 86;
console.log(temp.celsius);  // → 30 (Converted back to Celsius)

```

***Static***

Static properties and methods are attached to the class itself, thus, cannot be directly accessed on instances of the class.
Static methods are often utility functions(functions related to the class), such as functions to create or clone objects, 
whereas static properties are useful for caches, fixed-configuration or any other data you dont need to be replicated across instances.

**Example:**

```javascript
class Temperature{
    constructor(celcius){
        this.celsius = celsius;
    }

    static fromFarenheight(value){
        //converting to celsius 
        return new Temperature((value - 32) / 1.8);
    }

}

let boilingPoint = Temperature.fromFarenheight(212);
console.log(boilingPoint.celsius);

```

## Symbols

A symbol is a new primitive data type introduced in ES6(2015) tha is used as a unique identifier for object properties. 

**Why do we need Symbols?**

Imagine you have an object with a property called `length`. Now, if multiple parts of your code or libraries use the `length` property for different purposes, they might conflict with each other. This is where *Symbols* come in handy, because symbols are *guaranteed to be unique* and can serve as property names without causing any conflicts.

**Example 1: Creating Symbols**

Symbols are created using the Symbol() function

```javascript
let sym1 = Symbol("mySymbol");
let sym2 = Symbol("mySymbol");

console.log(sym1 === sym2) //we get false because each symbol is unique

```

`sym1` and `sym2` have the same description `("mySymbol")`, but they are not equal because every time we call `Symbol()`, a new unique symbol is created.


**Example 2: Using Symbols as Object Properties**

Symbols can be used as property names. Unlike strings, symbols ensure that properties are truly unique, even if the same description is used for the symbols.

```javascript
let sym = Symbol("mySymbol");

let obj = {
    [sym]: 42, //using symbol as a property key
    name: "rabbit"
};

console.log(obj[sym]); //accessing the symbol property
console.log(obj.name);

```
The symbol `sym` is used as a property name for the object obj. You access it using bracket notation, `obj[sym]`, because `obj.sym` would look for a string key, not a symbol.


**Why Use Symbols as Property Names?**

Symbols are ideal when we want to hide or protect properties. Since they are unique and cannot accidentally clash with other property names. They are safe to use with things like internal values or "private" properties.

**Example 3: Preventing Property Conflicts**

Let's say we have a Car object. We want to have two pieces of information:
    * The number of doors of the car (let's call it doors).
    * The maximum speed in kilometers per hour (we'll also call this speed). 

Normally, both could be string-based properties, but imagine you wanted to add a special property for the internal engine speed limit to ensure it's safe, but you don't want this to conflict with the public speed property.

```javascript
const internalSpeedLimit = Symbol("speed");

let car = {
    doors: 4;
    speed: 200,
    [internalSpeedLimit]: 180
}

// accessing public properties
console.log(`The car has ${car.doors} doors.`);
console.log(`The car's speed is ${car.speed}km/h`);

//accessing the symbol property
console.log(`Internal engine speed limit: ${car[internalSpeedLimit]}km/h.`);

```

**Example 4: Using Symbols for Iterators**

Symbols are also well known for their built-in behaviors, like making objects iterable with `Symbol.iterator`.

```javascript
let myCollection = {
    items: ["apple", "banana", "orange"],
    [Symbol.iterator](){
        let i = 0;
        return {
            next: () => {
                if (i < this.items.length){
                    return {
                        value: this.items[++], 
                        done: false
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

for (let item of myCollection){
    console.log(item)
}

```

## Iterator Interface

In JavaScript, objects that are iterable can be looped over using for/of loops. To be iterable, the object must have a special method called [Symbol.iterator] that returns an iterator object.

An *iterator* is an object that implements a method called `next()`. This method returns an object with two properties:
    * `value`: The next value in the iteration.
    * `done`: A boolean that is `true` when there are no more values to return(end of the iteration) and `false` otherwise.


**Example: Simple String Iterator**

```javascript
let okIterator = "OK"[Symbol.iterator]();

console.log(okIterator.next()); //{value: "O", done: false}

console.log(okIterator.next()); //{value: "K", done: false}

console.log(okIterator.next()); //{value: undefined, done: true} no more characters

```

## Inheritance

Inheritance in JavaScript, allows a subclass to derive properties 
and behaviors from an existing class(a *superclass*).
This comes in handy when we want to create a class that behaves 
similarly to another but with some new or modified functionality.


**Example Scenario:**
Creating a simple app for vehicles. We have a basic class for a 
Vehicle and want to create more specific types of vehicles(like Car and Truck) that inherit from it.

*1. Creating the Superclass `vehicle`*

```javascript
class Vehicle {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    //general method for all vehicles
    startEngine(){
        console.log(`${this.brand} ${this.model}'s engine started!`);
    }

}

```

*2. Creating the Subclass `Car`*

```javascript
class Car extends Vehicle {
    constructor(brand, model seats){
        //calling the parent class (Vehicle) constructor
        super(brand, model);
        this.seats = seats
    }

    //a new method specific to the Car class
    displaySeats(){
        console.log(`${this.brand} ${this.model} has ${this.seats} seats.`)
    }
}

```

*3. Using the `Car` Class*

```javascript
const myCar = new Car("Toyota", "Corolla", 5);
myCar.startEngine();
myCar.displaySeats();

```

## The `instanceof` Operator

The `instanceof` operator allows us to determine if an object was 
created from a particular constructor function or class. 
It checks the prototype chain of the object to see if it matches 
the prototype of the constructor function.

**Syntax**

```javascript
object instanceof Constructor

```
`object` - is the instance we want to check.
`Constructor` - is the function or class we want to check against.

**Example 1**

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} says woof!`);
  }
}

class Cat extends Animal {
  meow() {
    console.log(`${this.name} says meow!`);
  }
}

//using instance of to check instances
const myDog = new Dog('Buddy');
const myCat = new Cat('Whiskers');

console.log(myDog instanceof Dog);     // true
console.log(myDog instanceof Animal);  //  true
console.log(myCat instanceof Cat);     //  true
console.log(myCat instanceof Animal);  //  true
console.log(myCat instanceof Dog);     //  false

```

**Example 2: Using instanceof with Built-in types**

`instanceof` works with built-in constructors as well. 
For example, let's check if an array is an instance of Array.

```javascript
const myArray = [1, 2, 3];
console.log(myArray instanceof Array);     //  true - because myArray is an instanceof Array 
console.log(myArray instanceof Object);    //  true - because all arrays are objects in JS
console.log(myArray instanceof String);    //  false
```
