// rafce kısayolu var

import Navbar from './Navbar'

const Header = ({neistiyorsam}) => {

  // veri yakalama yöntemleri.. 3 yöntem kullanıyoruz. 
  // 1. props yazarak.. props bir objedir. Header ın yanındaki func. parametre parantezine props yazarak ..

  // console.log(props) 

  // 2. desctructirig ... props un için dekini çıkararak
  // const {neistiyorsam} = props

  // 3. hava desct. Header ın yanındaki func. parametre parantezine {} içinde üst componentden gelen verinin adını yazarız
 
  console.log(neistiyorsam)
  return (
    <div>
    BURASI HEADER
    {neistiyorsam}
    <Navbar x = {neistiyorsam}/>
    </div>
  )
}

export default Header