import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [formValues, setFormValues] = useState({
        username : "",
        email : "",
        password : ""    
    
      })

    const {username,email,password} = formValues  

    const handleFormValues = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.id);
        setFormValues({...formValues , [e.target.id] : e.target.value })        
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`username: ${username}
               email:${email}
               password: ${password} `)
    }  


  return (
    <div className='container bg-primary-subtle'>
     <form style={{margin:"5rem"}} onSubmit={handleSubmit}>
      <div className="mb-3">
       <label htmlFor="username" className="form-label mt-3">
        UserName <span className='text-danger'>{username} </span> 
       </label>
       <input type="text" 
              className="form-control" 
              id="username" 
              placeholder='Kullanıcı Adınızı Giriniz'
              value={username}
              onChange={handleFormValues}
            />       
      </div>
      <div class="mb-3">
       <label htmlFor="email" className="form-label">
        Email <span className="text-danger">{email}</span>
       </label>
       <input type="email" 
              className="form-control" 
              id="email" 
              placeholder='Mailinizi Giriniz'
              value={email}
              onChange={handleFormValues}
            /> 
      </div>
      <div class="mb-3 ">
       <label className="form-label" htmlFor="password">
        Password</label> <span className="text-danger">{password}</span>
       <input type="password" 
              className="form-control" 
              id="password"
              placeholder="Password'ünüzü Giriniz"             
              value={password}
              onChange={handleFormValues}
            />
       
      </div>
      <button type="submit" className="btn btn-primary mb-3">Gönder</button>
     </form>
    </div>
  )
}

export default Form