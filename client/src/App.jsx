import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import About from './pages/about/About.jsx'
import Projects from './pages/projects/Projects.jsx'
import Resume from './pages/resume/Resume.jsx'
function App() {
 

  return (
    <>
    
    <NavBar />
    {/* <div id="a"> 
      
    </div> */}
    <div id = "aboutMe"> 
      <About />
    </div>
    
    <div id = "projects">
      <Projects />
    </div>
    <div id = "resume">
      <Resume />
    </div>
    
    </>
  )
}

export default App
