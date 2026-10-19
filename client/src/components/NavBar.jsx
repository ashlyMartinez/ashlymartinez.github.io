import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import styles from './NavBar.module.css'
export default function NavBar() {
  return (
    <nav>
      <ul className = {styles.navContainer}>
         
          <li><a href="#aboutMe">ABOUT ME</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#resume">RESUME</a></li>
          
      </ul>

    </nav>
    
  );
}

