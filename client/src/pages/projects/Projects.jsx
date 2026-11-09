
import styles from './Projects.module.css'
import projectArray  from './projectData.js'

// import insyteCover from "../../assets/insyteCover.png"
export default function Projects(){ 
    
    return (
        <div className ={styles.projectsContainer}>

            <h3 className={styles.projectsTitle}>PROJECTS</h3>

            <div className = {styles.projectsCards}>
               
                {projectArray.map((project, idx) => (
                    <div className={styles.projectCard}>
                        <div className={styles.projectHeader}>
                            <h3 className={styles.projectName}>{project.name}</h3>
                            
                            {project.githubUrl && (
                            
                                <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={styles.githubButton}
                                aria-label="View GitHub Repository"
                                >
                                
                                <svg 
                                    width="18" 
                                    height="18" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                            </a>
                            )}

                        </div>
                        <div className={styles.projectImgWrapper}>
                            <img 
                                src={project.image}
                                alt={`${project.name} preview`} 
                                className={styles.coverImg} 
                            />
                            </div>
                        <div className={styles.descriptionList}>
                            {project.description.map((point, index) => (
                            <p key={index} className={styles.projectDescription}>
                                {point}
                            </p>
                            ))}
                        </div>

                        <div className={styles.projectSkillsWrapper}>
                            {project.skills.map((skill, idx) => (
                            <div key={idx} className={styles.skills}>
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