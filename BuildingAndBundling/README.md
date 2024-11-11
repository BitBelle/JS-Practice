# Building and Bundling

Building and bundling are techniques that JS developers use to make their code more efficient and compatible with different environments, like web browsers. 

These processes allow developers to write code in new or advanced JavaScript(or even other languages like TypeScript), and then transform it so it can run in any browser and load as quickly as possible.

**Breaking down the above:**

**1. Why Build?**

JS developers often want to use:
    * *New language features* that might not be fully supported in all browsers.
    * *Extensions like TypeScript*, add features like type-checking that doesnt exist in JavaScript by default.

But older browsers dont support everything new. To solve this, developers use build tools that "compile" or "translate" their code into a version that any browser can run, even if the code was written in a more modern or extended JavaScript.

**Example:**

* We write modern JavaScript with a feature like `?.` (optional chaining) for accessing nested properties:

```javascript
const name = user?.profile?.name;

```

* This feature isnt supported by all older browsers. A build tool like **Babel** can convert it into code that works in all browsers:

```javascript
const name = user && user.profile && user.profile.name;

```

* This is called **transpiling** - converting code from one version to another for compatability.

**2. Bundling: Combining Files for Effeciency**

When building a project, we often break it down into multiple modules or files for better organization. But if a webpage has to load each file individually, it can take a long time. To speed things up, developers use bundlers to combine all these files into a single(or a few)large file(s) that load more quickly.

**Example:**

Suppose we have a project with 3 files:
    * `main.js`
    * `helper.js`
    * `config.js`

Each file takes 50 miliseconds to load separately. Loading three files could take 150 miliseconds or more, depending on network conditions.

A bundler like *Webpack* or *Rollup* combines them into one file, `bundle.js``, which loads in just one request, reducing loading time.


**3. Minification: Making the file smaller**

Bundling reduces the number of files, but minification reduces the file size itself. Minifiers take out unnnecessary characters(like spaces and comments) and can also shorten variable names to make the code even smaller. Smaller files load faster because there's less data to transfer.

**Example:**

```javascript
function sayHello(name){
    console.log("Hello, " + name);
}

sayHello("Alice");

```

After minification, it might look like this:

```javascript
function a(b){console.log("Hello, "+b)}a("Alice");

```

The above, does a similar thing, but its smaller and faster to load.


**Putting it all together**

So when we see code on a website that has been *built*, *bundled*, and *minified*, it might have gone through several stages:
    1. *Build* - Convert code to a compatible version(eg.TypeScript to JavaScript, modern JavaScript to older JavaScript).
    2. *Bundle* - Combining multiple files into one or a few files to minimize network requests.
    3. *Minify* - Removing extra spaces, comments, and renaming variables to make the files as small as possible.


**Tools**

Some tools used for these processes
    * *Babel* - For building or transpiling code (eg. converting modern JavaScript to older JavaScript)
    * *Webpack/Rollup* - For bundling files into one package.
    * *UglifyJS/Terser* - For minifying Javascript.

**Example:**

These steps are standard in almost every JavaScript project that goes live on the web. They ensure that the code runs everywhere and loads quickly for a better user experience.

1. *Writing in TypeScript*

```javascript
let greeting: string = "Hello";
console.log(greeting);
```

2. *Build/Transpile with Babel(or any other similar tool) into JavaScript*

```javascript
var greeting = "Hello";
console.log(greeting);
```

3. *Bundle multiple files into one `bundle.js`.*
4. *Minify `bundle.js` to reduce its size*


## Module Design: Making Code Useful, Predictable and Easy to Intergrate.

Module design is all about structuring code in ways that are *easy to understand*, *easy to use*, and *easy to intergrate with other code*. 

**1. Making code easy to use and predictable**

A well-designed module should be easy for anyone to understand and use, even if they havent seen it before. A good way to do this is to follow common patterns and keep the interface simple.

**Example:** Lets say we are designing a module to read INI files(simple text file often used for configurations). Works similarly to JSON in JavaScript(`JSON.parse` to read and `JSON.stringify` to write)

```javascript
//iniModule.js
module.exports = {
    parse: function (iniString) {
        //logic to convert INI string to JS object
    },

    stringify: function (iniObject){
        //logic to convert JS object to INI string
    }
};
```

And now the module usage:

```javascript
const ini = require('./iniModule');
const config = ini.parse("name=John\nage=30");
console.log(config); //{name: "John", age: 30}

const stringified = ini.stringify({name:"Alice", age: 25});
console.log(stringified); //"name=Alice\nage=25"

```

2. Focus on Composability

A module should ideally do one thing well and should be easy to combine with other code. This is called *composability* - ability for different parts of code to work together easily.