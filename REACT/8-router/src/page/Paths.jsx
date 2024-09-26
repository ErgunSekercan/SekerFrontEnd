import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Paths = () => {
  return (
    <div>
    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, adipisci, soluta ipsam voluptas accusamus sit velit hic suscipit eius cumque quod architecto quia quo itaque deleniti odit veritatis totam?</p>


    <div>
        <Link className='btn btn-warning w-50' to="fullstack">
            Fullstack
        </Link>
        <Link className='btn btn-danger w-50' to="">
            Aws
        </Link>
    </div>
        <Outlet/>
    </div>
  )
}

export default Paths