//! try, catch, finally, throw

// try {
//    // başarılı olma durumunda çalışacak kodlar tanımlanır 
// } catch (error) {
// //    hata olması durumunda çalışacak kodlar tanımlar 
// }finally{
// //    her durumda  çalışacak kodlar tanımlar
// }

function myFunction() {

const message = document.querySelector(".message")
message.innerHTML = ""

let inputText = document.querySelector(".input").value


try {
debugger
 console.log(typeof inputText)
 console.log("başarılı")
  if(inputText.trim() == "")  throw "empty"
  if(isNaN(inputText)) throw "not a number"

  inputText = Number(inputText)
  console.log(typeof inputText)
debugger
  if(inputText > 10 ) throw "too high"
  if(inputText < 5 ) throw "too low"



} catch (error) {
// console.log(error)
message.innerHTML = "input is " + error


    
}finally{

    inputText = ""

}







}

document.querySelector(".btn").addEventListener("click" , myFunction )