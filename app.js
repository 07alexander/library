let myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if(read)
            return title + " by " + author + ", " + pages + " pages, " + "have read"
        else
            return title + " by " + author + ", " + pages + " pages, " + "not read yet"
    }
}

function addBookToLibrary(){

}

const b1 = new Book('the hobbit', 'jrr', '232', true)
const b2 = new Book('the hobbit', 'jrr', '232', true)

myLibrary.push(b1);
myLibrary.push(b2);


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



//console.log(b1.info());