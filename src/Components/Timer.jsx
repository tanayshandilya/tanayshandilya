import { useEffect, useState } from 'react';
import Classes from '../Styles/Timer.module.css';

export default function Timer(){

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const updateTime = ()=>{
    const date_now = new Date();
    const date_future = new Date('1 Aug 2021');
    if(date_now < date_future){
      var d = Math.abs(date_future - date_now) / 1000
      var r = {};
      var s = {
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };

      Object.keys(s).forEach(function(key){
        r[key] = Math.floor(d / s[key]);
        d -= r[key] * s[key];
      });
      setDay(r.day);
      setHour(r.hour);
      setMin(r.minute);
      setSec(r.second);
    }
  }

  useEffect(function(){
    setInterval(updateTime, 1000)
  })

  return(
    <section className={Classes.TimerContainer}>
      <div className={Classes.TimerItem}>
        <span className={Classes.TimerText}>
          <span className={Classes.TimerTextBig}>{ day.toString().padStart(2,0) }</span>
          <span> Days</span>
        </span>
      </div>
      <div className={Classes.TimerItem}>
        <span className={Classes.TimerText}>
          <span className={Classes.TimerTextBig}>{ hour.toString().padStart(2,0) }</span>
          <span> Hours</span>
        </span>
      </div>
      <div className={Classes.TimerItem}>
        <span className={Classes.TimerText}>
          <span className={Classes.TimerTextBig}>{ min.toString().padStart(2,0) }</span>
          <span> Minutes</span>
        </span>
      </div>
      <div className={Classes.TimerItem}>
        <span className={Classes.TimerText}>
          <span className={Classes.TimerTextBig}>{ sec.toString().padStart(2,0) }</span>
          <span> Seconds</span>
        </span>
      </div>
    </section>
  )
}