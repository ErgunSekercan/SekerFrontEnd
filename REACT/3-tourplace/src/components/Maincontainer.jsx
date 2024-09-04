import React from 'react'
import {data} from "../helpers/data.js"

const Maincontainer = () => {

  console.log(data);

  return (
    <div className='card-container'>
      {/* {data.map((item, index) => <Card key={index}/>)} */}
      {data.map((item) => <Card veri = {item} key={item.id}/>)}
    </div>
  )
}

export default Maincontainer