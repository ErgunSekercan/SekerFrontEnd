const fetchBooks = () =>{
    const response = fetch("http://localhost:3006/books")

    const booksData = response.json()
    console.log(booksData);
}

const pageDownload = document.addEventListener("DOMContentLoaded", async () => {

    const allBooks = await fetch ()

    displayBooks(allBooks)

})

const displayBooks = (everyBook) =>{

    const tableBody1 = document.getElementById("booksTbody")

    tableBody.innerHTML = "";

    everyBook.map((book) => {

        const {id, bookName, author, category, writtenDate, coverImage} = book

        tableBody.innerHTML += `
        <tr>
          <td>${id}</td>
          <td>${bookName}</td>
          <td>${author}</td>
          <td>${category}</td>
          <td>${writtenDate}</td>
          <td><img src="${coverImage}" alt="" width="30px"></td>
          <td><i class="bi bi-pencil-fill"></i></td>
          <td><i class="bi bi-trash-fill"></i></td>
          <td><i class="bi bi-eye-fill"></i></td>
         </tr>
        `
    
      })

}
const tableBody = document.getElementById("booksTBody")