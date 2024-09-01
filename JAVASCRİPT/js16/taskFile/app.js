//? ekranlar

let prevDisp = document.querySelector(".previous-display")
let currDisp = document.querySelector(".current-display")

//? button container

const btnContainer = document.querySelector(".buttons-container")

//? ara değer değişkenleri

let currOperand = ""
let previousOperand = ""
let operation =""



// console.log(Number(currOperand))
// console.log(Boolean(operation))

//? butonların tıklanma olaylarını capturing ile uygulayalım

btnContainer.addEventListener("click" , (e) => {
    

    // console.log(e.target)

    if(e.target.classList.contains("num")){
        // console.log(e.target.innerHTML)
        // console.log(e.target.innerText)
        // console.log(e.target.textContent)
        appendNumber(e.target.textContent)
        updateDisplay()
    }
    if(e.target.classList.contains("operator")){
        chooseOperator(e.target.textContent)
        updateDisplay()
        // console.log("operator")
    }
    if(e.target.classList.contains("ac")){
        // console.log("ac")
        currOperand = ""
        previousOperand = ""
        operation =""
        updateDisplay()

    }
    if(e.target.classList.contains("equal")){
        console.log("equal")
    }
    if(e.target.classList.contains("percent")){
        console.log("percent")
    }
    if(e.target.classList.contains("pm")){
        console.log("pm")
    }

})


//? hangi sayı geliyor

const appendNumber = (sayı) => {
    // console.log("append" , sayı )
    currOperand += sayı
    // console.log(typeof currOperand)
}



//? ekrana basma işlemleri

const updateDisplay = () => {
    // console.log("çalıştı")
  
    // console.log("disp" ,currOperand)
    // console.log(typeof currOperand)
// console.log(currOperand, previousOperand, operation )

    if(currOperand !== ""){
        currOperand = Number(currOperand)

    }

    console.log(currOperand)
    console.log(operation)

    if(operation){
        
        prevDisp.innerText =  `${previousOperand} ${operation}`
    }
    
    // console.log(typeof currOperand)
    currDisp.innerText = currOperand
}

//? hangi operator

const chooseOperator = (op) => {

if(previousOperand){
    calculate()
}

    console.log(operation)
    operation = op
    previousOperand = currOperand
    currOperand =""
    console.log(operation)
}


// ? hesaplama işlemleri

const calculate = () => {
let calculation = 0

const prev = Number(previousOperand)
const current = Number(currOperand)

switch(operation){
    case "+" : 
    calculation = prev + current
    break;
    case "-" : 
    calculation = prev - current
    break;
    case "x" : 
    calculation = prev * current
    break;
    case "÷" : 
    calculation = prev / current
    break;
    default:
    return



}

currOperand = calculation






}