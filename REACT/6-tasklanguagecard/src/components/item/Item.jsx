import React, { useState } from 'react'
import "./item.css"

const Item = ({cardData}) => {
  const {name, img, options} = cardData

  const [flag, setFlag] = useState(true)

  const handleClick = () => {
    setFlag(!flag)
  }

  return (
    <div className='card' onClick={handleClick} >
    {flag ? (<div>
        <img className='card-logo' src={img} alt="" />
        <h3 className='card-title'>{name}</h3>
    </div>) : (<ul className='card-list'>
        {options.map((element, index) => {
          return <li key={index}>{element}</li>
        })}
    </ul>) }
    

  



    </div>
  )
}

export default Item