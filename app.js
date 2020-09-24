let myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    let title = prompt("Please enter the book title...");
    let author = prompt("Please enter the author of this book...");
    let pages = prompt("How many pages does this book contain?");
    let read = confirm("Have you read this book?\nPress OK for yes or Cancel for no...")
    console.log(read);
    let currentBook = new Book(title, author, pages, "unread")
    if(read){
        currentBook.read = "read"
    }

    myLibrary.push(currentBook);
    drawTable();
}

function drawTable(){
    let html = '<table>';
    html += '<tr>';
    for( let j in myLibrary[0] ) {
    html += '<th>' + j + '</th>';
    }
    html += '</tr>';
    for( let i = 0; i < myLibrary.length; i++) {
    html += '<tr>';
    for( let j in myLibrary[i] ) {
        html += '<td>' + myLibrary[i][j] + '</td>';
    }
    html += '</tr>';
    }
    html += '</table>';
    document.getElementById('container').innerHTML = html;
}
