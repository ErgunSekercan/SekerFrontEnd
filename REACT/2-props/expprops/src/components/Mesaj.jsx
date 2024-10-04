import React from 'react'
import mesajStyle from  "./mesaj.module.css"
import personStyle from  "./person.module.css"

const Mesaj = ({isim}) => {
    console.log(isim)
  return (
    <div>
    {/* <h1 className = "msg-title">Merhaba {isim}</h1> */}
    <h1 className = {mesajStyle["msg-title"]}>Merhaba {isim}</h1>
    <p className={personStyle["pag"]}>kontrol</p>
    </div>
  )
}

export default Mesaj