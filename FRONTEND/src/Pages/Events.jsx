import '../styles/PageStlyles/Events.scss'
import calendar from '../assets/calendar.png'
import mask1 from '../assets/Mask1.png'
import mask2 from '../assets/Mask2.png'
import mask3 from '../assets/Mask3.png'
import mask4 from '../assets/Mask4.png'
import users from '../assets/users.png'
import map from '../assets/map-pin.png'

const Events = () => {
  return (
    <div className='EventsPage' >
      <h2>Find Event</h2>
      <div className="header">
        <div className="leftSide">
          <span>Popular</span>
          <span>For you</span>
          <span>Nearest</span>
          <span>Favourite</span>
          <span>Registered</span>
        </div>
        <div className="rightSide">
          <img src={calendar} alt="nopic" />
          <span>November</span>
        </div>
      </div>
      <div className="list">
        <div className="eventCard">
          <img src={mask1} alt="nopic" />
          <div className="eventDetail">
            <div className="eventName">
              <h4>National Seminar</h4>
              <span>By Carolyne</span>
            </div>
            <div className="date">
              <img src={calendar} alt="nopic" />
              <span>03 Feb, 2024.</span>
            </div>
          </div>
          <div className="people">
            <img src={users} alt="nopic" />
            <span>+2K are going</span>
          </div>
          <div className="location">
            <img src={map} alt="" />
            <span>4715 Nyeri. KSD center</span>
          </div>
          <button className='Register-btn' >Register</button>
        </div>

        <div className="eventCard">
          <img src={mask3} alt="" />
          <div className="eventDetail">
            <div className="eventName">
              <h4>National Seminar</h4>
              <span>By Carolyne</span>
            </div>
            <div className="date">
              <img src={calendar} alt="nopic" />
              <span>03 Feb, 2024.</span>
            </div>
          </div>
          <div className="people">
            <img src={users} alt="" />
            <span>+2K are going</span>
          </div>
          <div className="location">
            <img src="" alt="" />
            <span>4715 Nyeri. KSD center</span>
          </div>
          <button className='Register-btn' >Register</button>
        </div>

        <div className="eventCard">
          <img src={mask2} alt="" />
          <div className="eventDetail">
            <div className="eventName">
              <h4>National Seminar</h4>
              <span>By Carolyne</span>
            </div>
            <div className="date">
              <img src={calendar} alt="nopic" />
              <span>03 Feb, 2024.</span>
            </div>
          </div>
          <div className="people">
            <img src={users} alt="" />
            <span>+2K are going</span>
          </div>
          <div className="location">
            <img src="" alt="" />
            <span>4715 Nyeri. KSD center</span>
          </div>
          <button className='Register-btn' >Register</button>
        </div>

        <div className="eventCard">
          <img src={mask4} alt="" />
          <div className="eventDetail">
            <div className="eventName">
              <h4>National Seminar</h4>
              <span>By Carolyne</span>
            </div>
            <div className="date">
              <img src={calendar} alt="nopic" />
              <span>03 Feb, 2024.</span>
            </div>
          </div>
          <div className="people">
            <img src={users} alt="" />
            <span>+2K are going</span>
          </div>
          <div className="location">
            <img src="" alt="" />
            <span>4715 Nyeri. KSD center</span>
          </div>
          <button className='Register-btn' >Register</button>
        </div>
      </div>

    </div>
  )
}

export default Events