let books = [
    {title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 2015},
    {title: "The Great Gatsby", author: "F.Scott Fitzgerald", yearPublished: 1920},
    {title: "One Hundered Years of Solitude", author: "Gabriel Garcia Marquez", yearPublished: 1967},
    {title: "A Passage to India", author: "E.M Forster", yearPublished: 1924},
    {title: "Things Fall Apart", author: "Chinua Achebe", yearPublished: 1958},
    {title: "A Little Life", author: "Hanya Yanagihara", yearPublished: 2015},
]

// filtering out books published before 2000
const filteredBooks = books.filter(book => book.yearPublished >= 2000);
console.log(filteredBooks);

// mapping over the filtered books to create a list of book titles
const bookTitles = filteredBooks.map(book => book.title);
console.log(bookTitles);

// reducing the list to a single string of all book entities separated by comma
// const singleBookEntity = bookTitles.reduce((a, b) => a + ", " + b, "");
// console.log(singleBookEntity)

//joining the titles using join()
const singleBookEntity = bookTitles.join(", ");
console.log(singleBookEntity);
