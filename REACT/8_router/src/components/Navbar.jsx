import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar' >
      <ul className='container d-flex justify-content-around mt-4 '>
        <li>
          {/* <a href="">Home</a> */}
          {/* <Link to="/">Home</Link> */}
          <NavLink 
          to="/"
          className="active"
          style={({isActive}) => ({color : isActive && "red"}) } 
          >Home</NavLink>
        </li>
        <li>
          {/* <a href="">Home</a> */}
          {/* <Link to="/teachers">Teachers</Link> */}
          <NavLink 
          to="/teachers"
          style={({isActive}) => ({color : isActive && "red"}) } 
          >Teachers</NavLink>
        </li>
        <li>
         
          
          <NavLink 
          to="/paths"
          style={({isActive}) => ({color : isActive && "red"}) } 
          >Paths</NavLink>
        </li>
        <li>
          {/* <a href="">Home</a> */}
          {/* <Link to="/contact">Contact</Link> */}
          <NavLink 
          to="/contact"
          style={({isActive}) => ({color : isActive && "red"}) } 
          >Contact</NavLink>
        </li>
        
      </ul>


    </div>
  )
}

export default Navbar