//fetch

//? CRUD

//  create => POST
//  read => GET
// update => PATCH
//  delete => DELETE

// const URL = "http://localhost:3000/books"
const URL = "https://jsonplaceholder.typicode.com/users"



const getBooks = async () => {
    try {
        const response = await fetch(URL)
        const usersData = await response.json();
        console.log(response)
        console.log(usersData)

        usersData.map((user)=> {
            console.log(user)
            document.querySelector(".list").innerHTML += `<li>${user.id} ${user.name}</li>`

        })

        // document.querySelector(".title").innerHTML = booksData[0].address.city
        // document.querySelector(".title1").innerHTML = booksData[1].address.city




    } catch (error) {
        console.log(error)
    }
}

document.querySelector(".veri-al").addEventListener("click", getBooks )



