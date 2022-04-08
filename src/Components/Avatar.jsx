import styles from '../Styles/Avatar.module.css'
import Img1 from '../Images/greet_1.png'
import Img2 from '../Images/greet_2.png'
import Img3 from '../Images/greet_3.png'
import Img4 from '../Images/greet_4.png'
import Img5 from '../Images/greet_5.png'
import Img6 from '../Images/greet_6.png'
import Img7 from '../Images/greet_7.png'
import Img8 from '../Images/greet_8.png'
import Img9 from '../Images/greet_9.png'
import Img10 from '../Images/greet_10.png'
import Img11 from '../Images/greet_11.png'
import Img12 from '../Images/greet_12.png'
import Img13 from '../Images/greet_13.png'
import Img14 from '../Images/greet_14.png'
import Img15 from '../Images/greet_15.png'
import Img16 from '../Images/greet_16.png'
import Img17 from '../Images/greet_17.png'
import Img18 from '../Images/greet_18.png'
import Img19 from '../Images/greet_19.png'
import Img20 from '../Images/greet_20.png'

const images = [
  Img1, 
  Img2, 
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20
]

function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function Avatar(){

  const RandomImg = ()=>{
    return <img className={styles.img} src={images[randomInt(1,20)]} alt='me' />
  }

  return(
    <section className={styles.container}>
      <div className={styles.image}>
        <RandomImg/>
      </div>
    </section>
  )
}