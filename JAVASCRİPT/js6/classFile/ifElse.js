// let a = 41

// console.log(a)

// if(a > 17){
//     console.log("a 17 den büyükmüş")
//     if(a < 40){
//         console.log("a 40 dan küçükmüş")

//     }
// }

// let yas = prompt("yasınızı yazınız")

// console.log(yas)

// if(yas < 18){
// document.querySelector("#title").innerHTML = "merhaba genç insan"
// }
// else if(yas > 18 && yas < 40){
// document.querySelector("#title").innerHTML = "merhaba bu yaşların kıymetini bil"
// }
// else{
//     document.querySelector("#title").innerHTML = "merhaba tecrübeli  insan" 
// }

//! ternary (şart) ? true ise : false ise

// let mekan = (yas > 18 ) ? "mekana girebilir" : "mekana giremez"

// console.log(mekan)


//! nullish (??)

let deneme = null

let text = undefined

let result = deneme ?? text

console.log(result)

//! &&

console.log(document.querySelector("#title").innerHTML)
yas = 18
yas > 17 && (document.querySelector("#title").innerHTML = "merhaba")

// document.getElementById("title")

console.log(yas > 17 && yas === 18)

console.log(document.querySelector(".inputClass").value)

let inp = document.querySelector(".inputClass")

let btn = document.querySelector("button")

console.log(btn)

let sayı = ""
console.log(sayı)

btn.addEventListener("click", () => {
console.log("inputun değeri", inp.value)
sayı = inp.value


if(sayı > 40){
    document.querySelector("#title").innerHTML = inp.value   
}
document.querySelector(".inputClass").value = ""
console.log("değişken", sayı)
})


