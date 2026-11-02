import styles from './Resume.module.css';
import resume from './resumeData';
import realResume from '../../assets/Ashly_Martinez_Resume.pdf'
export default function Resume(){

    return (
        <>
        <div className = {styles.resumeContainer}>

            <div className={styles.resumeHeader}>
                <h2 className={styles.resumeTitle}>RESUME</h2>
                <a 
                href={realResume}
                download="Ashly_Martinez_Resume.pdf" 
                className={styles.downloadButton}
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
                    <span>Download PDF</span>
                </a>
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