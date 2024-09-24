import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Teachers = () => {

  const [teachers, setTeachers ] = useState([])
  const navigate = useNavigate()


const getTeachers = () => {
  const url = "https://reqres.in/api/users"
  fetch(url).then((res) => res.json()).then((data) => setTeachers(data.data))

 
}
console.log(teachers)


useEffect(() => {
 getTeachers()

 
}, [])





  return (
    <div className="container">
    <h1 className="text-center text-uppercase">Teachers List</h1>

    <div className="row">
    {teachers.map((teacher) => {
      return(
        <div className="col-sm-12 col-md-6 col-lg-4" key={teacher.id} onClick= {( ) => navigate(`/teachers/${teacher.id}`)}>
    
    <img src={teacher.avatar} alt="" width={200} />

    <h6 >{teacher.first_name} {teacher.last_name}</h6>


    </div>
      )
    })}
    </div>

    

    </div>



    
  )
}

export default Teachers