# Modules

A module is a self-contained part of a program. It specifies:
    * Dependencies - which other modules it depends on
    * Interface - What functionality it provides for other modules to use.

Modules help organize code by defining boundaries. Each module acts as an independent building block that one can use and connect with other parts of the program.

**Why do we use modules?**

Modules solve the problem of having a detangled program, "a big ball of mud" - a program where everything is so mixed up that it becomes hard to understand and change.

So modules solve this problem by making sure:
    * Each part of a program has a clear purpose - You know what a module does without needing to look at the entire program.
    * Dependencies are clear - You can see what a module needs from others and what it offers to others.


**Some technical concepts of Modules**

1. *Interface* - The part of the module that is available for other modules to use. Its like the public API of that module.
2. *Private code* - Code inside a module that is not exposed to the outside world. This keeps the module secure and avoids unwanted interferance.
3. *Dependencies* - If module A uses functions or data from module B, we say that module A depends on module B.

**Example of Modules in JS**

A program with two main funtions: Adding and Multiplying numbers. Instead of writing them in one big file, we can separate modules for each:

**1. Addition Module(addition.js)**

```javascript
export function add(a, b) {
    return a + b;
}
```

**2. Multiplication Module(multiplication.js)**

```javascript
export function multiply(a, b) {
    return a * b
}
```

**3. Main program(main.js)**

```javascript
import {add} from './addition.js';
import {multiply} from './multiplication.js';

console.log(add(2, 3));
console.log(multiply(2, 3));

```

The `import` keyword brings in the functions from the `addition` and `multiplication` modules. The main program can now use these functions without needing to know how they work internally.

**How do modules help?**

1. Encapsulation - Each module keeps its code separate. If you need to change how addition works, you only need to update `addition.js`, not the whole program.
2. Reusability - You can take `addition.js` and use it in a different project without changes.
3. Clarity - Dependencies are clear. If `main.js` needs `addition.js`, its explicitly stated with `import {add} from './addition.js';`


## ES Modules

Originally, JavaScript didn't have the concept of modules, which meant: 
    * All sripts shared the same global scope.
    * It was easy for different scripts to accidentally use the same variable names, causing conflicts.

ES modules, introduced in ECMAScript 2015 (ES6), changed that by allowing:

    * Separate scope for each module.
    * The use of `import` and `export` keywords to manage what code a module provides and what it needs from others.


**Basic Structure of ES Modules**

A module is just a JavaScript file that can:
    * Export functions, variables or classes to be used in other files.
    * Import what it needs from other modules.

**Example of a Module.**

```javascript
//dayName.js

//names is private to dayName.js
const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//exported functions
export function dayName(number){
    return names[number];
}

export function dayNumber(name){
    return names.indexOf(name)
}

```
**How to use the above module:**

To use the `dayName` function from `dayName.js` in another module:

```javascript
//main.js

import {dayName} from "./dayName.js";

let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`);

```

**Points to remember:**

1. *Module Names* - The path in the `import` statement eg. `./dayname.js` is how modules are identified. In browsers, this path is treated as a web address, while in Node.js, its a file path.

2. *Immediate Resolution* - `Imports` and `exports` must be at the top level, not inside functions or loops. They are resolved when the module loads.


**Renaming Imports**

We can rename an imported binding using the `as` keyword:

```javascript
import {dayName as nomDeJour} from "./dayName.js"

console.log(nomDeJour(3));

```

**Default Exports**

A module can have a *default export*, which is used when a module only exports one main thing:

```javascript
//seasonName.js

export default ["Winter", "Spring", "Summer", "Autumn"];

```

*To import a default export, we dont use braces:*

```javascript
import seasonNames from "./seasonName.js"

console.log(seasonNames);

```

**Importing everything at once**

If a module exports many things and we need them all:

```javascript
import * as dayFunctions from "./dayName.js";

console.log(dayFunctions.dayName(3)); //outputs "Wednesday"
console.log(dayFunctions.dayNumber("Monday")); //outputs 1

```

`import * as name` syntax binds everything exported from `dayName.js` to the `dayFunctions` object.


## Packages

*Packages* in JavaScript are reusable pieces of code bundled together for use in various programs.

Using packages helps avoid duplicating code across projects and keeps ones code more maintable by centralizing updates. Packages usually include documentation, modules and dependencies.

**Why use packages?**

Packages let one:
    * Reuse code - Using common code across different projects without duplication.
    * Save Time - Avoiding re-inventing the wheel by using existing solutions.
    * Stay Updated - Easily incorporate updates and improvements made by the package authors.


**NPM (Node Package Manager)**

NPM is the primary tool in the JS world for managing packages. It has 2 main parts:
    * *Online Repository* - A database where packages are pulblished, found at [npmjs.com](https://www.npmjs.com)
    * *CLI Tool* - A command-line tool(included with Node.js)that helps install and manage packages in projects.


**Installing a Package**

When working on a Node.js project, we often need external packages to add functionality. Lets see how to install and use a package with an example:

1. *Initialize a project* - Running this command creates a package.json file:

```javascript
npm init -y

```

2. *Install a Package* - Suppose we want to install an INI file parser package named ini. We use:

```javascript
npm install ini

```
The above command:
    * Downloads and installs the `ini` package into a `node_modules` directory.
    * Updates the `package.json` to include `ini` as a dependency.

*INI files* - are simple text files used for confguration purposes in software. They dtore settings in a format that is easy for humans to read and edit.

`ini` package in JS, helps one to read(parse) and write(serialize)the INI files so that our JS code can easily work with configuration data.

3. Use the Package - In your JavaScript file, you can import and use the package:

```javascript
//importing parse function from the ini package
import {parse} from "ini";

//sample INI formatted text
const iniText = `
[settings]
theme = dark
language = English

[user]
name = Alice
age = 25
`; 

//parsed INI text into JavaScript object
const parsedData = parse(iniText);
console.log(parsedData);

```

What parsedData looks like:
```javascript
{
  settings: {
    theme: "dark",
    language: "English"
  },
  user: {
    name: "Alice",
    age: "25"
  }
}

```

**Managing Packages**

* *Dependencies* - package.json file lists dependencies like this:

```json
"dependencies": {
    "ini": "^2.0.0"
}

```

* *Updating packages* - To update to its latest version

```javascript
npm update ini

```

**Package Licenses**

Packages on NPM come with licenses, which specify how one can use them. Common Licenses include:
    * *MIT* - very permissive, allowing almost unrestricted use as long as you include the original license.
    * *GPL* - requires that derived projects also be open-sourced under the same license.


## CommonJS Modules

Before JavaScript had a built-in module system(like ES modules with import/export), developers needed a way to manage code into smaller, manageable pieces called *modules*. CommonJS was one of the systems created for this purpose, and it was used by Node.js

**How do CommonJS Modules work?**

CommonJS modules use two main objects:
    * `require` - a function to load and import other modules.
    * `exports` - an object that defines what a module makes available for other modules.

**Example of how a CommonJS Module is structured and used:**

`mathModule.js`

```javascript
//interface object for this module
exports.add = function (a,b){
    return a + b;
}

exports.multiply = function(a,b){
    return a * b;
};
```

`main.js`

```javascript
//import the module using require

const math = require('./mathModule.js');

console.log(math.add(2, 3));
console.log(math.multiply(2, 3));

```

**How does `require` work?**

The require function is responsible for:

    1. *Loading* the module's code
    2. *Executing* the code in its own isolated function scope
    3. *Returning* the exports object, which contains the module's public interface.


**Example 2: How require works in CommonJS modules(How module loading can be simulated, including caching and running module code)**

Purpose of the require function is to load and return the module's content.

```javascript
function require(name) {
    if (!(name in require.cache)){
        //reading module's code from a file
        let code = readFile(name); 

        //initializing an empty object to hold the modules exported values and adding require.cache under the modules name for future use.
        let exports = require.cache[name] = {};

        //function constructor
        let wrapper = Function('require, exports', code);

        //executing the wrapper function
        wrapper(require, exports)
    }
    //return the exports object from the cache, which contains the module's interface(eg functions or data that the module exports)
    return require.cache[name]
}

//creating an empty storage for alreaddy loaded modules to prevent reloading them
require.cache = Object.create(null);

```

**Key point about CommonJS Modules**

* *Caching* - Once a module is loaded, its stored in `require.cache` so that its only loaded once. Subsequent `require` calls will return the cached version.
* *Function Scope* - Code is wrapped in a function to provide isolation. This means variables defined in one module wont leak into others.
* *Dynamic Loading* - `require` can be called at any point in the code, unlike import which is static and always at the top level.

**Comparison to ES Modules**

* CommonJS uses `require` and `exports`, while ES Modules use `import` and `export`.
* ES Modules are static(imports happen before the code runs), while CommonJS is dynamic(modules can be required conditionally inside functions)
* ES Modules are now standard and more widely used, with better optimization support from JavaScript engines.


**Example 3: Module transition to ES Modules**

CommonJS version

```javascript
//greet.js
exports.sayHello = function(){
    console.log("Hello, World!");
}

//main.js
const greet = require('./greet.js')
greet.sayHello();

```

ES Module version

```javascript
//greet.js
export function sayHello(){
    console.log("Hello, World")
}

//main.js
import {sayHello} from './greet.js';

sayHello();

```

**How `require` works differently in Node.js versus in a browser and how module systems vary in these environments**

1. **Node.js Environment**

Node.js was built using the CommonJS module system fromthe beginning. This means `require` is natively supporte in Node.js and can be directly used to import modules.

**How require works in Node.js:**

* *Synchronous* - The require function loads modules synchronously. This is generally okay in a server environment where performance can handle synchronous operations during initial loading.
* *Caching* - Once a module is loaded, Node.js caches it to avoid reloading the module on subsequent *require* calls.
* *Built-in Modules* - Node.js includes a set of built-in modules(e.g fs, http) that can be required directly. 