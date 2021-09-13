let books = [{title : '' , author: '', id: 0}];


function addBooks(title,author) {
    books.push({title : title, author : author , id :  books.length});
}

function removeBooks(id) {
  books = books.filter(book => {
    book.id !== id;
  });
}

addBooks('test', 'testAuthor');
console.log(books);
addBooks('test2', 'testAuthor2');
removeBooks(1);
console.log(books);
