const myLibrary = [];
const form= document.querySelector("form")
const addBtn= document.querySelector(".add-btn").addEventListener("click",function(e){
    e.preventDefault()
    const bookTitle = document.getElementById("title").value
    const bookAuthor = document.getElementById("author").value
    const bookPages= document.getElementById("pages").value
    let newBook = new Book(bookTitle, bookAuthor, bookPages)
    myLibrary.push(newBook)
    console.log(myLibrary)
})
 
function Book(title, author, pages) {
    this.title=title,
    this.author=author,
    this.pages= pages
}

function addBookToLibrary() {

}

const dialog = document.querySelector("#dialogBox");
const showButton = document.querySelector(".showBtn");
const closeButton = document.querySelector(".close");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});