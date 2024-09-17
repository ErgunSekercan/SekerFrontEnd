import React from 'react'
import Logo from "../assets/react.svg"

const Header = () => {
  return (
    <div className='logo-container' style={{margin:"40px"}}>
        <img style={{height:"150px"}} src={Logo} alt="react-logo"  className='react-logo'/>
    </div>
  )
}

export default Header