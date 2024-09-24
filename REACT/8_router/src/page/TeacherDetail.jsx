import { useEffect, useState } from "react"
import {useNavigate, useParams} from "react-router-dom"
import spinner from "../assets/image/Spinner-2.gif"
import NotFound from "./NotFound"
const TeacherDetail = () => {
    const [teacher, setTeacher ] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams() 
    console.log(id)
  
  const getTeacher = () => {
    console.log(loading)
    
    setLoading(true)
    console.log(loading)
    const url = `https://reqres.in/api/users/${id}`
    fetch(url).then((res) => res.json()).then((data) => {setTeacher(data.data), setLoading(false)}).catch(() => {setError(true), setLoading(false)})
   
  }
  console.log(teacher)
  
  
  useEffect(() => {
   getTeacher()
  
   
  }, [])




  return (
    <div className="d-flex justify-content-center align-items-center ">
 {error && (
        <div className="text-center mt-4">
          <NotFound/>
        </div>
 
 ) }



    {loading && (
       
        <div className="text-center mt-4">
            <img src={spinner} alt="" />
        </div>
      
    )}

    {(!loading && !error) && (
      <div className="text-center" key={teacher.id} >
    
    <img src={teacher.avatar} alt="" width={200} />

    <h6 >{teacher.first_name} {teacher.last_name}</h6>

    <h6>{teacher.email}</h6>

    <div className="d-flex">
      <button className="btn btn-info" onClick= {( ) => navigate("/")}>Go Home</button>
      <button className="btn btn-success"  onClick= {( ) => navigate(-1)}>Go Back </button>
 
</div>
    </div>
    )}
   




    </div>
  )
}

export default TeacherDetail