import React from 'react'
import styles from '../Styles/Timer.module.css'

const countDownDate = new Date("Jun 30, 2025 00:00:00").getTime()

export default function Timer(){

  const [Days, setDays] = React.useState(0)
  const [Hrs, setHrs] = React.useState(0)
  const [Mins, setMins] = React.useState(0)
  const [Sec, setSec] = React.useState(0)

  var x = setInterval(function() {
    var now = new Date().getTime()
    var distance = countDownDate - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    setDays(days)
    setHrs(hours)
    setMins(minutes)
    setSec(seconds)

    if (distance < 0) {
      clearInterval(x)
    }
  }, 1000)

  return(
    <div className={styles.container}>
      <div style={{marginRight: 6}}>{Days.toString().padStart(3, '0')} <span className={styles.name}>{Days <= 1 ? 'Day': 'Days'}</span></div>
      <div style={{marginRight: 6}}>{Hrs.toString().padStart(2,'0')} <span className={styles.name}>{Hrs <= 1 ? 'Hour': 'Hours'}</span></div>
      <div style={{marginRight: 6}}>{Mins.toString().padStart(2,'0')} <span className={styles.name}>{Mins <= 1 ? 'Min': 'Mins'}</span></div>
      <div>{Sec.toString().padStart(2,'0')} <span className={styles.name}>{Sec <= 1 ? 'Sec': 'Secs'}</span></div>
    </div>
  )
}
