
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './page/Home'
import Contact from './page/Contact'
import Teachers from './page/Teachers'
import NotFound from './page/NotFound'
import Footer from './components/Footer'
import TeacherDetail from './page/TeacherDetail'

import Login from './page/Login'
import PrivateRouter from './page/PrivateRouter'
import FullStack from './page/FullStack'
import Aws from './page/Aws'
import Paths from './page/Paths'

function App() {
 

  return (
  
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            {/* <Route path='contact' element={<Contact/>} /> */}
            <Route path='teachers' element={<Teachers/>} />
            <Route path='teachers/:id' element={<TeacherDetail/>} />

            <Route path="contact" element={<PrivateRouter/>}>
                <Route path='' element={<Contact/>} />
            </Route>

            <Route path='/paths' element={<Paths/>}>
                <Route path="fullstack" element={<FullStack/>}  />
                <Route path="" element={<Aws/>}  />
            </Route>


            <Route path='login' element={<Login/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>

    </BrowserRouter>
      
    
  )
}

export default App
