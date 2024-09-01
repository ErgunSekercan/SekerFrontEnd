

function isim(){
null
}

// adım("mehmet" , "ali")

// function adım(firstName, lastName) {
//     console.log(firstName, lastName)
//     }

const ad = function(){
null
}

// arrow function

// çağıldığı yerden önce tanımlanmış olmalıdır.
// hoisting yapmaz. 
// es6 ile beraber js eklendi
// daha kısa bir şekilde func. yazmamızı sağlar


const arrowFunc = () => {



}

// func lar çağrılmadan çalışmazlar.
// func lar parametreli veya parametresiz olabilir.
// sık tekrar edilecek yapıları tekrar yazmaya gerek kalmadan değişik paremetrelerle benzer işlemleri yapmaya olanak sağlar.



const greetings = (firstName, lastName="Şahin") => {
// console.log(firstName, lastName)
let info = `merhaba ${firstName} ${lastName}`
return info
}

greetings("kartal","ali")
let deneme = greetings("kartal","ali")
document.querySelector(".title").innerHTML = deneme
document.querySelector(".title").innerHTML = greetings("kartal","ali")
console.log(deneme)





