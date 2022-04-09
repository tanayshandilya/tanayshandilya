import styles from '../Styles/TextBox.module.css'
import { FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'
import Timer from './Timer'

const social = [
  {
    id: 0,
    icon: FaLinkedin,
    color: '#0077b5',
    url: 'https://www.linkedin.com/in/tanayshandilya'
  },
  {
    id: 1,
    icon: FaEnvelope,
    color: '#ed4141',
    url: 'mailto:info@tanayshandilya.com'
  },
  {
    id: 2,
    icon: FaInstagram,
    color: '#c231a1',
    url: 'https://www.instagram.com/tanayshandilya'
  }
]

export default function TextBox(){
  return(
    <div className={styles.textMain}>
      <div className={styles.text}>Hi, I am <br/><span className={styles.primary}>Tanay Shandilya</span></div>
      <div className={styles.desc}>I am a cyber security consultant, cloud architect, hobby developer, data science enthusiast, and also a blockchain geek. I am currently working as a Cyber Risk Consultant @ Deloitte.</div>
      <div className={styles.foot}>Website is coming soon</div>
      <Timer/>
      <div className={styles.socialContainer}>
        {
          social.map(item => <a key={item.id} target="_blank" rel="noreferrer" href={item.url} className={styles.button} style={{color: item.color}}>
            {<item.icon/>}
          </a>)
        }
      </div>
    </div>
  )
}