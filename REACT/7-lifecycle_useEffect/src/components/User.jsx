import  { useEffect, useState } from 'react'

const User = () => {

    const [user, setUser] = useState({
        name : {
           title :" mr" ,
           last : "sekercan",
           first : "ergun"
        }
    })


    const getUser = () => {

        
        const url = "https://randomuser.me/api/"

        fetch(url).then((res) => res.json() ).then((data) => setUser(data.results[0]))
    }

   


// getUser()
    console.log(user)

    setTimeout(function() {
       
        console.log("Merhaba");
      }, 3000);


    useEffect(() => {
        
        console.log("ilk render mounting")
        getUser()
    
    //   return () => {
       
    //   }
    }, [])
    


console.log("render")

  return (
    <div>
        <h1>{user?.name?.first} {user?.name?.last}</h1>
        <img src={user?.picture?.medium} alt="" width={300} />
        <h4>{user?.email}</h4>
        <h5>{user?.phone}</h5>

        <button onClick={getUser}>get user</button>


       



    </div>
  )
}

export default User