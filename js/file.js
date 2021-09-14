class Book {
  constructor(arr) {
    this.books = arr;
    this.file = document.querySelector('.book');
  }

  get book() {
    return this.books;
  }

  removeBook(index) {
    this.books = this.books.filter((book) => book.id !== index);
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
    this.updateLocalStorage();
  }

  addBook(ti, aut) {
    this.books.push({ title: ti, author: aut, id: this.books.length });
    this.updateLocalStorage();
  }

  showBooks() {
    for (let i = 0; i < this.books.length; i += 1) {
      const article = document.createElement('article');
      const title = document.createElement('p');
      const author = document.createElement('p');
      const button = document.createElement('button');

      title.innerText = `${this.books[i].title}`;
      author.innerText = `${this.books[i].author}`;
      button.textContent = 'Remove';

      article.setAttribute('id', i);
      button.setAttribute('class', 'rmv-btn');
      button.setAttribute('id', `rmv-${i}`);
      button.addEventListener('click', () => this.removeBook(i));

      article.appendChild(title);
      article.appendChild(author);
      article.appendChild(button);

      this.file.appendChild(article);
    }
  }

  updateLocalStorage() {
    window.localStorage.setItem('cataloge', JSON.stringify(this.books));
  }
}

let arr;

if (JSON.parse(localStorage.getItem('cataloge'))) {
  arr = JSON.parse(localStorage.getItem('cataloge'));
} else {
  arr = [];
}

const books = new Book(arr);
books.showBooks();

const formAdd = document.querySelector('#add-btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

formAdd.addEventListener('click', () => {
  books.addBook(titleInput.value, authorInput.value);
});
