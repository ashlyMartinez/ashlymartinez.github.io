
import styles from './Projects.module.css'
import projectArray  from './projectData.js'
export default function Projects(){ 
    console.log(projectArray)
    return (
        <div className ={styles.projectsContainer}>

            <h3 className={styles.projectsTitle} >PROJECTS</h3>

            <div className = {styles.projectsCards}>
               
                {projectArray.map((project, idx) => (
                    <div className = {styles.projectCard}>
                        <div className = {styles.projectText}>
                            <p className = {styles.projectName}>{project.name}</p>
                            <p className = {styles.projectDescription}>{project.description}</p>
                        </div>

                        <div className = {styles.projectSkillsWrapper}>
                            {project.skills.map((skill, idx) => (
                                <div className={styles.skills}>
                                    <p className={styles.skillText}>{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
               
            </div>
        </div>
    )
}