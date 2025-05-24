const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const categoryInput = document.querySelector("#category");
const addBookBtn = document.querySelector("#addBookBtn");
const filterCategoryInput = document.querySelector("#filterCategory");
const filterBooksBtn = document.querySelector("#filterBooksBtn");
const bookList = document.querySelector("#bookList");

class Book {
  constructor(title, author, category) {
    this.title = title;
    this.author = author;
    this.category = category;
  }
}

class Library {
  constructor() {
    this.booksList = [];
  }

  addBook(title, author, category) {
    const newBook = new Book(title, author, category);
    this.booksList.push(newBook);
  }

  filterBooks(filterCategory) {
    return this.booksList.filter((book) => book.category === filterCategory);
  }

  displayBooks() {
    bookList.innerHTML = "";
    this.booksList.forEach((book) => {
      const item = document.createElement("li");
      item.classList.add(
        "list-group-item-secondary",
        "list-group-item",
        "mb-2"
      );
      item.innerHTML = `${book.title} by ${book.author} - Category: ${book.category}`;
      bookList.append(item);
      title.value = "";
      author.value = "";
      category.value = "";
    });
  }
}

const myLibrary = new Library();

addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const category = categoryInput.value;

  if (title === "" || author === "" || category === "") {
    alert("Please fill all inputs.");
    return;
  }

  myLibrary.addBook(title, author, category);
  myLibrary.displayBooks();
});

filterBooksBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bookList.innerHTML = "";

  const filterCategory = filterCategoryInput.value;
  if (filterCategory === "") {
    alert("Please enter a category before filter.");
    return;
  }

  const filteredBooks = myLibrary.filterBooks(filterCategory);

  const filteredLibrary = new Library();
  filteredLibrary.booksList = filteredBooks;
  filteredLibrary.displayBooks();
});
