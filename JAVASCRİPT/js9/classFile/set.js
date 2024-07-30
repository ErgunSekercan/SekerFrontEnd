//! set ler benzersiz elemanlara sahip array lerdir

const fruit = ["elma", "armut", "erik", "Elma", "elma" ,"vişne"]

console.log(fruit)

const meyve = new Set(fruit)

console.log(meyve)

console.log(meyve.size)



//! add eleman  ekleme

meyve.add("elma")
meyve.add("kiwi")

console.log(
meyve
)

//! delete silmek için

let sil = meyve.delete("muz")

let silindi = meyve.delete("erik")
console.log(
    meyve
    )
console.log(sil)
    console.log(silindi)


//! has()  için de var mı kontrolu 

let hass = meyve.has("elma")

console.log(hass)


//! values  setIterator döndürür. for Each ile her elemana ulaşılabilir.

let deneme = meyve.values()

console.log(deneme)
let text = ""
console.log(text)

deneme.forEach(function(value){
    console.log(value)
    text += value + " "
})

console.log(text)

