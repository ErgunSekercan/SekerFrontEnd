import Person from "./components/Person"
import {data}  from "./utils/data.js"



const App = () => {

  console.log(data)

  return (
    <div>
    <Person veri = {data}/>
    
    </div>
  )
}

export default App



