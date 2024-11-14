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
    console.log(newBook.id)
})

showButton.addEventListener("click", () => {
    dialog.classList.add("dialogBox")
    dialog.showModal();
});

closeButton.addEventListener("click", ()=>{
    cardList.innerHTML = ""
    displayLibrary()
    dialog.classList.remove("dialogBox")
    dialog.close();
});
function displayLibrary(){
    myLibrary.forEach((book)=>{
        const deleteBtn = document.createElement("button")
        const title= document.createElement("p")
        const author = document.createElement("p")
        const pages = document.createElement("p")
        const cardDiv= document.createElement("div")
        title.textContent= `Title: ${book.title}`
        author.textContent = `Author: ${book.author}`
        pages.textContent = `Pages: ${book.pages}`
        deleteBtn.textContent = "X"
        deleteBtn.classList.add("deleteBtn")
        deleteBtn.addEventListener("click", ()=>{
            deleteChild()
        })
        cardDiv.classList.add("card")
        cardDiv.append(deleteBtn,title,author,pages)
        cardList.append(cardDiv)
    })

}