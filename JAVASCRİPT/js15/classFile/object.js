// objeler birkaç yöntemle oluşturulabilir


//? object literal

let person = {
    firstName : "Gokhan",
    lastName : "Yılmaz",
    age: 50,
    tools : {
        js : "react", 
        nodejs : "express"
    }
  }

  console.log(person.firstName)
  console.log(person["firstName"])

  console.log(person.tools.js)


//? boş objeye eleman atamak

const person1 = {}


person1.firstName = "semih"

console.log(person1)

//? new keyword u kullanarak

const person2 = new Object()

console.log(person2)

person2.age = 45
person2.maydonoz = "tabiki"

console.log(person2)

// değere göre değil referansa göre adreslenirler
console.log(person)

const x = person

console.log("x i yazdırıyorum", x)


// ! adding new properties
x.age = 43

// ! delete

delete x.firstName

document.querySelector(".title").innerHTML = person.lastName

let text = ""

for (let z in person){
    text += person[z] + " "
}

console.log(text)

document.querySelector(".title").innerHTML = text


 




