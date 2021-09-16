class Book {
  constructor(arr) {
    this.books = arr;
    this.file = document.querySelector('.book');
    this.article = document.createElement('article');
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

  returnSpecs(index) {
    return `"${this.books[index].title}" by ${this.books[index].author}`;
  }

  showBooks() {
    for (let i = 0; i < this.books.length; i += 1) {
      const newArticle = this.article.cloneNode();
      const titleAuthor = document.createElement('p');
      const button = document.createElement('button');

      titleAuthor.innerText = this.returnSpecs(i);
      button.textContent = 'Remove';

      newArticle.setAttribute('id', i);
      newArticle.setAttribute('class', 'd-flex justify-content-between align-items-center article');
      if (i % 2 !== 0) {
        newArticle.style.background = 'lightGray';
      } else {
        newArticle.style.background = 'white';
      }
      titleAuthor.setAttribute('class', 'my-0 mx-2 fw-bold text-capitalize');
      button.setAttribute('class', 'btn btn-danger m-2');
      button.addEventListener('click', () => {
        this.removeBook(i);
        this.constructor.updateBackground();
      });

      newArticle.appendChild(titleAuthor);
      newArticle.appendChild(button);

      this.file.appendChild(newArticle);
    }
  }

  static updateBackground() {
    let index = 0;
    const newArticles = document.querySelectorAll('.article');
    newArticles.forEach((newArticle) => {
      if (index % 2 !== 0) {
        newArticle.style.background = 'lightGray';
      } else {
        newArticle.style.background = 'white';
      }
      index += 1;
    });
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

const formSection = document.querySelector('#add');
const showSection = document.querySelector('#show');
const contactSection = document.querySelector('#contact');
const listLink = document.querySelector('#listLink');
const addLink = document.querySelector('#addLink');
const contactLink = document.querySelector('#contactLink');

const navButtons = document.querySelectorAll('.nav-link');

const addNew = () => {
  listLink.classList.remove('active');
  contactLink.classList.remove('active');
  addLink.classList.add('active');

  formSection.classList.remove('d-none');
  showSection.classList.add('d-none');
  contactSection.classList.add('d-none');
};

const listBooks = () => {
  listLink.classList.add('active');
  contactLink.classList.remove('active');
  addLink.classList.remove('active');

  showSection.classList.remove('d-none');
  contactSection.classList.add('d-none');
  formSection.classList.add('d-none');
};

const contact = () => {
  contactSection.classList.remove('d-none');
  showSection.classList.add('d-none');
  formSection.classList.add('d-none');

  listLink.classList.remove('active');
  contactLink.classList.add('active');
  addLink.classList.remove('active');

  contactSection.classList.remove('d-none');
  showSection.classList.add('d-none');
  formSection.classList.add('d-none');
};

navButtons[0].addEventListener('click', listBooks);
navButtons[1].addEventListener('click', addNew);
navButtons[2].addEventListener('click', contact);
