class Library{
    constructor(){
        //storing books
        this.books = [];
    }

    // adding a book to the library
    addBook(title, author, year){
        const book = {
            title,
            author,
            year,
            isBorrowed: false
        }

        this.books.push(book);
        console.log(`Added book: ${title}`);
    }


    //method to borrow book
    borrowBook(title){
        const book = this.books.find(b => b.title === title && !b.isBorrowed);
        if (book) {
            book.isBorrowed = true;
            console.log(`Borrowed book: ${book.title} written by ${book.author}, ${book.year}`)
        } else {
            console.log(`Sorry, ${title} is either not available or already borrowed`)
        }
    }

    //method to return a book
    returnBook(title){
        const book = this.books.find(b => b.title === title && b.isBorrowed);
        if (book) {
            book.isBorrowed = false;
            console.log(`Returned book: ${this.title} written by ${this.author}, ${this.year}`)
        } else {
            console.log(`Book not found or wasnt borrowed.`)
        }
    }

    //method to search a book
    searchBook(query){
        const results = this.books.filter(b => b.title.includes(query) || b.author.includes(query));
        if (results.length > 0){
            console.log("Books found:");
            results.forEach(b => console.log(`${b.title} by ${b.author}, ${b.year}`));
        } else {
            console.log("No books found.");
        }
    }

    //method to all books
    displayBooks(){
        if (this.books.length === 0){
            console.log("No books in the library")
        } else {
            console.log("Here is the Library collection:")
            this.books.forEach(b => {
                const status = b.isBorrowed ? "Borrowed" : "Available"
                console.log(`${b.title} by ${b.author}, ${b.year} - ${status}`);
            })
        }
    }
}

let myLibrary = new Library();

myLibrary.addBook("Eloquent JavaScript", "Marijn Haverbeke", 2015);
myLibrary.addBook("JavaScript: The Good Parts", "Douglas Crockford", 2008);
myLibrary.addBook("You Don't Know JS", "Kyle Simpson", 2014);

// myLibrary.displayBooks();

myLibrary.borrowBook("Eloquent JavaScript");
myLibrary.displayBooks();

myLibrary.returnBook("Eloquent JavaScript"); 
myLibrary.displayBooks();

myLibrary.searchBook("JavaScript");