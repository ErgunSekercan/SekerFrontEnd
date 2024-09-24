import { Outlet, Navigate } from "react-router-dom"





const PrivateRouter = () => {

    // const userToken = true
    const admin = false

  return (
    <div>
        {admin ? <Outlet/>   :  <Navigate  to="/login"   /> }
    </div>
  )
}

export default PrivateRouter