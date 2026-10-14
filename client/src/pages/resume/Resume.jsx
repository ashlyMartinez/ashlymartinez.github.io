import styles from './Resume.module.css';
import resume from './resumeData';

export default function Resume(){
    console.log(resume)
    return (
        <>
       
        <h3 className={styles.resumeTitle}>Resume</h3>
        <div className = {styles.resumeContainer}>
            
            <div className = {styles.educationContainer}>
                <p className={styles.sectionTitle}>Education</p>
                <p className = {styles.schoolName}>{resume.education.school}</p>
                <p className = {styles.gradDate}>{resume.education.date}</p>
                <p className = {styles.degreeName}>{resume.education.degree}</p>
            </div>
            <div className = {styles.skillsContainer}>
                <p className={styles.sectionTitle}>Skills</p>
                <div className = {styles.resumeSkillsWrapper}>
                    {resume.skills.map((skill, idx) => (
                        <div className={styles.skills}>
                            <p className={styles.skillText}>{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
            

        </div>
        </>
    )
}