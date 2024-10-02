import React, { useState } from 'react'

const Events = () => {

    const [info, setInfo] = useState("Kayseri")

    const [counter, setCounter] = useState(5)

    const [person, setPerson] = useState({
        name:"Ahmet",
        email:"a@a",
        age:30
    })
    const {name,email,age} = person

    const handleClick = (e) => {
        alert("Click'e tıklandı.")
    }

    const handleChange = () => {
        setInfo("Ankara")
    }

    const handleClear = (text) => {
        alert("Temizlendi")
    }

    const handlePersonChange = () => {
        setPerson({...person, name:"Mehmet", email:"b@b", age:45})
    }

    const increment = () => {setCounter(counter + 1)}
    const decrement = () => {setCounter(counter - 1)}

  return (
    <div className='main text-center mt-5 '>
        <h1 className='title'>{info}</h1>
        <div className='upper-btns mt-5 d-flex gap-5 justify-content-center'>
            <button onClick={handleClick} className='click btn btn-warning'>Click</button>
            <button onClick={handleChange} className='click btn btn-success'>Change</button>
            <button onClick={handleClear} className='click btn btn-primary'>Clear</button>
        </div>
        <div className='inc-dec mt-5 d-flex gap-3 justify-content-center'>
            <button onClick={increment} className='inc btn btn-danger'>Arttır</button>
            <button onClick={decrement} className='dec btn btn-danger'>Azalt</button>
        </div>
        <h6 className='count mt-4'>Counter = {counter}</h6>
        <div className='person bg-primary text-light mt-5'>
            <h6 className='name' >{name}</h6>
            <h6 className='mail'>{email}</h6>
            <h6 className='age'>{age}</h6>
            <button onClick={handlePersonChange} className='deg btn btn-light mb-1'>Değiştir </button>
        </div>
    </div>
  )
}

export default Events