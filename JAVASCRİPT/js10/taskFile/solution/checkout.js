window.addEventListener("load", () => {
    calculateCartTotal() 
})






let productsDiv = document.querySelector(".products")

productsDiv.addEventListener("click", (e) => {
    // console.log(e.target)
// console.log(e.target.classList.contains("plus"))
// console.log(e.target.className == "plus")
    //! plus
    // if(e.target.className == "plus") 
    if(e.target.classList.contains("plus")){
        e.target.previousElementSibling.innerText++
        calculateProductTotal(e.target.parentElement.parentElement)
        }

        //! minus
    if(e.target.classList.contains("minus")){
        if(e.target.nextElementSibling.innerText > 0 ){
            e.target.nextElementSibling.innerText--
            calculateProductTotal(e.target.closest(".product-info"))
        }
           
            } 
            
    //! remove

    if(e.target.className == "remove-product") {
        // console.log("tıklandı")
        if(confirm("ürün kaldırılacak onaylıyormusunuz")){
            e.target.parentElement.parentElement.parentElement.remove()
            // e.target.closest(".product").remove()     --kısa yol ilk bulduğu atayı seçer
            calculateCartTotal()
        }
       

    }    
}) 

// arrow func. da tek parametre varsa parantez kullanılmayabilir.( productInfoDiv)
const calculateProductTotal = productInfoDiv => {

    // console.log(productInfoDiv)

    let productQuantity = productInfoDiv.querySelector("#product-quantity").innerText
    // console.log( productQuantity)

    let productPrice = productInfoDiv.querySelector("strong").innerText
    // console.log( productPrice)

    let productTotal = productInfoDiv.querySelector(".product-line-price")
    productTotal.innerText = (productQuantity * productPrice).toFixed(2)

    calculateCartTotal()

}

const calculateCartTotal = () => {
  let productTotalDivs =  document.querySelectorAll(".product-line-price")
//   console.log("çalıştı")
  
  console.log(productTotalDivs)

  let subtotal = 0
  productTotalDivs.forEach((eachProductTotalDiv) => {
    subtotal += parseFloat(eachProductTotalDiv.innerText)

  })

//   console.log(subtotal)

let taxPrice = subtotal * 0.2
// console.log(taxPrice)

let shipping = (subtotal > 0 ? 15.00 : 0  )

let cartTotal = subtotal + taxPrice + shipping

console.log("cartTotal" , cartTotal)




document.querySelector("#cart-subtotal p:nth-child(2)").innerText = subtotal.toFixed(2)
document.querySelector("#cart-tax p:nth-child(2)").innerText = taxPrice.toFixed(2)
document.querySelector("#cart-shipping p:nth-child(2)").innerText = shipping.toFixed(2)
document.querySelector("#cart-total").lastElementChild.innerText = cartTotal.toFixed(2)


}