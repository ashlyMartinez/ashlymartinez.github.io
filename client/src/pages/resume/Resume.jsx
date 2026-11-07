import styles from './Resume.module.css';
import resume from './resumeData';
import realResume from '../../assets/Ashly_Martinez_Resume.pdf'
export default function Resume(){

    return (
        <>
        <div className = {styles.resumeContainer}>

            <div className={styles.resumeHeader}>
                <h2 className={styles.resumeTitle}>RESUME</h2>
                <div className={styles.actionButtons}>
                    {/* LinkedIn Icon Button */}
                    <a 
                        href="https://www.linkedin.com/in/ashlymichelle/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        
                        className= {styles.actionButton}
                        aria-label="LinkedIn Profile"
                    >
                        <svg 
                            id = {styles.linkedInBtn}
                            width="18" 
                            height="18" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                        >
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                    {/* GitHub Icon Button */}
                    <a 
                        href="https://github.com/ashlyMartinez" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.actionButton}
                        aria-label="GitHub Profile"
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
                        <span>GitHub</span>
                    </a>

                    {/* Download Resume Button */}
                    <a 
                        href= {realResume}
                        download="Ashly_Martinez_Resume.pdf" 
                        className={styles.actionButton}
                        aria-label="Download PDF Resume"
                    >
                        <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        <span>Download PDF Resume</span>
                    </a>

                </div>
                
            </div>


            <div className = {styles.experienceCards}>
   
                <div className={`${styles.glassCard} ${styles.educationContainer}`}>
                    <h3 className={styles.sectionTitle}>EDUCATION</h3>
                    <div className={styles.educationDetails}>
                        <div>
                        <p className={styles.schoolName}>{resume.education.school}</p>
                        <p className={styles.degreeName}>{resume.education.degree}</p>
                        </div>
                        <p className={styles.gradDate}>{resume.education.date}</p>
                    </div>
                </div>
                

                <div className={`${styles.glassCard} ${styles.skillsContainer}`}>
                    <h3 className={styles.sectionTitle}>SKILLS</h3>
                    <div className={styles.skillsWrapper}>
                        {resume.skills.map((skill, idx) => (
                        <div key={idx} className={styles.skills}>
                            <p className={styles.skillText}>{skill}</p>
                        </div>
                        ))}
                    </div>
                </div>

                <div className={`${styles.glassCard} ${styles.experiencesContainer}`}>
                    <h3 className={styles.sectionTitle}>EXPERIENCE</h3>
                    <div className={styles.experiencesWrapper}>
                        {resume.experiencesList.map((experience, idx) => (
                            <div key={idx} className={styles.experienceWrapper}>
                                <div className={styles.experienceInfoWrapper}>
                                    
                                    <p className={styles.title}>{experience.title}</p>
                                    
                                    <p className={styles.experienceDate}>{experience.experienceDate}</p>
                                </div>
                                
                                <div className={styles.experienceList}>
                                    {experience.bulletList.map((bulletPoint, bIdx) => (

                                        <p key={bIdx} className={styles.bulletItem}>
                                            {bulletPoint}
                                        </p>

                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}