import '../styles/DifferentVideos.scss'
import music from '../assets/Musicvideo.png'
import users from '../assets/users.png'
import family from '../assets/familyvideo.png'

const DifferentVideos = () => {
  return (
    <div className="VideosItems">
    <div className="Videos">
        <div className="Video1">           
        <img src={music} alt="" />
        <div className="Music">
            <h4>Music</h4>
            <img src={users} alt="nopic" />
            {/* <button>See all</button> */}
        </div>
        </div>
    </div>

    <div className="Videos">
        <div className="Video1">           
        <img src={family} alt="" />
        <div className="Music">
            <h4>Family</h4>
            <img src={users} alt="nopic" />
            {/* <button>See all</button> */}
        </div>
        </div>
    </div>
</div>
  )
}

export default DifferentVideos