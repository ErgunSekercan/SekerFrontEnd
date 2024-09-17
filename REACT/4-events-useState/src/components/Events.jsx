// hooklar func. componentlerde kullanılır. 
// çeşitli hooklar var. ders planında adlarını yazmıştık. 

import { useState } from "react"

// hook kuralları
// use ön eki ile başlar
// import edilmeleri gerekir
// hooklar üst seviyede kullanılmalı(örneğin component js alanı). normal fonksiyon içinde kullanılmıyor 


const Events = () => {
    // useState import edilerek kullanıma sunuluyor

    const [info, setInfo] = useState("KAYSERİ")

    const [counter, setCounter] = useState(5)

    const [person , setPerson] = useState({
        name : "ahmet",
        email : "a@a",
        age : 30
    })


    // useStateSnippet ile oluşan
    // const [first, setfirst] = useState(second)

    //  let info = "KAYSERİ"

    const handleClick = () => {
        console.log(" button tıklandı")
        alert("click alert")
    }
// buradaki ekrana basma (info verisini güncelleme) sorununu çözmek için birazdan useState hook unu kullanacağız
    const handleChange = (e) => {
        console.log(info)
    //    info =  "HOOKS" 
       setInfo("HOOKS")
       console.log(info)
       console.log(e.target)
    }

    const handleClear = (text) =>  {
        alert(text)
    }

    const handlePersonChange = () => {
        // setPerson(person.name = "veli")
        // setPerson({name : "veli"})
        // spread {...} işlemi objeyi açar içinden herhangibirşeyin değişmesine müsade eder
        setPerson({...person, name: "cevdet"})
    }


    const increment = () => {setCounter( counter + 1 ) }
    const decrement = () => {setCounter( counter - 1 )}



  return (
    <div className='container text-center '>

    {/* <button onClick={() => console.log("tıklandı")} className='btn btn-warning m-4'>Click</button> */}

    <h1>{info}</h1>

    <button onClick={handleClick} className='btn btn-warning m-4'>Click</button>

    <button onClick={(e) => handleChange(e)} className='btn btn-success m-4'>Change</button>

    <button onClick={() => handleClear("clear tıklandı")} className='btn btn-info m-4'>Clear</button>

    <div>
        <button onClick={increment} className='btn btn-danger m-4'>arttır</button>
        <button onClick={decrement} className='btn btn-outline-danger'>Azalt</button>
    </div>

    <p>counter = {counter} </p>

    <div className='bg-primary text-white'>
        <p>{person.name}</p>
        <p>{person.email}</p>
        <p>{person.age}</p>
        <button onClick={handlePersonChange}>değiştir</button>
    </div>



    </div>
  )
}

export default Events