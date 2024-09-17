import { useState } from "react";

const FormObject = () => {


  const [formValues, setFormValues] = useState({
    username : "",
    email : "",
    password : ""


  })

  const handleFormValues = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.id);
    setFormValues({...formValues , [e.target.id] : e.target.value })
    
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    const {username, email, password} = formValues
    alert(`username: ${username}
      email: ${email}
      password: ${password}`)
    

  } 

  return (
    <div>
      <form style={{ margin: "5rem" }} onSubmit = {hadleSubmit} >
        {/* form label da for yerine htmlFor kullanılır */}
        {/* form input için reactta kapanış tagından önce / vardır */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            UserName <span className="text-danger">{formValues.username}</span>
          </label>

          <input
            type="text"
            id="username"
            placeholder="kullanıcı adı"
            className="form-control"
            value={formValues.username}
            onChange={handleFormValues}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email <span className="text-danger">{formValues.email}</span>
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={formValues.email}
            onChange={handleFormValues}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input type="password" id="password" className="form-control" value={formValues.password}
             onChange={handleFormValues} 

            />
        </div>
        <button className="btn btn-primary" type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default FormObject;
