//! loops



//! for

// for(let i = 0; i <=5 ; i++ ){
// console.log("birşeyler")
// }

let b = "\n"

for(let i = 0; i <5 ; i++){

    for(let j = 0; j <10 ; j++){
            b += "* "
    }
    b += "\n"
}

console.log(b)

let cars = ["audi", "volvo", "bmw"]

let i = 0 ;
let len = cars.length ;
let text = ""

for(  ; i <len ;){
   text += cars[i] + " "
   i++
}

console.log(text)


//? for in 
// x cars daki indexleri temsil eder

for(let x in cars ){
    console.log(x)
   console.log(cars[x]) 
}

//? for of

// y cars daki her bir elemanı temsil eder

for(let y of cars){
    console.log(y)
}

//! while

let text1 = ""
let ii = 5

while(ii < 10){
    text1 += "number is " + ii + ", "
 ii++   
}

console.log(text1)


//? do while 

let text2 = ""
let iii = 5

do{
    text2 += "do while number is " + iii + ", "
    iii++ 
}while(iii < 10)

console.log(text2)
