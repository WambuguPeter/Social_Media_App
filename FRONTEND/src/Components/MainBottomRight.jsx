import '../styles/MainBottomRight.scss'
import ink from '../assets/ink.png'
import photo3 from '../assets/photo3.png'
import photo4 from '../assets/photo4.png'
import video from '../assets/VIDEOS.png'
import star from '../assets/star.png'
import image from '../assets/image.png'
import likes from '../assets/heart.png'
import message from '../assets/message.png'
import share from '../assets/share.png'
import moodSmile from '../assets/mood-smile.png'
import avatar1 from '../assets/Avatar1.jpg'

const MainBottomRight = () => {
  return (
  <div className="right-main-buttom">
        <div className="onUrMind">
            <div  className="input2">
              <img className='avatar1' src={avatar1} alt="nopic"/>
              <input className="put" type="text" placeholder="What on your mind?" />
            </div>
          <div className="preview">
            <div className="previewdata">
              <img src={video} alt="nopic" />
              <span>Live Video</span>
            </div>
            <div className="previewdata">
              <img src={image} alt="nopic" />
              <span>Image/Video</span>
            </div>
            <div className="previewdata">
              <img src={star} alt="nopic" />
              <span>Activity</span>
            </div>
          </div>
        </div>
            <div className="posted">
              <div className="postUser">
                <img className='Avat' src={avatar1} alt="nopic" />
                <div className="postUserdetails">
                  <p>Jonathan Lee</p>
                  <span>56 minutes ago</span>
                </div>                
              </div>
              <div className="postdescript">
                <span>Here are some photography works that I made on the weekend
                   with some of my friends, happy for that!</span>
              </div>
              <div className="postphotos">
                <img src={photo3} alt="nopic" />
                <img src={photo4} alt="nopic" />
                <img src={photo3} alt="nopic" />
                <img src={photo3} alt="nopic" />
                <img src={photo4} alt="nopic" />
                <img src={photo3} alt="nopic" />
              </div>
              <div className="postfeedbacks">
                <div className="feedbacks">
                  <img src={likes} alt="nopic" />
                  <span>2.6k Likes</span>
                </div>
                <div className="feedbacks">
                  <img src={message} alt="nopic" />
                  <span>297 Comments</span>
                </div>
                <div className="feedbacks">
                  <img src={share} alt="nopic" />
                  <span>201 Share</span>
                </div>
              </div>

              <div className="urMessage">
                <input type="text" placeholder="Write your message" />
                <img src={moodSmile} alt="nopic" />
                <img src={ink} alt="nopic" />

              </div>
            </div>            
    </div>
   
  )
}

export default MainBottomRight