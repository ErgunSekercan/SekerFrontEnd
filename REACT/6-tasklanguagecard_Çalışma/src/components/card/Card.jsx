import React from 'react'
import Item from '../item/Item'
import './card.css'
import { languages } from '../../helpers/data'

const Card = () => {
  return (
    <div className='cards-area-container'>
        <div className='strap'></div>
       <div> 
        <h1 className='cards-area-title'>Languages</h1>
        <div className='card-container'>
            {languages.map((veri, index) => {

                return <Item cardData = {veri} key={index}  />

            })}
         </div>
        </div>
        
    </div>
  )
}

export default Card