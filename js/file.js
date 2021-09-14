class Book {


  constructor(arr) {
    this.books = arr
  }

  get book() {
    return this.books
  }
  
  removeBook(index) {
  	this.books = this.books.filter((book) => book.id !== index);
  }
  
  addBook(ti, aut, id) {
  	console.log(typeof this.books)
  	this.books.push({ title: ti, author: aut, id: this.books.length });
  }
  
  
}


let arr;

if (JSON.parse(localStorage.getItem('cataloge'))) {
  arr = JSON.parse(localStorage.getItem('cataloge'));
} else {
  arr = [];
}


let books = new Book(arr);

const file = document.querySelector('.book');

function addBooks(ti, aut) {
  books.push({ title: ti, author: aut, id: books.length });
  window.localStorage.setItem('cataloge', JSON.stringify(books));
}

function removeBooks(index) {
  books = books.filter((book) => book.id !== index);

  const element = document.getElementById(index);
  element.parentNode.removeChild(element);

  window.localStorage.setItem('cataloge', JSON.stringify(books));
}

function showBooks() {
  for (let i = 0; i < books.length; i += 1) {
    const article = document.createElement('article');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const button = document.createElement('button');

    title.innerText = `${books[i].title}`;
    author.innerText = `${books[i].author}`;
    button.textContent = 'Remove';

    article.setAttribute('id', i);
    button.setAttribute('class', 'rmv-btn');
    button.setAttribute('id', `rmv-${i}`);
    button.addEventListener('click', () => removeBooks(i));

    article.appendChild(title);
    article.appendChild(author);
    article.appendChild(button);

    file.appendChild(article);
  }
}

showBooks();

const formAdd = document.querySelector('#add-btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

formAdd.addEventListener('click', () => {
  addBooks(titleInput.value, authorInput.value);
});
