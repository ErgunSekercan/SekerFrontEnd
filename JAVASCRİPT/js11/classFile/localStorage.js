

// local stroge a birşeyler göndermek 

// primitive

//? localstroge a gönderme
let student = "ergün sekercan"

localStorage.setItem("ogrenci",student )


//? localstroge den okuma
document.querySelector(".title").innerHTML = localStorage.getItem("ogrenci")

//? localstroge den silme
// localStorage.removeItem("ogrenci")

//! non primitive

let user = {userName : "ali", email : "a@gmail.com"}

localStorage.setItem("userInfo", JSON.stringify(user))

// localStorage.removeItem("userInfo")

