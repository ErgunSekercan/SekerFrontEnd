// veri çekme

const fetchBooks = async() => {
try {
    const response = await fetch("http://localhost:3006/books")
    // console.log(response);
    const booksData = await response.json();
    // console.log(booksData);
    
    return booksData

} catch (error) {
    console.log(error);
}
}

// sayfa ilk yüklendiğinde veriler çekilsin

document.addEventListener("DOMContentLoaded", async () => {
    const booksData1 = await fetchBooks()
    booksListDisplay (booksData1) //veriyi herhangi bir adla gönderebiliriz mesela books.
})

// ekrana veriyi bastıralım

const booksListDisplay = (books) => {
  // console.log("books", books )
  const tbody1 = document.getElementById("booksTBody")
  tbody1.innerHTML ="";

  books.map((book) => {
    const {id, bookName, author, category, writtenDate, coverImage} = book //destructring  => her satırda book kullanmamak için yaptık. eğer yapmasaydık aşağıda book.id , book.bookName şeklinde yazmamaız gerekirdi. iki türlü de çalışır.

    tbody1.innerHTML += `
    <tr data-id = "${id}">
      <td>${id}</td>
      <td>${bookName}</td>
      <td>${author}</td>
      <td>${category}</td>
      <td>${writtenDate}</td>
      <td><img src="${coverImage}" alt="" width="30px"></td>
      <td><i class="bi bi-pencil-fill" data-bs-target="#editBookModal" data-bs-toggle="modal"></i></td>
      <td><i class="bi bi-trash-fill"></i></td>
      <td><i class="bi bi-eye-fill"></i></td>
     </tr>
    `

  })

}
 const tbody = document.getElementById("booksTBody")

 // kitap ekleme ve güncelleme işlemleri

document.getElementById("saveChangesButton").addEventListener("click", async () => {
  // console.log(document.getElementById("saveChangesButton"))
  const id = document.getElementById("saveChangesButton").getAttribute("data-id")

  const newAndUpdateData = {
    bookName: document.getElementById("editBookName").value,
    author: document.getElementById("editAuthor").value,
    category: document.getElementById("editCategory").value,
    writtenDate: document.getElementById("editWrittenDate").value,
    coverImage: document.getElementById("editCoverImage").value,     
    
   
  }
  console.log(newAndUpdateData)

  if(id){
      // burada update işlemini yapacağız
      console.log("update")
      await fetch(`http://localhost:3006/books/${id}`, {
          method : "PUT",
          headers : {
                  "Content-Type" : "application/json"
          },
          body : JSON.stringify(newAndUpdateData)

      })
      console.log(id)
        console.log(document.querySelector(`tr[data-id ="${id}"]`))
      document.querySelector(`tr[data-id ="${id}"]`).innerHTML =  `
      <td>${id}</td> 
    <td>${newAndUpdateData.bookName}</td>
    <td>${newAndUpdateData.author}</td>
    <td>${newAndUpdateData.category}</td>
    <td>${newAndUpdateData.writtenDate}</td>
    <td><img src="${newAndUpdateData.coverImage}" alt="" width="30px"></td>
    <td><i class="bi bi-pencil-fill" data-bs-target="#editBookModal" data-bs-toggle="modal"></i></td>
    <td><i class="bi bi-trash-fill"></i></td>
    <td><i class="bi bi-eye-fill"></i></td>    
      
      `

  }else{
      // kitap ekleme işlemi
      // fonksiyon içinde tanımlanan değişkenler fonksiyon için de ölür. onun için aynı isimdeki değişkeni farklı fonksiyonlarda görebilirisiniz. örneğin buradaki response.. 
      const response = await fetch("http://localhost:3006/books",
          {
              method : "POST", 
              headers : {
                  "Content-Type" : "application/json"
              },
              body : JSON.stringify(newAndUpdateData)

          }
      );
      const newBook = await response.json()
      console.log(newBook)
//  refresh yapmaya gerek kalmadan anlık olarak tabloya yeni eklenen şekliyle veriyi bastık
      tbody.innerHTML += `
      <tr data-id="${newBook.id}" >
    <td>${newBook.id}</td> 
    <td>${newBook.bookName}</td>
    <td>${newBook.author}</td>
    <td>${newBook.category}</td>
    <td>${newBook.writtenDate}</td>
    <td><img src="${newBook.coverImage}" alt="" width="30px"></td>
    <td><i class="bi bi-pencil-fill" data-bs-target="#editBookModal" data-bs-toggle="modal"></i></td>
    <td><i class="bi bi-trash-fill"></i></td>
    <td><i class="bi bi-eye-fill"></i></td>
   </tr>

      `

  }

  // modal kapansın
  const editBookModal = bootstrap.Modal.getInstance(document.getElementById("editBookModal"))

  // console.log("control",editBookModal )

  editBookModal.hide()

})

/// sartırdaki  tıklama işlemleri 

tbody.addEventListener("click", async (e) => {
  // console.log(e.target.parentElement.parentElement.firstElementChild.innerText)
  const id = e.target.parentElement.parentElement.firstElementChild.innerText

  //delete
  if(e.target.classList.contains("bi-trash-fill")){
    console.log("silindi")
  // await fetch("http://localhost:3006/books/" + id)
await fetch(`http://localhost:3006/books/${id}`, {
  method : "DELETE"
})

const x = await fetchBooks()
booksListDisplay(x)
  
  // edit
}
  else if(e.target.classList.contains("bi-pencil-fill")){
      const updateBookData = await fetch(`http://localhost:3006/books/${id}`).then((res)=> res.json() )
      console.log(updateBookData)
      document.getElementById("editBookName").value = updateBookData.bookName;
      document.getElementById("editAuthor").value = updateBookData.author
      document.getElementById("editCategory").value = updateBookData.category
      document.getElementById("editWrittenDate").value =updateBookData.writtenDate
      document.getElementById("editCoverImage").value =updateBookData.coverImage
      document.getElementById("saveChangesButton").setAttribute("data-id", id)
  }
  // detail (eye)

  else if(e.target.classList.contains("bi-eye-fill")){
    const bookDataEye = await fetch(`http://localhost:3006/books/${id}`).then((res)=> res.json() ) 

    console.log(bookDataEye)

    document.getElementById("viewCoverImage").src= bookDataEye.coverImage
    document.getElementById("viewBookName").innerText= bookDataEye.bookName
    document.getElementById("viewAuthor").innerText= bookDataEye.author
    document.getElementById("viewCategory").innerText= bookDataEye.category
    document.getElementById("viewWrittenDate").innerText= bookDataEye.writtenDate

    const viewBookModal = new bootstrap.Modal(document.getElementById("viewBookModal"))
    viewBookModal.show()

}

})


//  sort 
// modal ı açmak için kullandık. html tarafında da bu işlem yapılabilir. bakınız filter button.. 
document.getElementById("sortButton").addEventListener("click", () => {
  const sortModal = new bootstrap.Modal(document.getElementById("sortModal"))
  sortModal.show()
})

const sortBooks = (books, criter) => {
  console.log(criter)
  if(criter === "AZ"){
     return books.sort((a,b) => a.bookName.localeCompare(b.bookName) ) 
  }
  else if(criter === "ZA"){
     return books.sort((a,b) => b.bookName.localeCompare(a.bookName) ) 
  }
  else if(criter === "DATE"){
     return books.sort((a,b) => b.writtenDate - a.writtenDate ) 
  }


}

document.getElementById("sortAZ").addEventListener("click", async () => {
  const booksData2 = await fetchBooks()
  const sortedBooks = sortBooks(booksData2, "AZ" ) 
  booksListDisplay(sortedBooks)

} )
document.getElementById("sortZA").addEventListener("click", async () => {
  const booksData3 = await fetchBooks()
  const sortedBooks1 = sortBooks(booksData3, "ZA" ) 
  booksListDisplay(sortedBooks1)

} )
document.getElementById("sortDate").addEventListener("click", async () => {
  const booksData4 = await fetchBooks()
  const sortedBooks2 = sortBooks(booksData4, "DATE" ) 
  booksListDisplay(sortedBooks2)

} )

// filter

document.getElementById("searchButton").addEventListener("click", async () => {
  const booksData5 = await fetchBooks()
  const category = document.getElementById("filterCategory").value.toLowerCase()

  const filteredBooks = booksData5.filter(book=> book.category.toLowerCase().includes(category) )

  booksListDisplay(filteredBooks)

  // modal kapansın
  const filterModal = bootstrap.Modal.getInstance(document.getElementById("filterModal"))

 

  filterModal.hide()
})

// anlık arama işlemleri

document.getElementById("searchText").addEventListener("input", async (e) => {
  const booksData6 = await fetchBooks()
  console.log(booksData6)
  const query = e.target.value.toLowerCase().trim()
  const filteredBooks1 = booksData6.filter((book) => book.bookName.toLowerCase().includes(query) || book.author.toLowerCase().includes(query))
  console.log(filteredBooks1)

  booksListDisplay(filteredBooks1)


}  )

