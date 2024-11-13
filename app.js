const myLibrary = [];
const cardList = document.querySelector("card-list")
const form = document.querySelector("form")
const dialog = document.querySelector("#dialogBox");
const showButton = document.querySelector(".showBtn");
const closeButton = document.querySelector(".close");

const addBtn= document.querySelector(".add-btn").addEventListener("click",function(e){
    e.preventDefault()
    const bookTitle = document.getElementById("title").value
    const bookAuthor = document.getElementById("author").value
    const bookPages= document.getElementById("pages").value
    let newBook = new Book(bookTitle, bookAuthor, bookPages)
    myLibrary.push(newBook)
    addBookToLibrary()
})
 
function Book(title, author, pages) {
    this.title=title,
    this.author=author,
    this.pages= pages
}

function addBookToLibrary() {
    const cardList= document.querySelector(".card-list")
    const bookTitle = document.getElementById("title").value
    const bookAuthor = document.getElementById("author").value
    const bookPages= document.getElementById("pages").value
    const div= document.createElement("div")
    const title = document.createElement("p")
    const author= document.createElement('p')
    const pages = document.createElement('p')
    const button = document.createElement('button')
    button.textContent= "X"
    title.textContent =`Title: ${bookTitle} `
    author.textContent= `Author: ${bookAuthor}`
    pages.textContent= `Pages: ${bookPages}`
    button.classList.add("closeBtn")
    div.classList.add('card')
    div.append(button)
    div.append(title)
    div.append(author)
    div.append(pages)
    cardList.appendChild(div)
}
function refresh(){
    myLibrary.forEach((book)=>{

    })
}

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", (e) => {
    e.preventDefault()
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", ()=>{
        dialog.close();

});