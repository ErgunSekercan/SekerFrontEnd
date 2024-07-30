// ? DOM (document object model)  window

//! html öğelerini bulma
// genel seçici
console.log(document.querySelector("#baslık") ) 
console.log(document.querySelector("h3")) 
console.log(document.querySelector(".title")) 

// id yakalar
console.log(document.getElementById("baslık"))
console.clear()

// class yakalar HtmlCollection şeklinde döndürür
const meyve = ["elma", "armut"]
console.log(meyve)
console.log(document.getElementsByClassName("title")[0])

// genel toplu seçici  nodelist şeklinde döndürür

console.log(document.querySelectorAll(".title")[1]) 

// tag name e göre yakalama

console.log(document.getElementsByTagName("p")[2].innerHTML)

// referans noktasına göre ulaşma  nextElementSibling, previousElementSibling
console.log(document.querySelector(".pag1").nextElementSibling.nextElementSibling)



//! html öğelerini değiştirme

document.getElementsByTagName("p")[2].innerHTML = "biz değiştirdik"
document.getElementsByTagName("p")[2].innerText = "başardık mı"

document.getElementsByTagName("p")[2].style.color = "red"

document.querySelector("img").src = "https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_640.jpg"

//! html e öğe ekleme ve silme

const liste = document.querySelector("ul")

console.log(liste)
// oluşturdum
const listItem  = document.createElement("li")

listItem.innerHTML = "ben bir liste elemanıyım"

console.log(listItem)
// ekledim
liste.appendChild(listItem)

console.log(liste)
// sildim
liste.removeChild(listItem)

console.log(liste)

// *********************************
console.clear()
console.log(window.document)
console.log(document.URL)
console.log(document.location.host)
