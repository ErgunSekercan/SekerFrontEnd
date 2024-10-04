import React from 'react'
import Mesaj from "./Mesaj.jsx"
import personStyle from "./person.module.css"

const Person = ({veri}) => {

    console.log("persondaki veri" , veri)
    
    // desctruc.
    // const {img, tel, name} = veri

  return (
    <div>
  {/* eğer map işlemi yapıyorsak mutlaka key props unu kullanmalıyız. map alanının içindeki kapsayıcı etikete yazılır. benzersiz bir değer olmalıdır  */}
    {veri.map((p, index) => (
        <div key= {index}>
        <Mesaj isim = {p.name}/>
            
            <img src={p.img} alt="" style = {{width : "250px"}} />
            <p className={personStyle["pag"]}>{p.tel}</p>
        </div>
    ))}



    </div>
  )
}

export default Person