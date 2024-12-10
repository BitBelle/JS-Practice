
// // const JDG = document.querySelector('#book-list li:nth-child(2) .name')
// // // console.log(JDG);

// // //querySelector only grabs one elemnt while querySelectorAll grabs one or several html elements
// // //grabbing the uls
// // // const ul = document.querySelector('#book-list ul')
// // // console.log(ul)

// // //grabbing the class with 'name'
// // const books = document.querySelectorAll('#book-list li .name')
// // // console.log(books);


// // //converting names to an array
// // Array.from(books).forEach(item => console.log(item))



// let books = document.querySelectorAll('#book-list li .name')

// //since querySelectoe all gives us a nodelist we dont have to convert the 'books' to an array
// // books.forEach(item => console.log(item))

// //if we want to append/change/update something on our html string content eg.
// books.forEach(item => {
//     item.textContent += '(book title)'
//     console.log(item)
// })


// const bookList = document.querySelector('#book-list');
// // console.log(bookList.innerHTML);

// //editing the innerHTML - replacing Books to read with Books and more books
// // bookList.innerHTML = '<h2>Books and more books</h2>'

// //appending to the html instead of totally replacing
// bookList.innerHTML += '<p>This is how you add HTML</p>'


/**
 * DOM nodes
 * Every element in the HTML document is a node, ie. html tag, head tag, body, header etc
 * Another type is the text node, comment node, attribute node
 * 
 */

//grabbing the banner element
const banner = document.querySelector('#page-banner')

console.log('#page-banner node type is:', banner.nodeType)//geting to know the node type of banner(#page-banner) - element node
console.log('#page-banner node name is:', banner.nodeName)//geting to know the node name of banner(#page-banner) - DIV
console.log('#page-banner has child node:', banner.hasChildNodes())//geting to know the child node of banner(#page-banner) - true


//cloning a node and inserting it anywhere in the dom
const clonedBanner = banner.cloneNode(true);//true - enables everything, including the children nested to be cloned which is the opposite to 'false'
console.log("Cloned banner", clonedBanner)



/**
 * DOM traversal from parent to child. ie.Traversing from one node to another in the DOM
 * 
 */

//grabbing the parent of #book-list
const bookList = document.querySelector('#book-list')

console.log("The parent node is:", bookList.parentNode)

//traversing upwards theough the dom (to parents) - using parentNode and parentElement
console.log("The parent element is:", bookList.parentElement.parentElement)


//traversing downwards to children
console.log(bookList.childNodes) //grabbing all node children
console.log(bookList.children) //grabbing child elements

/**
 * DOM traversal from sibling to sibling
 */