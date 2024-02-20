import '../styles/RecentVideo.scss'
import avatar from '../assets/Avatar1.jpg'
import cook from '../assets/cook.png'


const RecentVideo = () => {
  return (
    <div>
        <div className="videos">
              <div className="User">
                <img className='Avat' src={avatar} alt="nopic" />
                <div className="Userdetails">
                  <p>Jonathan Lee</p>
                  <span>56 mins ago</span>
                </div>                
              </div>
              <div className="activdescript">
                <span>Here are some Activity works that I made on the weekend
                   with some of my friends, happy for that!</span>
              </div>
              <div className="videosPosted">
                {/* <video src=""></video> */}
                <img src={cook} alt="nopic" /> 
              </div>
                          
            </div>
    </div>
  )
}

export default RecentVideo