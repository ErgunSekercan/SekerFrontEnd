const x = ["metin", "ali" , "feyyaz", 45 , true]

console.log(x)

const student = []

student[1] = "yakup"

console.log(student)

x[3] = 38

console.log(x)

const y = new Array("ali", "veli" , "deli")

console.log(y)

console.log(y[1])

console.log( typeof y)


console.log(y.length)

//! push sona eleman ekler 

y.push("elma")

console.log(y)

//! unshift başa eleman ekler 
y.unshift("kiraz")

console.log(y)

//! pop sondan eleman siler

y.pop()

console.log(y)

//! shift baştan eleman siler

y.shift()

console.log(y)

//! splice 

// y.splice(2,0,"erik", "elma")

y.splice(2,1)

console.log(y)

//! concat()

const z = y.concat(x)

console.log(z)

//! delete

delete z[2]

console.log(z)

//! join

let d = y.join(" ")

console.log( typeof d)

console.log(d)

console.clear()

//! sort 

const points = [1, 15, 100 , 45, 32, 37, 4, 42]

console.log(z.sort())

console.log(points.sort());

console.log(points.sort(function(a,b){return a - b}))

//! slice

let result = points.slice(3,5)

console.log(result)

console.clear()

//? iteration methods

const cars = ["mazda", "honda" , "subaru", "suzuki", "toyota"]

console.log(cars[2])
console.log(cars[3])

//! forEach() array in her elemanına verilen fonksiyonu uygular

let araba = []


console.log(araba)

function addFunction(value, index , array ){
 araba +=index + "." + value +" "  
}

cars.forEach(addFunction)

console.log(araba)


let carr = ""

let values = [10,20,30,40,50]

function myFunction(value, index , array){
    carr += "değer:"  + value + ", " + "index:" +  index + ", " + "array:" + [array] + "\n"
}

cars.forEach(myFunction)

console.log(carr)

//! map sadece arraylerde kullanılır

cars.map(addFunction)

console.log(araba)

//! filter  yeni bir filtrelenmiş  array döndürür

const numbers = [12, 54, 32, 6, 19]

const over18 = numbers.filter((value, index, array) => {
    return value > 18
})


console.log(over18)

//! reduce() arrayi aldı içindeki değerleri toplayarak tek sonuca düşürdü
//! reduceRight() sağdan başlayıp sola doğru işlem yapar
let sum = numbers.reduce(reduceFunction,100)

function reduceFunction(total, value, index, array) {
    return total + value
}

console.log(sum)


// // ***************************************

// //! every ()yöntemi, tüm dizi değerlerinin bir testi geçip geçmediğini kontrol eder.
// const everyFunction = (value, index, array) => {
//     return value > 19
// }
// const over19 = numbers.every(everyFunction)

// const yazsın = (value, index, array) => {
// console.log(value, index, array)
// }

// numbers.map(yazsın)

// console.log(over19)

// //! some ()

// const someFunction = (value) => {
//     return value > 17
// }
// const over17 = numbers.some(someFunction)



// console.log(over17)


// //! indexOf(item, start)
// //! lastIndexOf () sondan başa doğru tarar.. Array.lastIndexOf(), Array.indexOf() ile aynıdır, ancak belirtilen öğenin son geçtiği konumu döndürür.
// const fruits = ["elma", "armut" , "erik", "elma", "şeftali"]

// // let position = fruits.indexOf("elma")
// let position = fruits.lastIndexOf("elma")

// console.log(position)

// //!find ()

// let firstEle = numbers.find(findFunction)

// function findFunction(value, index, array){
// return value > 19
// }

// console.log(firstEle)

// //! findIndex()

// let firstElem = numbers.findIndex(findIndexFunction)

// function findIndexFunction(value, index, array){
// return value > 19
// }

// console.log(firstElem)
// console.log(numbers[firstElem])

// //! includes()

// let g = fruits.includes("erik")

// console.log(g)

// const fruits1 = ["elma", "armut" ,[ "erik", "elma"], "şeftali"]


// //! flat ()
// const fr  = fruits1.flat()

// console.log(fr)