import React from 'react'
import data from '../utils/data.js'


const Courses = () => {

console.log(data);

     
  return (
    <div className='coursesMain' >
        <h1 className='coursesTitle'>Courses Us</h1>
        <div className="card p-2">
            <img src="" alt="" />
            <h3>Title</h3>
            <p>Parag</p>
            <button type='button' className='btn btn-danger' >Detail</button>
        </div>
    </div>
  )
}

export default Courses