import React, { useState } from 'react'

const User = () => {

    const [user, setUser] = useState({
        name : {
            title :" mr" ,
            last : "sekercan",
            first : "ergun"
        }
    })

    const getUser = () =>{

        const url = "https://randomuser.me/api/"

        fetch(url).then((res) => res.json()).then((data) => setUser(data.results[0]))
    }

      

  return (

    <div>
        <h1>{user.name.first} {user.name.last} </h1>
        <img src={user.picture.medium} alt="" width={200}/>
        <h4>{user.email}</h4>
        <h5> {user.phone} </h5>
        <button onClick={getUser}>Get User</button>
    </div>    
   
  )
}

export default User