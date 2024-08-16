//Importo librerias
import React from 'react'
import { Routes, Route} from 'react-router-dom'
//Importo componentes
import Header from './Components/Header/Header.jsx'
import Section from './Components/Section/Section.jsx'
import Footer from './Components/Footer/Footer.jsx'
import AboutMe from './Pages/AboutMe.jsx'
import Projects from './Pages/Projects.jsx'


function App() {
  return (
    <>
    <Header/>
    <Section/>
    <AboutMe/>
    <Projects/>
    <Footer/>
    <Routes>
    
    </Routes>
    

    </>
  )
}

export default App
