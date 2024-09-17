import { useState, useEffect } from 'react'

const UseEffectHook = () => {
const [count, setCount] = useState(0)

const handleClick = () => {
    setCount(count + 1)
    
}

//?========================================================
//?                  USEEFFECT HOOK
//?========================================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

// useEffect(() => {
// //   ilk renderda çaılışır
//   return () => {
//     // component ölünce
//   }
// }, [update])








//? api den veri alıyorsak istek useEffect in için d atılmalı

const fetchData = ( ) => {
    console.log("data fetched")
}

useEffect(() => {
    fetchData()
    console.log("update işlemi çalıştı") 
}, [count])

console.log("render çalıştı")
  return (
    <div>
<h1>Use effect method</h1>
<h3>Count : {count}</h3>
<button onClick={handleClick}>Tıkla</button>


    </div>
  )
}

export default UseEffectHook