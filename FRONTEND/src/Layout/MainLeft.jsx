import '../styles/MainLeft.scss'
import MainBottomLeft from '../Components/MainBottomLeft'
import MainBottomRight from '../Components/MainBottomRight'
import bg from '../assets/bg-desktop-dark.jpg'
import avatar1 from '../assets/Avatar1.jpg'
const MainLeft = () => {
  return (
    <div>
      <div className="leftmain">        
        <button className='edit-profile' >Edit Proile</button>
        <img className='mainimg' src={bg} alt="nopic" />
        {/* <div className='avat'>
          <img src={avatar1} alt="nopic" />
          <div className="profimg">
            <h4>Jonathan</h4>
            <span>@Jonathan</span>
          </div>
        </div> */}
        
        <div className="profile-data">
          <div className='avat'>
            <img src={avatar1} alt="nopic" />
            <div className="profimg">
              <h4>Jonathan</h4>
              <span>@Jonathan</span>
            </div>
          </div>
          <div className="prodetails">
            <button className="posts">Posts
            <p>683</p>
            </button>
            <button className="followers">Followers
            <p>5.7K</p>
            </button>
            <button className="contacts">Contacts
            <p>297</p>
            </button>
            <button className="likes">Likes
            <p>10.7K</p></button>
          </div>
        
       
        </div>

        <div className="main-buttom">
          <MainBottomLeft />
          <MainBottomRight />    
        </div>       
      </div>
    </div>
  )
}

export default MainLeft