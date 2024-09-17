import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    alert(`username: ${username}
      email: ${email}
      password: ${password}`)
    

  } 

  return (
    <div>
      <form style={{ margin: "5rem" }} onSubmit={hadleSubmit}>
        {/* form label da for yerine htmlFor kullanılır */}
        {/* form input için reactta kapanış tagından önce / vardır */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            UserName <span className="text-danger">{username}</span>
          </label>

          <input
            type="text"
            id="username"
            placeholder="kullanıcı adı"
            className="form-control"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email <span className="text-danger">{email}</span>
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input type="password" id="password" className="form-control" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Form;
