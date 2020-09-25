let myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeRead = function(){
    this.read = !this.read;
}

function addBookToLibrary(){
    let title = prompt("Please enter the book title...");
    let author = prompt("Please enter the author of this book...");
    let pages = prompt("How many pages does this book contain?");
    let read = confirm("Have you read this book?\nPress OK for yes or Cancel for no...");
    
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    save();
    display();

}
 

function save(){
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function display(){
    const library = document.getElementById('Lib-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => library.removeChild(book));

    for(let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

function createBook(item){
    const library = document.querySelector('#Lib-container');
    const book = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const rdBTN = document.createElement('button');
    const rmBTN = document.createElement('button');
    

    book.classList.add('book');
    book.setAttribute('id', myLibrary.indexOf(item));

    title.textContent = item.title;
    title.classList.add('title');
    book.appendChild(title);

    author.textContent = item.author;
    author.classList.add('author');
    book.appendChild(author);

    pages.textContent = item.pages;
    pages.classList.add('pages');
    book.appendChild(pages);

    if(item.read){
        rdBTN.textContent = 'Read';
    }else
        rdBTN.textContent = 'Unread';
    rdBTN.classList.add('rdBTN');
    book.appendChild(rdBTN);
    
    
    rmBTN.textContent = 'Remove';
    rmBTN.setAttribute('id', 'rmBTN');
    book.appendChild(rmBTN);

    library.appendChild(book);

    rdBTN.addEventListener('click',()=>{
        item.changeRead();
        save();
        display();
    });

    rmBTN.addEventListener('click', ()=>{
        myLibrary.splice(myLibrary.indexOf(item), 1);
        save();
        display();
    });
};

function getLibrary(){
    if(localStorage.myLibrary){
        let data = localStorage.getItem('myLibrary');
        data = JSON.parse(data);
        myLibrary = data;
        display();
    }else{
        display();
        }
    }

getLibrary();