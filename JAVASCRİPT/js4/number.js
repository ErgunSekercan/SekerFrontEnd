//! numbers

//? number lar 15 haneye kadar sağlıklı sonuç verirler 15 haneden sonra big Int kullannılmalıdır.

console.log(99999999999999999)
console.log(99999999999999999n) // bigInt

console.log(10 / "ahmet") // NaN 

console.log(10 / "5")

console.log(typeof parseInt("5.13"))
console.log( parseInt("5.13"))
console.log( parseFloat("5.13"))

console.log(parseInt("ahmet 20"))
console.log(parseInt("20 ahmet"))

console.clear()
//! number methods

//! Number
console.log(Number(true))
console.log(Number(false))
console.log(Number("5.13"))
console.log(Number("ali"))


//! toFixed()
let num = 4.4456546
let nu1 = 43.454556

console.log(num.toFixed(2)) // yuvarlama yaptı.noktadan sonra 2 basamağa düşürdü.

//! toPrecision() tam sayı kısmı dahil kaç basamak olacak

console.log(num.toPrecision(4))
console.log(nu1.toPrecision(4))

console.log(num)

//! toExponential

console.log(num.toExponential(3))

//! üstsel gösterim

let x = 123e-5

console.log(x)