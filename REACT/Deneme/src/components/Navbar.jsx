import React from 'react'

const Navbar = () => {

  let menu = ('çorba', 'yemek',)
    
  return (
    <div className='navbarSection'>
        <img className='logo' src="../images/Kayseri-logo.jpg" alt="" />
        <ul className='navlist'>
            <li><a href="">Tarih</a></li>
            <li><a href="">Coğrafya</a></li>
            <li><a href="">Kültür</a></li>
            <li><a href="">İdari</a></li>
            <li><a href="">Ulaşım</a></li>
            <li><a href="">İletişim</a></li>
        </ul>
    </div>
  )
}

export default Navbar