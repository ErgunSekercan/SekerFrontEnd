
import './App.css'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './componnets/styles/Global'
import Header from './componnets/Header'
import Card from './componnets/Card'
import Footer from './componnets/Footer'

function App() {
const theme = {
colors : {
  header : "#fff",
  body :  "#fff",
  footer : "#8a1c4a"
},
responsive : "768px"
}



  

  return (
    <ThemeProvider theme = {theme}>
    <GlobalStyles/>
    <Header/>
    <Card/>
    <Card/>
    <Card/>
    <Footer/>



    </ThemeProvider>
  )
}

export default App
