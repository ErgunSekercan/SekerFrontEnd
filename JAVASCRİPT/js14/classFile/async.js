//! callback

console.log("merhaba dünya")


// setTimeout(() => {console.log("I love Javascript")}, 3000)

const yazı = () => {
    console.log("yazı yazmak güzeldir")
}

const yazmak = () => {
    console.log("yazmak nasıl hissettirir")
    yazı()
}




yazmak()

console.log("birşey")

//! async await

// kütüphane uygulamasında örnekleri var.

const fetchData = async () => {
let url = null
    await fetch("url")

}

//! setTimeout

//  3000 ms cinsindendir. 3 sn karşılık gelir. verilen süre bitiminde fonksiyon çalışır.

const jsl = () => {console.log("I love Javascript")}

setTimeout(jsl, 5000)

setTimeout(() => {console.log("I love Javascript")}, 3000)




//! setInterval 
console.log(new Date())


const clock = () => {
    let d = new Date()
    let x = document.querySelector(".title")
     x.innerHTML= d.toLocaleTimeString()
}

clock()
// setInterval(clock, 1000)


const clockInterval = setInterval(clock, 1000)

const durdur = () => {
    clearInterval (clockInterval)
} 

// clearInterval (clockInterval)

//! promise

let myPromise = new Promise(function(myResolve, myReject){
    // myResolve() // başarılı olduğunda
    myReject() // hata olduğunda
})

console.log(myPromise)

// pending => askıda olma durumu
// fulfilled => başarı ile gerçekleşmesi
// rejected => başarısız olma durumu