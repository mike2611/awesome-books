

let books = JSON.parse(localStorage.getItem('cataloge'));;
const file = document.querySelector(".book")


function addBooks(ti,aut) {
    books.push({title : ti, author : aut , id :  books.length});
    window.localStorage.setItem('cataloge', JSON.stringify(books));
}

function removeBooks(index) {
  books = books.filter(book => {
   return book.id !== index;
  });

  var element = document.getElementById(index);
    element.parentNode.removeChild(element);

    window.localStorage.setItem('cataloge', JSON.stringify(books));  
}


// addBooks('test', 'testAuthor');
// console.log(books);
// addBooks('test2', 'testAuthor2');
// //removeBooks(1);
// console.log(books);

function showBooks(){


  for(let i=0; i<books.length; i++){   
    var article = document.createElement("article")
    var title = document.createElement("p")
    var author = document.createElement("p")
    var button = document.createElement("button");
    
    title.innerText = `${books[i].title}`
    author.innerText = `${books[i].author}`
    button.textContent = "Remove";


    article.setAttribute("id", i)
    button.setAttribute("class", "rmv-btn")
    button.setAttribute("id", "rmv-" + i)
    button.setAttribute("onclick", `removeBooks(${i})`)

    article.appendChild(title)
    article.appendChild(author)
    article.appendChild(button)

    file.appendChild(article)
  }
  
}

showBooks();

const formAdd = document.querySelector('#add-btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

formAdd.addEventListener('click', (sub) => {
    addBooks(titleInput.value, authorInput.value)
    });
console.log(books)
