import '../styles/Intro.scss'
import '../styles/MainBottomLeft.scss'
import map from '../assets/map-pin.png'
import briefcase from '../assets/briefcase.png'
import  calendar from '../assets/calendar.png'
import ink from '../assets/ink.png'


const Intro = () => {
  return (
    <div>
        <div className="intro">
        <h4>Intro</h4>
        <span>Am a Senior software developer and a Trainer at Teach2Give</span>            
        <div className="addressDetails">
            <div className='detail'>
            <img src= {map} alt="map" />
            <span>Nyeri Kenya</span>
            </div>
            <div className='detail'>
            <img src= {briefcase} alt="map" />
            <span>The Jitu Ltd</span>
            </div>
            <div className='detail'>
            <img src= {calendar} alt="map" />
            <span>29 Jan, 2024</span>
            </div>
            <div className='detail'>
            <img src= {ink} alt="map" />
            <span>
            <link rel="stylesheet" href="#" />  The Jitu.com</span>
            </div>     
            
        </div>
          </div>
    </div>
  )
}

export default Intro