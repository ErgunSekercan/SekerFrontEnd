

const form = document.querySelector("form")
const input = document.querySelector("form input")
const msg = document.querySelector("p.msg")
const list = document.querySelector(".list")

// localStorage.setItem("apiKey" , EncryptStringAES("338a7a38f42c3b21a1f65f4f6ccf6c64"))


form.addEventListener("submit", (e) => {
    e.preventDefault() // varsayılan davranışı engeller
    getWeatherDataFromApi() // çağırdığımız fonksiyon


})

const getWeatherDataFromApi = async () => {

    // alert("tıklandı")

    let tokenKey = DecryptStringAES(localStorage.getItem("apiKey"))
    let unitType = "metric"
    let lang = "tr"

    let inputVal = input.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${tokenKey}&units=${unitType}&lang=${lang}`

    // console.log(tokenKey)

   try {
    // const response = await fetch(url).then(response => response.json()) 
    const response = await axios(url)
    console.log(response)

    console.log(response.data)

    //dest.
    const {name, sys, main, weather} = response.data
    // const {country} = sys

    const iconUrl = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`


// forEach => array, nodelist
// map, filter, reduce => array

    const cityListItems = list.querySelectorAll(".city")

    console.log(cityListItems)
// array a çevirdik
    const cityListItemsArray = Array.from(cityListItems)

    console.log(cityListItemsArray)

    if(cityListItemsArray.length > 0){
        const filteredArray = cityListItemsArray.filter(cityCard => cityCard.querySelector("span").innerText == name)
        console.log(filteredArray)
        if(filteredArray.length > 0){
            msg.innerText = `girdiğiniz ${name} ili zaten gösterilmektedir. ` 
            setTimeout(()=> {
                msg.innerText = ""
            }, 5000)
            form.reset()
            return
            
        }
    }





    const createdLi = document.createElement("li")
    createdLi.classList.add("city")

    createdLi.innerHTML = `
    <h2>
                <span>${name}</span>
                <sup>${sys.country}</sup>
                
            </h2>
            <div>
                ${Math.round(main.temp)} <sup>°C</sup>

            </div>

            <figure>
                <img src="${iconUrl}" alt="">
                <figcaption>${weather[0].description}</figcaption>
            </figure>
    
    `
    // append => sonrasına , prepend => öncesine ekler
    list.prepend(createdLi)




    
   } catch (error) {
    // console.log(error)
    msg.innerText = error
    setTimeout(()=> {
        msg.innerText = ""
    }, 5000)

   } 
   form.reset()





}


