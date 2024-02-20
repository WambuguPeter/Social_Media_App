import '../styles/MainBottomLeft.scss'
import photo3 from '../assets/photo3.png'
import photo4 from '../assets/photo4.png'

import ProfileCompletion from '../Components/ProfileProgressBar'
import Intro from './Intro'


const MainBottomLeft = () => {
  return (
    <>
    <div className="left-main-buttom">
      <div className="profile-progress">
        <ProfileCompletion completedItems={9} totalItems={10}/>
      </div>
      <div className="intro">
        <Intro />
      </div>
      <div className="photos">
        <div className="headers">
          <h5>Photos</h5>
          <button className='seeAll'>
            <p>See all</p>
          </button>
        </div>
        <div className="imgs">
          <img src={photo3} alt="photo3" />
          <img src={photo4} alt="photo4" />
          <img src={photo3} alt="photo3" />
          <img src={photo4} alt="photo4" />
        </div>
      </div>
    </div>
    </>
  )
}

export default MainBottomLeft