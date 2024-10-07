import React from 'react'
import photo from '../assets/react copy.svg'

const Header = () => {
  return (
    <div className='photo-container' style={{margin:50}}>
        <img className='photo' src = {photo} alt="" style={{height:150}}/>
    </div>
  )
}

export default Header