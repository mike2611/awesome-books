let books = [{title : '' , author: '', id: 0}];
const file = document.querySelector("#book")


function addBooks(title,author) {
    books.push({title : title, author : author , id :  books.length});
}

function removeBooks(index) {
  books = books.filter(book => {
   return book.id !== index;
  });
}


addBooks('test', 'testAuthor');
console.log(books);
addBooks('test2', 'testAuthor2');
//removeBooks(1);
console.log(books);

function showBooks(){

  books.forEach(i => {
    var title = document.createElement("p")
    title.innerText = `${i.title}`
    file.appendChild(title)
    var author = document.createElement("p")
    author.innerText = `${i.author}`
    file.appendChild(author)
    var button = document.createElement("button");
    button.textContent = "Remove"
    button.setAttribute("id",i.id)
    file.appendChild(button)
  });
  
}

showBooks();