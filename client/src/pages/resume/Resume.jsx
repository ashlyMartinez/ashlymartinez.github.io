import styles from './Resume.module.css';
import resume from './resumeData';

export default function Resume(){

    return (
        <>
       
        
        <div className = {styles.resumeContainer}>
            <h3 className = {styles.resumeTitle}>Resume</h3>
            <div className = {styles.experienceCards}>

            
                <div className = {styles.educationContainer}>
                    <p className={styles.sectionTitle}>Education</p>
                    <p className = {styles.schoolName}>{resume.education.school}</p>
                    <p className = {styles.gradDate}>{resume.education.date}</p>
                    <p className = {styles.degreeName}>{resume.education.degree}</p>
                </div>
                <div className = {styles.skillsContainer}>
                    <p className={styles.sectionTitle}>Skills</p>
                    <div className = {styles.skillsWrapper}>
                        {resume.skills.map((skill, idx) => (
                            <div className={styles.skills}>
                                <p className={styles.skillText}>{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className = {styles.experiencesContainer}>
                    <p className={styles.sectionTitle}>Experience</p>
                    <div className ={styles.experiencesWrapper}>
                        {
                            resume.experiencesList.map((experience, idx)=>
                                (
                                    <div className ={styles.experienceWrapper}>
                                        <div className  = {styles.experienceInfoWrapper}>
                                            <p className = {styles.employer}>{experience.employer}</p>
                                            <p className = {styles.experienceDate}>{experience.experienceDate}</p>
                                        </div>
                                        <div className = {styles.experienceList}>
                                            <ul>
                                                {
                                                    experience.bulletList.map((bulletPoint, idx)=>{
                                                        return (<li>{bulletPoint}</li>)
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    )
                            )

                        }

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}