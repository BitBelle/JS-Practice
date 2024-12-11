// // // const JDG = document.querySelector('#book-list li:nth-child(2) .name')
// // // // console.log(JDG);

// // // //querySelector only grabs one elemnt while querySelectorAll grabs one or several html elements
// // // //grabbing the uls
// // // // const ul = document.querySelector('#book-list ul')
// // // // console.log(ul)

// // // //grabbing the class with 'name'
// // // const books = document.querySelectorAll('#book-list li .name')
// // // // console.log(books);

// // // //converting names to an array
// // // Array.from(books).forEach(item => console.log(item))

// // let books = document.querySelectorAll('#book-list li .name')

// // //since querySelectoe all gives us a nodelist we dont have to convert the 'books' to an array
// // // books.forEach(item => console.log(item))

// // //if we want to append/change/update something on our html string content eg.
// // books.forEach(item => {
// //     item.textContent += '(book title)'
// //     console.log(item)
// // })

// // const bookList = document.querySelector('#book-list');
// // // console.log(bookList.innerHTML);

// // //editing the innerHTML - replacing Books to read with Books and more books
// // // bookList.innerHTML = '<h2>Books and more books</h2>'

// // //appending to the html instead of totally replacing
// // bookList.innerHTML += '<p>This is how you add HTML</p>'


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /**
//  * DOM nodes
//  * Every element in the HTML document is a node, ie. html tag, head tag, body, header etc
//  * Another type is the text node, comment node, attribute node
//  *
//  */

// //grabbing the banner element
// const banner = document.querySelector('#page-banner')

// console.log('#page-banner node type is:', banner.nodeType)//geting to know the node type of banner(#page-banner) - element node
// console.log('#page-banner node name is:', banner.nodeName)//geting to know the node name of banner(#page-banner) - DIV
// console.log('#page-banner has child node:', banner.hasChildNodes())//geting to know the child node of banner(#page-banner) - true

// //cloning a node and inserting it anywhere in the dom
// const clonedBanner = banner.cloneNode(true);//true - enables everything, including the children nested to be cloned which is the opposite to 'false'
// console.log("Cloned banner", clonedBanner)



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /**
//  * DOM traversal from parent to child. ie.Traversing from one node to another in the DOM
//  *
//  */

// //grabbing the parent of #book-list
// const bookList = document.querySelector('#book-list')

// console.log("The parent node is:", bookList.parentNode)

// //traversing upwards through the dom (to parents) - using parentNode and parentElement
// console.log("The parent element is:", bookList.parentElement.parentElement)

// //traversing downwards to children
// console.log(bookList.childNodes) //grabbing all node children
// console.log(bookList.children) //grabbing child elements

// /**
//  * DOM traversal from sibling to sibling(elements on the same level)
//  */

// //navigating through siblings of #booklist
// const siblingList = document.querySelector('#book-list')

// console.log("book-list next sibling is:", siblingList.nextSibling)//nextSibling - returns the next sibling node, which can be any type of node, text node, comment node, element node
// console.log("book-list next element sibling is:", siblingList.nextElementSibling)//nextElementSibling - returns the next sibling that is specifically an element node. It excludes text and comment nodes

// console.log("book-list previous sibling is:", siblingList.previousSibling)//previousSibling - returns the previous sibling node, which can be any type of node, text node, comment node, element node
// console.log("book-list previous element sibling is:", siblingList.previousElementSibling)//previousElementSibling - returns the previous sibling that is specifically an element node. It excludes text and comment nodes

// //editting a property in the header(a previousElement sibling of #book-list)
// siblingList.previousElementSibling.querySelector('p').innerHTML += "<br/> Too cool for everyone else!"



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /**
//  * DOM Events / Removing Content
//  *
//  * Events - all the juicy stuff that happens in the browser eg. click events, keypress events, submit events etc
//  */

// // //adding an event listener to the h2 tag
// // let h2 = document.querySelector('#book-list h2')
// // // console.log(h2);

// // h2.addEventListener('click', (event) => {
// //     console.log(event.target); // tells us which element was clicked(h2)
// //     console.log(event) //pointerEvent
// // })

// //delete btn functionality
// let btns = document.querySelectorAll("#book-list .delete");
// console.log(btns)

//iterating through the buttons and adding an event to each
// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     //so when the btn is clicked we want to remove the <li> tag that contains the specific delete btn
//     //so first grab the delete btn then its parent element ie. <li>
//     const li = e.target.parentElement;

//     //deleting the li - first get the parentNode so as to remove the child
//     li.parentNode.removeChild(li);
//   });
// });

// //preventing default
// const link = document.querySelector("#page-banner a");

// link.addEventListener('click', event => {
//     event.preventDefault()
//     console.log("navigating to", event.target.textContent, "was prevented")
// })


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Event Bubbling - happens when an element receives an event and then the event bubbles up/ is transmitted/ is propagated to its parents and ancestor elements in the DOM tree until it gets to the rot element(html)
 */

let list = document.querySelector('#book-list ul')

list.addEventListener('click', event => {
    //getting the target thats clicked
    if(event.target.className === 'delete') {
        //getting the <li> associated with the delete button
        const li = event.target.parentElement;
        // li.parentNode.removeChild(li)
        list.removeChild(li)
    }
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Forms - Interacting with forms, reacting to submit events to forms
 */

//querying the dom for the forms
// console.log(document.forms) //gives all the forms present
// console.log(document.forms[1])//gives at a specific index

/**A form emits a submit event
 * so we listen for the submit form event then we provide an action - thats the default behavior of a form, to fire an action.
 * where an action to be fired is not defined, the event refreshes the page but we can prevent that default (refresh) behavior
 * 
 */


//add book-list 
// const addForm = document.forms['add-book']
// //attach an eventlistener to add-form
// addForm.addEventListener('submit', (event) => {
//     //preventing the default action
//     event.preventDefault();

//     //grabbing whatever the user types
//     const value = addForm.querySelector('input[type="text"]').value;
//     console.log(value);

// })


/**
 *  * Creating Elements and placing them into the dom
 */

//adding a book to the dom
const addForm2 = document.forms['add-book']
//attach an eventlistener to add-form
addForm2.addEventListener('submit', (event) => {
    //preventing the default action
    event.preventDefault();

    //grabbing whatever the user types
    const value = addForm2.querySelector('input[type="text"]').value;
    
    //create element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add text content to the elements
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;


    //add classes (OR .remove class)
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');


    //append to document(dom)
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    
    //append li to ul- since its nested 
    list.appendChild(li);

})


/**
 *  * Changing styles and Classes
 */

// let liTag = document.querySelector('li:last-child');
// liTag.style.color = 'red'



