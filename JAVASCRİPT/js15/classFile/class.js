//! class

// obje değildir. obje oluşturmak için bir şablondur.

class Car{
    constructor(name, year) {
        this.ad = name;
        this.yıl = year
    }
}

const myCar = new Car("Ford", 2014)


console.log(myCar)

// const nesne = {name : "ali" , memleket : "yozgat"}

// console.log(nesne)

class Oto{
    constructor(name, year) {
        this.ad = name;
        this.yıl = year
    }

    age() {
        const date = new Date()
        return date.getFullYear() - this.yıl
    }
}

const yourCar = new Oto ("honda", 2010)

console.log(yourCar)
console.log(yourCar.age())
