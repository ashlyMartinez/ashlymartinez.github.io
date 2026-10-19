
import styles from './About.module.css'
import headShot from '../../assets/headshot.png'

export default function About(){
    return(
        <>
        <div className = {styles.dummyDiv}>

        </div>
        <div className = {styles.aboutContainer} >
            
            
            <div className = {styles.aboutTextContatiner}>
                <h3 className = {styles.aboutName}> Ashly Martinez</h3>
                <p className = {styles.aboutPosition}> Entry Level: Full Stack Developer</p>
                <p className = {styles.aboutParagraph}>Electrical Engineering and Computer Science graduate from UC Berkeley with hands-on software engineering experience across full-stack web development and data pipelines. Proficient in Python, JavaScript, and React, with a track record of building production-facing applications, integrating third-party APIs, and shipping well-tested code across internship and project roles.</p>
            </div>

            <div className = {styles.headShotContainer}>
                <img src = {headShot} className={styles.headShot}width="290px" height="330px"/>
            </div>
            <div className={styles.scrollIndicator}>
                <a href="#projects" aria-label="Scroll down to About Me">
                    <span></span>
                    <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </a>
            </div>
        </div>
        

        </>
        
    )
}

