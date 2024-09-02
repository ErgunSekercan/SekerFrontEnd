import React from 'react'

const Person = ({veri}) => {

    console.log("persondaki veri" , veri);

  return (
    <div>

{veri.map((p) => (
        <div>
            <h1>{p.name}</h1>
            <img src="https://img.freepik.com/premium-vector/man-male-young-person-icon_24877-30222.jpg" alt="" style = {{width : "250px"}} />
            <p>555 55 55</p>
        </div>
    ))}

    </div>
  )
}
export default Person
