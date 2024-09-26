
import courses from "../utils/data.js"

const Courses = () => {
  return (
    <article className='container'>
    <h1 className='text-center'>Courses Us</h1>
    <div className='row text-center d-flex justify-content-center'>
    {courses.map((course) => {
      console.log(course)
        return (
            <div className='col-sm-12 col-md-6  col-lg-4' key ={course.id}>
            <div className='card'>
            <img src={course.img} alt="" className='card-img-top fotog'  />
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <p className="card-text">{course.text}</p>
              <button className="btn btn-danger">Detail</button>
            </div>

            </div>
       
        </div>
        )
    })}
        
     

</div>
    </article>
  )
}

export default Courses