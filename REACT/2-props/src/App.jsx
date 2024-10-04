

import './App.css'
import Header from './components/Header'

function App() {
  const title = "Kayseri Mantısı"

  return (
    <>
    
     <h1>başlık</h1>
     {/* props geçisi yaptık */}
     <Header neistiyorsam = {title} />
    </>
  )
}

export default App
