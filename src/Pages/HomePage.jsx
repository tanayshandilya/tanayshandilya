import styles from '../Styles/HomePage.module.css'
import Avatar from "../Components/Avatar";
import TextBox from '../Components/TextBox';

export default function HomePage(){
  return(
    <div className={styles.main}>
      <div className={styles.center}>
        <Avatar/>
        <TextBox/>
      </div>
    </div>
  )
}