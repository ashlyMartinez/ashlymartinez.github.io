import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import About from './pages/about/About.jsx'
import Projects from './pages/projects/Projects.jsx'
import Resume from './pages/resume/Resume.jsx'
import { useEffect } from 'react'
import $ from 'jquery';
import 'jquery.ripples';


function App() {
  


    
 

  return (
    
    <> 
    <div class= "appBackground">



    </div>
    <div  id="appContainer">
      
      <NavBar />
    
      <div id = "aboutMe"> 
        <About />
      </div>
      
      <div id = "projects">
        <Projects />
      </div>
      <div id = "resume">
        <Resume />
      </div>
      
    </div>
    
    
   </>
  )
}

export default App
