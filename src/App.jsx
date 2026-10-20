import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/AboutUs'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
