const myLibrary = [];
const cardList= document.querySelector("card-list")
const form= document.querySelector("form")
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
    const bookTitle = document.getElementById("title").value
    const bookAuthor = document.getElementById("author").value
    const bookPages= document.getElementById("pages").value
    const div= document.createElement("div")
    const p = document.createElement("p")
    p.textContent =`${bookTitle} \n written by ${bookAuthor}\n has ${bookPages}`
    div.classList.add('card')
    div.append(p)
    document.body.append(div)
    console.log(div.childNodes)
    console.log(`${bookTitle} \n written by ${bookAuthor}\n has ${bookPages}`)
}
function refresh(){
    myLibrary.forEach((book)=>{

    })
}

const dialog = document.querySelector("#dialogBox");
const showButton = document.querySelector(".showBtn");
const closeButton = document.querySelector(".close");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", (e) => {
    e.preventDefault()
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", (e) => {
    e.preventDefault()
  dialog.close();
});