import { createRef } from 'react';
import Particles from 'react-particles-js';
import BGImg from '../Images/BgCs.jpg';
import Classes from '../Styles/HeroSection.module.css';
import InfoSection from './InfoSection';
import Timer from './Timer';

const particleSettings = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: "#fff"
    },
    opacity: {
      value: 0.65,
      anim: {
        enable: true
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 4
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      speed: 0.5
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: false
      }
    }
  }
}

export default function HeroSection(){
  const sRef = createRef(null)
  const handleMouseMove = (event)=>{
    const relative = (event.clientX / 80)
    sRef.current.style.backgroundPosition = `${relative / Math.PI}% center`;
  }
  return(
    <section ref={sRef} className={Classes.HeroSection} style={{ backgroundImage: `url(${BGImg})` }}>
      <div onMouseMove={handleMouseMove} className={Classes.HeroContentContainer}>
        <div className={Classes.HeroContent}>
          <div className={Classes.HeroGreet}>Hello, I am</div>
          <div className={Classes.HeroName}>Tanay Shandilya</div>
          <Timer/>
          <InfoSection/>
        </div>
      </div>
      <Particles height={window.innerHeight - 3} params={particleSettings} />
    </section>
  )
}