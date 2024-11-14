const cardList = document.querySelector(".card-list")
const form = document.querySelector("form")
const dialog = document.querySelector("#dialogBox");
const showButton = document.querySelector(".showBtn");
const closeButton = document.querySelector(".close");    
const removeBtn = document.querySelector(".closeBtn");
const card = document.querySelector(".card");
const addBtn= document.querySelector(".add-btn")
let counter = 0
const myLibrary = []

function Book(id, title, author, pages, read) {
    this.id = id,
    this.title=title,
    this.author=author,
    this.pages= pages,
    this.read=read
}

function addBookToLibrary() {
    const bookTitle = document.getElementById("title").value
    const bookAuthor = document.getElementById("author").value
    const bookPages= document.getElementById("pages").value
    const readBook = document.getElementById("read").value
    const div= document.createElement("div")
    const title = document.createElement("p")
    const author= document.createElement('p')
    const pages = document.createElement('p')
    const button = document.createElement('button')
    const read = document.createElement("input")
    read.setAttribute("type","checkbox" )
    button.textContent= "X"
    title.textContent =`Title: ${bookTitle} `
    author.textContent= `Author: ${bookAuthor}`
    pages.textContent= `Pages: ${bookPages}`
    read.classList.add("toggle")
    button.classList.add("deleteBtn")
    button.addEventListener("click",()=>{
        deleteChild()
    })
    div.classList.add('card')
    div.setAttribute("id", counter)
    div.append(button)
    div.append(title)
    div.append(author)
    div.append(pages)
    div.append(read)
    cardList.appendChild(div)
}

function deleteChild(){
    const cardList = document.querySelector(".card-list")
    const card = document.querySelector(".card");
    cardList.removeChild(card)
    myLibrary.splice(card.id,1)

}

addBtn.addEventListener("click",function(e){
    e.preventDefault()
    const bookTitle = document.getElementById("title").value
    const bookAuthor = document.getElementById("author").value
    const bookPages= document.getElementById("pages").value
    const readBook = document.querySelector(".read").value    
    let newBook = new Book(counter++, bookTitle, bookAuthor, bookPages,readBook)
    myLibrary.push(newBook)
    addBookToLibrary()
    console.log(newBook.id)
})

showButton.addEventListener("click", () => {
    dialog.classList.add("dialogBox")
    dialog.showModal();
});

closeButton.addEventListener("click", ()=>{
    dialog.classList.remove("dialogBox")
    dialog.close();
});

