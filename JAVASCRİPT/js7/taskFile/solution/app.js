let random = Math.floor(Math.random() * 100);
// console.log(random);

let input = document.querySelector(".myNumber")
let check = document.querySelector(".check")
let restart = document.querySelector(".restart")
let enterNumber = document.querySelector(".enter-number")
let attemptsSpan = document.querySelector(".attempts-span")
let chancesSpan = document.querySelector(".chances-span")
let firstNumber = document.querySelector(".first")
let lastNumber = document.querySelector(".last")

let clap = document.querySelector("#clapSound")

let chance = 7
let attempt = 0
console.log(random)
input.focus()

const guessGame = () => {
    // console.log("tıklandı");

if(chance > 0){
    if(input.value > 100 || input.value < 1){
        enterNumber.innerHTML = "Please enter a valid number!"
        enterNumber.style.color = "red" 
    }else{
        if(input.value > random){
            enterNumber.innerHTML = "Lower number please"
            chance--
            attempt++
            lastNumber.innerHTML = input.value
            lastNumber.style.color = "red"
        }else if(input.value < random){
            enterNumber.innerHTML = "Greater number please"
            chance--
            attempt++
            firstNumber.innerHTML = input.value
            firstNumber.style.color = "red"
        }else if(input.value == random){
            enterNumber.innerHTML = "Congratulations! You guessed it right."
            chance--
            attempt++
            input.style.display = "none"
            check.style.display = "none"
            enterNumber.style.color = "red"
            enterNumber.style.fontSize = "40px"
            clap.play()
        }
    }

}else{
    enterNumber.innerHTML = "Game Over"
    input.style.display = "none"
    check.style.display = "none"
    enterNumber.style.color = "red"
    enterNumber.style.fontSize = "40px"
    chancesSpan.style.display = "none"
    attemptsSpan.style.display = "none"

}
    chancesSpan.innerHTML = chance
    attemptsSpan.innerHTML = attempt
    input.value = ""
    input.focus()

}
    check.addEventListener("click", guessGame)

    input.addEventListener("keydown", (e) =>{
        if(e.code === "Enter"){
            guessGame()
        }
    })

    restart.addEventListener("click", () => {
        window.location.reload()
    })