// Book class
class Book {
    // Static property to count the number of books created
    static totalBooks = 0;

    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;

        // Increment the total books count whenever a new book is created
        Book.totalBooks++;
    }

    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is currently unavailable.`);
        }
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }
}

// User class
class User {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (book.isAvailable) {
            book.borrow();
            this.borrowedBooks.push(book);
        } else {
            console.log(`${book.title} cannot be borrowed right now.`);
        }
    }

    returnBook(book) {
        if (this.borrowedBooks.includes(book)) {
            book.returnBook();
            this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
        } else {
            console.log(`${this.name} does not have ${book.title} borrowed.`);
        }
    }
}

// Library class
class Library {
    // Static property to track the number of libraries created
    static totalLibraries = 0;

    constructor() {
        this.books = [];
        // Increment the total libraries count whenever a new library is created
        Library.totalLibraries++;
    }

    addBook(book) {
        this.books.push(book);
        console.log(`${book.title} has been added to the library.`);
    }

    removeBook(book) {
        this.books = this.books.filter(b => b !== book);
        console.log(`${book.title} has been removed from the library.`);
    }

    viewBooks() {
        console.log("Books available in the library:");
        this.books.forEach(book => {
            console.log(`${book.title} by ${book.author} - ${book.isAvailable ? "Available" : "Not Available"}`);
        });
    }
}

// Example Usage
let library1 = new Library(); // Library instance 1
let library2 = new Library(); // Library instance 2

let book1 = new Book("JavaScript for Beginners", "John Doe");
let book2 = new Book("Advanced JavaScript", "Jane Smith");
let user = new User("Alice");

library1.addBook(book1);
library1.addBook(book2);

library1.viewBooks();

user.borrowBook(book1);
library1.viewBooks();

user.returnBook(book1);
library1.viewBooks();

library1.removeBook(book2);
library1.viewBooks();

console.log(`Total number of books created: ${Book.totalBooks}`);
console.log(`Total number of libraries created: ${Library.totalLibraries}`);
