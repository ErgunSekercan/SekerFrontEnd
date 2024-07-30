//!   " " , ' ',  ` `

let text = 'antep\'in hamamları'
let text1 = "antep'in \nhamamları"
console.log(text1)
let age = 45

let person = "benim personelim " + age +" yaşında"
let person1 = `benim personelim ${age} yaşında`
console.log(person);
console.log(person1);
let temp = ` <h1>merhaba ${age}</h1>
             <p>Lorem ipsum dolor sit amet.</p>
             <button>
               tıkla
             </button> `
console.log(temp);       

//! kaçış karakterleri 
// \'   quote                   => alıntı
// \b	Backspace               => geri al
// \f	Form Feed               => form besleme
// \n	New Line                => yeni satır
// \r	Carriage Return         => satır başı 
// \t	Horizontal Tabulator    => yatay sekme
// \v	Vertical Tabulator      => dikey sekme
document.getElementById("container").innerHTML = temp

console.log(person)
console.log(person1)

//! string method

let ankara = "bu yıl Ankara'ya kış geç geldi ama tam geldi"

//!length
console.log(ankara.length)

//!slice(start, end)

console.log(ankara.slice(6, 12))
console.log(ankara.slice(-5, -2))

//!substring(start,end) 0 dan küçük değer alamaz

//! substr (start, length) 

console.log(ankara.substr(6, 6))

//! replace()

console.log(ankara.replace("kış", "yaz"))
console.log(ankara.replace("geldi", "gitti"))
console.log(ankara.replaceAll("geldi", "gitti"))

//! toUpperCase(), toLowerCase()

console.log(ankara.toLowerCase())
console.log(ankara.toUpperCase())

console.log(ankara)

let kelime = "kahraman"

let ilkHarf = `${kelime[0].toUpperCase()}${kelime.slice(1).toLowerCase()}`

console.log(ilkHarf)

//! concat (arada kullanılacak işaret, eklenecek ifade)

let text2 = "hello"

let birleşik = ankara + " " + text2
console.log(birleşik)

let birleşik1 = ankara.concat("-", text2)
console.log(birleşik1)
console.clear()

//!trim()

let selam = "           hello!    "

console.log(selam)

console.log(selam.trim())
console.log(selam.trimStart())
console.log(selam.trimEnd())

//! padStart, padEnd(toplam kaç karakter, dolgu elemanı)

let phoneNumber = "05550884150"

let kırp = phoneNumber.slice(-2)

console.log(kırp)

let dolgulu = kırp.padStart(11 , "X")
let dolgulu1 = kırp.padEnd(11 , "X")


console.log(dolgulu)
console.log(dolgulu1)

console.log(phoneNumber.slice(-2).padStart(11 , "X"))

//! chartAt(position)

let tex = "hello world"

let x = tex.charAt(1)

console.log(typeof x)
console.log(x);

//! chartCodeAt(position)   ascii code döner

let tex1 = "hello world"

let x1 = tex1.charCodeAt(1)

console.log(typeof x1)
console.log(x1)


console.clear()

//! string to array  => split()

let hayvanlar = "horoz, kedi, köpek, tavşan"

console.log(hayvanlar.split(", "))

// ********************************

let str = "merhaba dünya benim dünya kadar fikrim var dünya."

//! indexOf("aranacak değer", başlangıç pozisyonu) , lastIndexOf("aranacak değer", bitiş pozisyonu)

console.log(str.lastIndexOf("dünya" ,8 ))
console.log(str[str.indexOf("dünya" ,10)].toUpperCase())

//! search ("aranacak kelime")

console.log(str.search("benim"))
console.log(str.indexOf("benim"))

let email = "gknsvs@gmail.com"

console.log(email.slice(email.search("@") + 1 ))

//! match()

console.log(str.match("dünya"))

// //! matchAll()

let matches = str.matchAll("dünya")

console.log(matches)

for (const x of matches){
    console.log(x)
}

//? boolean dönenler

//! includes("araanacak kelime" , başlangıç değeri)

console.log(str.includes("dünya"))

//! startsWith("aranacak kelime" , başlangıç değeri)

console.log(str.startsWith("m"))

//! endsWith("aranacak kelime" , başlangıç değeri)

console.log(str.endsWith("."))

